import React, {Component, useState, useEffect} from "react";
import {Menu, Image} from "semantic-ui-react";
import logoKawanKerja from "../../static/img/dltech-logo-l.png"
import { Outlet, Link, useLocation } from "react-router-dom";
import HorizontalLinkList from "./HorizontalLinkList"
import HamburgerMenu from "./HamburgerMenu";
import VerticalLinkList from "./VerticalLinkList";
import "./NavBar.css"

const NavBar = (props) => {
        

    let location = useLocation();

    let currentLocation = location.pathname.split("/")[2]
    
    const [ toggleHamburger, setToggleHamburger ] = useState(false)

    const handleToggle = () => {
        setToggleHamburger(!toggleHamburger)
        console.log(toggleHamburger)
    }

    useEffect(() => {
        console.log(currentLocation)
    }, [currentLocation])
    
        return (
            <div id="main_wrapper_nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid container">
                        
                        <Link className="navbar-brand justify-content-start" to={"/web-app-company"}>
                                <img id="imageLogo" src={logoKawanKerja} alt="image_logo"/>
                        </Link>
                        
                        <HamburgerMenu clickFunction={handleToggle}/>
                        
                        <HorizontalLinkList currentLocation={currentLocation} />

                        <VerticalLinkList isDisplay={toggleHamburger} currentLocation={currentLocation} />
                        
                    </div>
                        
                </nav>
            </div>
        )
}

export default NavBar;