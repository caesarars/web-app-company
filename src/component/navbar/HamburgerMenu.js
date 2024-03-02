import React from "react";

const HamburgerMenu = ({clickFunction}) => {
    return (
        <div style={{position:'absolute' , right:'5%'}} className="wrapper_hamburger" onClick={ () => clickFunction()}>
            <div className="hamburger-menu">
                                <span></span>
                                <span></span>
                                <span></span>
            </div>
        </div>
    )
}

export default HamburgerMenu;