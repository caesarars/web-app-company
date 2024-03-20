import React from "react";
import "./ContentAbout.css"
import AboutUs from "./aboutPageComponent/aboutUsComponent/AboutUs";
import OurVision from "./aboutPageComponent/ourVisionComponent/OurVision";
import OurMission from "./aboutPageComponent/ourMissionComponent/OurMission";
import TellMe from "./aboutPageComponent/tellMeComponent/TellMeComponent";
import Partner from "../component/partnersView/Partners";
import MeetOurTeam from "./aboutPageComponent/meetOurTeamComponent/MeetOurTeam";

class ContentAbout extends React.Component {
    render () {
        return (
            <div id="wrapper-aboutus-page">
                <AboutUs/>
                <OurVision/>
                <OurMission/>
                <TellMe/>
                <Partner isInAbout={true}/>
                <MeetOurTeam/>
            </div>
            
           
        )
    }
}

export default ContentAbout;