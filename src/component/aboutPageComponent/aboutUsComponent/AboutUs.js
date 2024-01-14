import React from "react";
import aboutUsImg from "../../../static/img/welcome-about.png"
import "./AboutUs.css"

class AboutUs extends React.Component {
    render () {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 wrapper-left-aboutus">
                        <div className="wrapper-text">
                            <h1>
                                About Us
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. In nulla varius eget porttitor in. Curabitur proin diam tempor vel. Nunc lectus facilisi aliquam amet vulputate ultrices porttitor. Volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-2">
                        <img src={aboutUsImg} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;