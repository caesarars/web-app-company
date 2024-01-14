import React from "react";
import "./ImageBanner.css"
import arrowUpRight from "../../static/icon/arrow-up-right.svg"

class ImageBanner extends React.Component {
    render () {
        return (
            <div className="row mt-5 mb-5 pb-5">
                <div id="image-container">  
                    <div class="bg-overlay"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6 banner-content-left">
                            <div id="child-banner-content-left"
                                className="d-flex flex-column">
                                <h2 style={{fontWeight:"bold", fontSize:"32px" ,color:"white", zIndex:"100", width:"85%", textAlign:"left"}}>
                                    We Are The Biggest IT Solution In Indonesia
                                </h2>
                                <span className="pt-3" style={{color:"white",zIndex:"100", fontSize:"20px", width:"85%", textAlign:"left"}}>
                                    For more detailed information please visit our virtual office or contact us
                                </span>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <div className="wrapper-btn-arr d-flex flex-column">
                                <div id="button-arrow-top" style={{fontSize:"18px"}}>
                                    Visit Virtual Office &nbsp;&nbsp;<img id="arrow-right" src={arrowUpRight} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageBanner;