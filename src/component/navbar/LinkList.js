import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../../modalReducer";
import CardModal from "../CardModal/CardModal";



const LinkList = (props) => {

    // get value from state redux toggleModal
    const dispatch = useDispatch()
    const currentLocation = props.currentLocation

    return (
        <>
        <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
            <Link 
                    to={`/web-app-company/`}>
                    <span  className={ currentLocation === ''  ? 'nav-item active' : 'nav-item non-active'}>
                        Home
                     </span>
                </Link>
                <Link
                    to={`/web-app-company/about`}>
                    <span className={currentLocation === 'about' ? 'nav-item active' : 'nav-item non-active'} >
                        About
                    </span>
                </Link>
                <Link
                    to={`/web-app-company/service`}>
                    <span className={currentLocation === 'service' ? 'nav-item active' : 'nav-item non-active'} >
                        Services
                    </span>
                </Link>
                <Link 
                    to={`/web-app-company/works`}>
                    <span className={currentLocation === 'works' ? 'nav-item active' : 'nav-item non-active'} >
                        Works
                    </span>
                </Link>
                <Link className={ currentLocation === 'blog' ? 'nav-item active' : 'nav-item non-active'} 
                 to={`/web-app-company/blog`}>
                                    <span>
                                        Blog
                                    </span>
                                </Link>
                                <Link className="nav-link" id="contactus" onClick={ () => dispatch(toggle())}>
                                    <span className="nav-item">Contact Us</span>
                                </Link>           
        </div>
        <CardModal />
        </>
    )
}

export default LinkList;