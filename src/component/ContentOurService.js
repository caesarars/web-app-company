import React from "react";
import whatWeDoImg from "../static/img/what_we_do.png"
import "./ContentOurService.css"
import svgArrow from "../static/icon/arrow-up-right.svg"


const ContentOurService = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper_left_service_content">
                        <div className="d-flex flex-column align-items-left">
                            <span id="what_we_do" className="mb-5 mt-5">What We Do</span>
                            <span id="text_2" >Get expert assistance at different stages with your unique design needs from professionals with over 6 years of experience.</span>
                            <div className="btn start_project btn-orange mt-5">
                                <span className="start_project_text">Start a Project</span>
                                <img src={svgArrow} alt="My SVG" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={whatWeDoImg} alt="what we do pic"/>
                </div>
            </div>
        </div>
    )
}

export default ContentOurService;