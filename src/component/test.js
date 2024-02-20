import React from "react";
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "./test.css"

const Test = () => {
    return (
                <nav className="navbar navbar-expand bg-secondary">
                    <Link to="/" className="navbar-brand text-xl font-bold text-danger">Brand</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <span>Home</span>
                            </li>
                            <li className="nav-item">
                                <span>About</span>
                            </li>
                            <li className="nav-item">
                                <span>Service</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger-menu" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>                
    ) 
}

export default Test;