import React from "react";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import ContentAbout from "../component/ContentAbout";
import NewNavBar from "../component/navbar/NewNavBar";

class About extends React.Component {
    render () {
        return (
            <div style={{height:"fit-content"}}>
                {/*<NavBar/> */}
                <NewNavBar/>
                <ContentAbout/>
                <Footer/>
            </div>
        )
    }
}

export default About