import React from "react";
import ourVisionImg from "../../../static/img/our-vision.png"
import "./OurVision.css"

class OurVision extends React.Component {
    render () {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                    <img src={ourVisionImg} />
                    </div>
                    
                    <div className="col-md-5 offset-md-1 right-section">
                        <div className="wrapper-right-text">
                            <div className="row-vision">
                                    <p id="our-vision">Our Vision
                                    </p>
                                    <div className="wrapper-orange-line">
                                        <div id="orange-line"></div>
                                    </div>
                                    
                            </div>
                            <p id="our-vision-text">
                                Lorem ipsum dolor sit amet consectetur. Mauris nam nec nisi adipiscing id enim at nullam ullamcorper. Sed cursus elementum imperdiet id est dignissim. Auctor sit lorem a.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurVision;