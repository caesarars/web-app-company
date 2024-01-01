import React from "react";
import NavBar from "../component/navbar/NavBar";
import Content from "../component/Content";


class Homepage extends React.Component {
    render () {
        return (
            <div style={{height:"fit-content"}}>
                <NavBar/>
                <Content/>
            </div>  
        )
    }
}


export default Homepage;