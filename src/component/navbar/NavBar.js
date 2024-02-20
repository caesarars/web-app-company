import React, {Component, useState} from "react";
import {Menu, Image} from "semantic-ui-react";
import logoKawanKerja from "../../static/img/dltech-logo-l.png"
import { Outlet, Link } from "react-router-dom";


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          active: "Home",
        };
    }
     
    listOfNavName = [
        'Home',
        'About',
        'Services',
        'Works',
        'Blog'
    ]
  
     handleClickMenu = (name) => {
        this.setState({ active: name });
        console.log(name)
    }


    render() {
        return (
            <div className="container_nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="d-flex align-items-end"> 
                            <img id="imageLogo" src={logoKawanKerja} />
                        </div>
                        
                    </div>
                    <div className="col-md-1"></div>
                    <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div className="col-md-6 collapse navbar-collapse">
                        <ul className="collapse navbar-nav mr-auto mynav d-flex flex-row justify-content-center">
                            <li onClick={() => this.handleClickMenu('Home')} 
                                className={this.state.active == 'Home' ? 'nav-link menu-item-active bar-active' : 'nav-link menu-item'}>
                                <Link style={{textDecoration:"none"}} to={`/web-app-company/`} >
                                    <span className={this.state.active == 'Home' ? 'nav-item active' : 'nav-item non-active'}>
                                        Home
                                </span>
                                </Link>
                               
                            </li>
                            <li onClick={() => this.handleClickMenu('About')} 
                                className={this.state.active == 'About' ? 'nav-link menu-item-active bar-active' : 'nav-link menu-item'}>
                                <Link style={{textDecoration:"none"}} to={`/web-app-company/about`}>
                                    <span className={this.state.active == 'About' ? 'nav-item active' : 'nav-item non-active'}>
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li onClick={() => this.handleClickMenu('Services')} 
                                className={this.state.active == 'Services' ? 'nav-link menu-item-active' : 'nav-link menu-item'}>
                                <Link style={{textDecoration:"none"}} to={`/web-app-company/service`}>
                                    <span className={this.state.active == 'Services' ? 'nav-item active' : 'nav-item non-active'}>
                                        Services
                                    </span>
                                </Link>
                                
                            </li>
                            <li onClick={() => this.handleClickMenu('Works')} 
                                className={this.state.active == 'Works' ? 'nav-link menu-item-active' : 'nav-link menu-item'}>
                                 <Link style={{textDecoration:"none"}} to={`/web-app-company/works`}>
                                    <span className={this.state.active == 'Works' ? 'nav-item active' : 'nav-item non-active'}>
                                    Works
                                    </span>
                                </Link>
                            </li>
                            <li onClick={() => this.handleClickMenu('Blog')} 
                                className={this.state.active == 'Blog' ? 'nav-link menu-item-active' : 'nav-link menu-item'}>
                                <span className={this.state.active == 'Blog' ? 'nav-item active' : 'nav-item non-active'}>
                                    Blog
                                </span>
                            </li>
                            <li className="nav-link" id="contactus">
                                <span className="nav-item">Contact Us</span>
                            </li>
                        </ul>
                    </div>
                </div>
                    
                    
                </nav>
            </div>
        )
    }
}

export default NavBar;