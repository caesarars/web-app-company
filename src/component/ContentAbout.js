import React from "react";
import "./ContentAbout.css"
import AboutUs from "./aboutPageComponent/aboutUsComponent/AboutUs";
import OurVision from "./aboutPageComponent/ourVisionComponent/OurVision";
import OurMission from "./aboutPageComponent/ourMissionComponent/OurMission";

class ContentAbout extends React.Component {
    render () {
        return (
            <div id="wrapper-aboutus-page">
                <AboutUs/>
                <OurVision/>
                <OurMission/>
            </div>
        )
    }
}

export default ContentAbout;