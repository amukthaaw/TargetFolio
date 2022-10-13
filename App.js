// Importing all Dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

//To configure ENV file and required connection file
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Required Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');   //error

//this method used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send("Hello Peeps!");
})


//login User schema
app.post('/login', async (req, res) =>{
    try{
        const email = req.body.email;
        const password =  req.body.password;
        
        
        // to check if a user exists
        const user = await Users.findOne({email : email});
        if(user){
            //to verify the password
            const isMatch = await bcryptjs.compare(password, user.password);
            
            if(isMatch){
                //we generate a token which is defined in user Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // To expire token in 24 hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("logged In")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }
    } catch(error) {
        res.status(400).send(error);
    }
})

//logout page
app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
    
})

//Message-contact schema
app.post('/message', async (req, res)=>{
    try{
        //to get body or data
        const name = req.body.username;
        const email = req.body.email;
        const message = req.body.message;
        
        const sendMsg = new Users({
            name : name,
            email : email,
            message : message
        })
        
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");

} catch (error){
    res.status(400).send(error)
}
})

//Authentication
app.get('/auth', authenticate, (req, res)=>{

})


// To run server
app.listen(3001, () =>{
    console.log("Server is listening")
})