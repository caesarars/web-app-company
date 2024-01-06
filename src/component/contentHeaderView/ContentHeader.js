import React from "react";
import homepageKawanKerja from "../../static/img/hompage-kawan-kerja.png"
import svgArrow from "../../static/icon/arrow-up-right.svg"
import "./ContentHeader.css"

class ContentHeader extends React.Component {

    render() {

        return (
            <div className="row">
                    <div className="d-flex align-items-center " style={{height:"60vh"}}>
                        <div className="col-md-1"></div>
                        <div className="col-md-5" style={{maxWidth:"520px"}}>
                            <div className="row">
                                <h1 id="title-h1">
                                    We Make Life Easier For The World
                                </h1>
                                <br></br>
                                <span id="title-span">
                                    We are a company with a short history of creating product innovations that can benefit directly or indirectly.
                                </span>
                            </div>
                            <br></br>
                            <div className="row" style={{textAlign:"left" , paddingTop:"24px"}}>
                                <div className="col-md-5">
                                    <div className="wrapper-startProjectBtn">
                                        <div id="startProjectBtn" style={{textAlign:"center", fontWeight:"bold", fontSize:"18px"}}>
                                            Start a Project &nbsp;<img src={svgArrow} alt="My SVG" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1" style={{textAlign:"left" , paddingTop:"16px" }}>
                                    <span style={{fontSize:"20px"}}>or</span>
                                </div>
                                <div className="col-md-5" style={{textAlign:"left" , paddingTop:"18px"}} >
                                    <div className="wrapper-seeOurWorks">
                                        <span id="see-our-works" style={{fontWeight:"bold", fontSize:"20px"}}>See Our Works</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <img src={homepageKawanKerja} />
                        </div>
                    </div>
            </div>
        )

    }
}

export default ContentHeader;
