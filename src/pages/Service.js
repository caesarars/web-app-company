import React from "react";
import NavBar from "../component/navbar/NavBar";

class Service extends React.Component {
    render() {
        return (
            <div style={{height:"fit-content"}}>
                <NavBar/>
                <h2>Welcome this is service</h2>
            </div>
        )
    }
}

export default Service;