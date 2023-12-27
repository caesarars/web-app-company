import React from "react";
import "./LatestWorks.css"
import rayaMobileBanking from "../static/img/raya-mobile-banking.png"
import sayurboxPic from "../static/img/sayurbox.png"
import amaanProject from "../static/img/amaan-project.png"
import aseanCenter from "../static/img/asean-center.png"
import eLearningApps from "../static/img/e-learning apps.png"
import sportsGearPic from "../static/img/sports-gear.png"
import CardsImage from "./CardsImage/CardsImage";

class LatestWorks extends React.Component {
    
    render () {

        const arrayImageUrl = [
            rayaMobileBanking, sayurboxPic, amaanProject, aseanCenter, eLearningApps, sportsGearPic
        ];

        const cardsImageComponent = arrayImageUrl.map(url => (
            <CardsImage imageUrl={url}/>
        ))

        const caseStudiesStyles = {textAlign:"left", fontWeight:"700" , fontSize: "36px"}


        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div id="w-ob">   
                            <div id="orange-box"></div> 
                        </div>
                        <div className="ml-2" style={{width:"100px"}}>OUR WORKS</div>
                    </div>
                    <div className="col-md-6 offset-md-6">
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="wrapper-all-case mt-3">
                                <span id="see-all-case" className="text-right">See All Case Stuides</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <h2 style={caseStudiesStyles}>
                            Latest Case Studies
                        </h2>
                    </div>
                </div>

                <div className="row mt-5 pt-3">
                    <div className="wrapper-cards">
                       {cardsImageComponent}
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestWorks;