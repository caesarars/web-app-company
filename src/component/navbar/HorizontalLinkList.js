import React from "react";
import { Link } from "react-router-dom";
import LinkList from "./LinkList";


const HorizontalLinkList = (props) => {

    const currentLocation = props.currentLocation;

    return (
        <div>
            <div className="navbar-nav">
                <LinkList currentLocation={currentLocation}/>
            </div>
        </div>
    )
}

export default HorizontalLinkList;