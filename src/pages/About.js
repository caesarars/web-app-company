import React from "react";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import ContentAbout from "../component/ContentAbout";

class About extends React.Component {
    render () {
        return (
            <div style={{height:"fit-content"}}>
                <NavBar/>
                <ContentAbout/>
                <Footer/>
            </div>
        )
    }
}

export default About