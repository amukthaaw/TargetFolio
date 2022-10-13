import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router";
const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email : '',
        password : ''
    });

    //handling input
    const handleChange = (event) =>{
        let name = event.target.name
        let value = event.target.value

        setUser({...user, [name]:value})
    }

    //handling login
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const{email, password} = user;
        try {
            const res = await fetch('/login', {
                method : "Post",
                headers : {
                    "Content-Type" : "applicatin/json"
                },
                body : JSON.stingify({
                    email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert("Login Successful");
                window.location.reload();
                navigate.pushState('/')
            }
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center form text-white justify-content-center">
                        <h1 className='display-4'>Welcome Back!</h1>
                        <p className='lead text-center'>Enter your credentials to Login</p>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5 ">LOGIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="Email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='email' value={user.email} onChange={handleChange} />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="Password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    name='password' value={user.password} onChange={handleChange}/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-dark">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;