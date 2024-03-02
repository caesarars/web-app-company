import React from "react";
import NavBar from "../component/navbar/NavBar";
import ContentOurService from "../component/ContentOurService";
import Footer from "../component/footer/Footer";

class Service extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <ContentOurService />
                
            </div>
        )
    }
}

export default Service;