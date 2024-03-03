import React from "react";
import "./TellMeComponent.css"
import arrow from "../../../static/icon/arrow-up-right.svg"

class TellMe extends React.Component {
    render() {
        return (
            <div className="container-tellme  mt-5">
                <div className="container">
                    <div className="row">
                        <div className="wrapper_tell">
                            <div className="col-md-6">
                                <div className="wrapper-text-tellme">
                                    <p id="tell_us_text">
                                        Tell Us What’s On Your Mind!
                                    </p>
                                    <p id="doesnt_matter_text">
                                        Doesn’t matter if it is haven’t clear enough. Let’s talk and we will make it all clear.
                                    </p>
                                </div>
                            </div>  
                            <div className="col-md-6 offset-md-4">
                                <div id="lets_talk_btn" className="btn-orange">
                                    <p>
                                        Let's Talk  &nbsp; <img src={arrow} alt="My SVG" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TellMe;