import React from "react";
import NavBar from "../component/NavBar";
import Content from "../component/Content";
import ServiceContent from "../component/ServiceContent";


class Homepage extends React.Component {
    render () {
        return (
            <div style={{height:"1200vh"}}>
                <NavBar/>
                <Content/>
            </div>  
        )
    }
}


export default Homepage;