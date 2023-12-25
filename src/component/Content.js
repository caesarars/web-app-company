import React from "react";
import "./Content.css"
import ServiceContent from "./ServiceContent";
import ImageBanner from "./ImageBanner";
import Partners from "./Partners";
import ContentHeader from "./ContentHeader";

class Content extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <ContentHeader/>
                    <ServiceContent/>
                    <ImageBanner/>
                </div>
                <div>
                    <Partners />
                </div>
            </div>
        )
    }
}

export default Content;