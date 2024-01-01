import React, {Component} from "react";
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

    handleClickMenu = (e, { name }) => this.setState({ active: name })

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
                            <li className="nav-link menu-item">
                               <span className="nav-item active">Home</span>
                            </li>
                            <li className="nav-link menu-item">
                                <span className="nav-item">About</span>
                            </li>
                            <li className="nav-link menu-item">
                                <span className="nav-item">Services</span>
                            </li>
                            <li className="nav-link menu-item">
                                <span className="nav-item">Works</span>
                            </li>
                            <li className="nav-link menu-item">
                                <span className="nav-item">Blog</span>
                            </li>
                            <li style={{"marginLeft" : "16px"}}className="nav-link" id="contactus">
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