import React from "react";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import ContentWorks from "../component/ContentWorks";
import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Works = () =>  {
    const location = useLocation();
    const isDetailPage = location.pathname.includes("/web-app-company/works/") && location.pathname.split("/").pop() !== "";

        return (
            <div>
                <NavBar/>
                {!isDetailPage && <ContentWorks />}
                <Outlet/>
                <Footer/>
            </div>
        )
    
}

export default Works;