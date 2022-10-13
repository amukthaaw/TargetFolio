import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-mid-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Plan your Day. Stay Productive.</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nihil alias beatae officiis. Aliquid consectetur mollitia blanditiis, amet aliquam maiores?
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to='/Login' className="btn btn-outline-light me-4 rounded-pill px-5 py-2">Sign In</NavLink>
                                <NavLink to='/About' className="btn btn-outline-light rounded-pill px-5 py-2">About Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Contact/>
            
        </div>
    );
}
export default Home;