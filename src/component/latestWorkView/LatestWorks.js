import React from "react";
import "./LatestWorks.css"
import rayaMobileBanking from "../../static/img/raya-mobile-banking.png"
import sayurboxPic from "../../static/img/sayurbox.png"
import amaanProject from "../../static/img/amaan-project.png"
import aseanCenter from "../../static/img/asean-center.png"
import eLearningApps from "../../static/img/e-learning apps.png"
import sportsGearPic from "../../static/img/sports-gear.png"
import CardsImage from "./../CardsImage/CardsImage";

class LatestWorks extends React.Component {
    
    render () {

        const arrayImageUrl = [
            rayaMobileBanking, sayurboxPic, amaanProject, aseanCenter, eLearningApps, sportsGearPic
        ];

        const cardsContent = [
            {title : "Mobile App", project:"Raya Mobile", imageUrl : arrayImageUrl[0]},
            {title : "Mobile App", project:"SayurBox Mobile App", imageUrl : arrayImageUrl[1]},
            {title : "Website App", project:"AMAAN Design & Development Resonsive", imageUrl : arrayImageUrl[2]},
            {title : "Website App", project:"Asean Center For Energy", imageUrl : arrayImageUrl[3]},
            {title : "Mobile App", project:"E-Learning Apps", imageUrl : arrayImageUrl[4]},
            {title : "Website App", project:"Sports Gear - E Commerce For Sports Item", imageUrl : arrayImageUrl[5]},
        ]

        const cardsImageComponent = cardsContent.map(content => (
            <CardsImage title={content.title} project={content.project} imageUrl={content.imageUrl}/>
        ))

        const caseStudiesStyles = {textAlign:"left", fontWeight:"700" , fontSize: "36px"}


        return (
            <div className="container mt-5 pt-5 mb-5 pb-5">
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
                <div className="row">
                    <div className="wrapper-cards">
                       {cardsImageComponent}
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestWorks;