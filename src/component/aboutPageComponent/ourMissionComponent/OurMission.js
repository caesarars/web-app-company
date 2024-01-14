import React from "react";
import "./OurMission.css"

import ourMissionImg from "../../../static/img/our-mission.png"

class OurMission extends React.Component {
    render () {
        return (
            <div className="container mt-5">
                <div className="row justify-content-start">
                    <div className="col-md-5 left-section">
                        <div className="wrapper-left-text">
                            <div className="row-vision mb-2">
                                    <div className="wrapper-orange-line-2">
                                        <div id="orange-line-2"></div>
                                    </div>
                                    <p id="our-mission">
                                        Our Mission
                                    </p>
                                    
                            </div>
                            <p id="our-vision-text">
                                Lorem ipsum dolor sit amet consectetur. Mauris nam nec nisi adipiscing id enim at nullam ullamcorper. Sed cursus elementum imperdiet id est dignissim. Auctor sit lorem a.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 offset-md-2">
                        <img src={ourMissionImg} />
                    </div>
                </div>
            </div>
        )
    }
}

export default OurMission;