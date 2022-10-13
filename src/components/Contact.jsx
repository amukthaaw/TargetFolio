import React, {useState} from 'react';

const Contact = () => {


    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
    });

    //handling inputs
    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg,[name]:value});
    }

    //handling submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        //storing object data into variables
        const {name, email, message} = msg;
        try {
            //submitted to the port 3000 by default
            //to submit on backend (port 3001) we use Proxy
            const res = await fetch('/message',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name, email, message
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Message Not sent. Try again later")
            }else{
                window.alert("Message Sent");
                setMsg({
                    name : "",
                    email : "",
                    message : ""
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-2 text-center mb-0">Your Feedback is valuable to us!</h3>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/Contact.png" alt="contact-us" className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. Akhila"
                                        name='name' value={msg.name} onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="eg. name@example.com"
                                        name='email' value={msg.email} onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Enter your feedback</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message...'
                                    name='message' value={msg.message} onChange={handleChange}></textarea>
                                </div>
                                <button type='submit' className='btn btn-outline-secondary rounded-pill '>Send Feedback <i className='fa fa-paper-plane ms-2'></i> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;