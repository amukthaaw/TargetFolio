import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow">
                <div className="container">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Feedback</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Footer">Newsletter</NavLink>
                            </li>    
                        </ul>
                        <NavLink className="navbar-brand fw-bolder fs-3 mx-auto text-center" to="/">Targetfolio</NavLink>
                        <NavLink to="/Login" className='btn btn-outline-dark rounded-pill px-4 me-3'>Sign In!</NavLink>
                        <NavLink to='/Dashboard' className='btn btn-outline-dark rounded-pill px-4 me-3'>
                          <i className='fa fa-user-plus me-2'> Dashboard </i>  
                        </NavLink>
                        <NavLink to='/Logout' className='btn btn-outline-dark rounded-pill px-4'>
                          <i className='fa fa-sign-out me-2'>Logout</i>  
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;