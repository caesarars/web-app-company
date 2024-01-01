import React from "react";
import "./Footer.css"
import dlTechLogo from "../../static/img/dltech-logo-l.png"
import arrowTopRight from "../../static/icon/arrow-up-right.svg"
import telpIcon from "../../static/icon/telp-icon.png"
import mailIcon from "../../static/icon/mail-icon.png"
import mapPinIcon from "../../static/icon/map-pin.png"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                <div className="row">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-4">
                            <div className="wrapper-left-footer">
                                <img src={dlTechLogo} />
                                <div>
                                    <span style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur. At ultrices elementum ultrices velit a id. Nibh enim diam euismod hendrerit ac enim.</span>
                                </div>
                                <div className="mt-3" id="info-contact">
                                   <p><img src={mailIcon} style={{width:"20px", height:"20px"}}/> &nbsp;&nbsp; info@kawankerja.co</p>
                                   <p> <img src={telpIcon} style={{width:"20px", height:"20px"}}/> &nbsp;&nbsp;+62 123 45678 90</p>
                                   <p><img src={mapPinIcon} style={{width:"20px", height:"20px"}}/> &nbsp;&nbsp; Bandung, Jawa Barat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-4 pt-5">
                            <div className="row">
                                <div id="wrapper-text-right">
                                    <p>Have a project in mind?</p>
                                    <p>Call Us!</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-5">
                                    <div id="lets-talk-btn" className="btn">
                                        <span>
                                        Let's Talk! &nbsp; <img id="img-arrow" src={arrowTopRight}/>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-md-5 offset-md-1">
                                    <div id="see-works-btn" className="btn">
                                        <span>
                                        See Our Works
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="white-line mt-5 mb-5"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p style={{textAlign:"left", fontSize :"16px"}}>
                                PT DL Technology © 2023 - Jakarta
                            </p>
                        </div>
                        <div className="col-md-3 offset-md-3">
                        <div className="sosmed">
                            <p>Instagram  
                                </p>
                                <p>Linkedin   
                                </p>
                                <p>Dribble  
                                </p>
                                <p>Twitter  
                                </p>
                        </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;