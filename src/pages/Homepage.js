import React from "react";
import NavBar from "../component/navbar/NavBar";
import Content from "../component/Content";
import Footer from "../component/footer/Footer";
import "./Homepage.css"
import NewNavBar from "../component/navbar/NewNavBar";


class Homepage extends React.Component {
    render () {
        return (
            <div style={{height:"fit-content"}}>
                 <NavBar/>
                 {/*<NewNavBar/>*/}
                <Content/>
                <Footer/>
            </div>  
        )
    }
}


export default Homepage;