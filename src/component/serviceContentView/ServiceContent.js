import React from "react";
import "./ServiceContent.css"
import iconService1 from "../../static/icon/icon-service-1.png"
import iconService2 from "../../static/icon/icon-service-2.png"
import iconService3 from "../../static/icon/icon-service-3.png"


class ServiceContent extends React.Component {
    render () {
        return (
            <div>
                <div className="row mb-2">
                    <span style={{fontSize:"40px", fontWeight:"bold"}}>
                        Empowering Solutions For Your Needs
                    </span>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="content-cards">
                            <img src={iconService1} style={{position:"relative", top:"20px", zIndex:"100"}}/>
                            <div className="content-text">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p className="pt-5 mt-5 title-content">UI/UX Design</p>
                                    <div className="p-3">
                                        <span className="content">
                                            Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-cards">
                            <img src={iconService2} style={{position:"relative", top:"20px", zIndex:"100"}}/>
                            <div className="content-text">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p className="pt-5 mt-5 title-content">Website App</p>
                                    <div className="p-3">
                                        <span className="content">
                                            Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-cards">
                            <img src={iconService3} style={{position:"relative", top:"20px", zIndex:"100"}}/>
                            <div className="content-text">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <p className="pt-5 mt-5 title-content">Mobile App</p>
                                    <div className="p-3">
                                        <span className="content">
                                            Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceContent;