import React, {Component, useState} from "react";
import {Menu, Image} from "semantic-ui-react";
import logoKawanKerja from "../../static/img/dltech-logo-l.png"

import "./NavBar.css"

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
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="d-flex align-items-end"> 
                            <img src={logoKawanKerja} />
                        </div>
                        
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto mynav d-flex justify-content-center">
                            <li onClick={() => this.handleClickMenu('Home')} 
                                className={this.state.active == 'Home' ? 'nav-link menu-item-active bar-active' : 'nav-link menu-item'}>
                               <span className={this.state.active == 'Home' ? 'nav-item active' : 'nav-item non-active'}>
                                    Home
                               </span>
                            </li>
                            <li onClick={() => this.handleClickMenu('About')} 
                                className={this.state.active == 'About' ? 'nav-link menu-item-active bar-active' : 'nav-link menu-item'}>
                                <span className={this.state.active == 'About' ? 'nav-item active' : 'nav-item non-active'}>
                                    About
                                </span>
                            </li>
                            <li onClick={() => this.handleClickMenu('Services')} 
                                className={this.state.active == 'Services' ? 'nav-link menu-item-active' : 'nav-link menu-item'}>
                                <span className={this.state.active == 'Services' ? 'nav-item active' : 'nav-item non-active'}>
                                    Services
                                </span>
                            </li>
                            <li onClick={() => this.handleClickMenu('Works')} 
                                className={this.state.active == 'Works' ? 'nav-link menu-item-active' : 'nav-link menu-item'}>
                                <span className={this.state.active == 'Works' ? 'nav-item active' : 'nav-item non-active'}>
                                    Works
                                </span>
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
                    
                </nav>
            </div>
        )
    }
}

export default NavBar;