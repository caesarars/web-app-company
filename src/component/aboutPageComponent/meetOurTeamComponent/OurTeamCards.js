import React from "react";
import "./OurTeamCards.css"

import arrow from "../../../static/icon/arrow-up-right.svg"

import image1 from "../../../../src/static/img/icon-team/team1.png"
import image2 from "../../../../src/static/img/icon-team/team2.png"
import image3 from "../../../../src/static/img/icon-team/team3.png"
import image4 from "../../../../src/static/img/icon-team/team4.png"
import image5 from "../../../../src/static/img/icon-team/team5.png"
import image6 from "../../../../src/static/img/icon-team/team6.png"
import image7 from "../../../../src/static/img/icon-team/team7.png"
import image8 from "../../../../src/static/img/icon-team/team8.png"


const OurTeamCards = () => {

    const arrayOfTeams = [
        {
            "image" : image1,
            "name" : "Jane Cooper",
            "title" : "Project Manager"
        },
        {
            "image" : image2,
            "name" : "Arlene McCoy",
            "title" : "UI Designer"
        },
        {
            "image" : image3,
            "name" : "Leslie Alexander",
            "title" : "UX Designer"
        },
        {
            "image" : image4,
            "name" : "Leslie Alexander",
            "title" : "UX Designer"
        },
        {
            "image" : image5,
            "name" : "Cody Fisher",
            "title" : "UX Writter"
        },
        {
            "image" : image6,
            "name" : "Arlene",
            "title" : "UI Designer"
        },
        {
            "image" : image7,
            "name" : "Arlene",
            "title" : "UX Designer"
        },
        {
            "image" : image8,
            "name" : "Arlene",
            "title" : "Front-End Developer"
        }
    ]

    return (
        <div className="d-flex mt-5 mb-5 flex-wrap justify-content-between container">
            {  arrayOfTeams.map((team) => {
                    return (<div className="our_team_card">
                        <img src={team.image} alt="team_1"/>
                        <p id="name">{team.name}</p>
                        <p id="title">{team.title}</p>
                    </div>)
                    })
                }
            <div className="gray_line mb-5"></div>
            <div className="row pt-4 pb-4">
                <div className="col-md-5">
                    <p style={{fontSize:"36px" , fontWeight:"700", textAlign:'left'}}>Are you interested in joining our team?</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <p id="lorem" className="mb-5">
                        Lorem ipsum dolor sit amet consectetur. Adipiscing aliquet id magna eget sed lacus. Arcu feugiat fermentum mus pretium aliquet id viverra viverra lectus.
                    </p>
                    <p id="see_open_position" className="btn-orange">
                        See Open Position &nbsp; <img src={arrow} alt="My SVG" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurTeamCards;