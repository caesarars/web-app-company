import React from "react";
import "./Content.css"
import ServiceContent from "./ServiceContent";
import ImageBanner from "./ImageBanner";
import Partners from "./Partners";
import ContentHeader from "./ContentHeader";
import LatestWorks from "./LatestWorks";
import ReviewCarousel from "./ReviewCarousel";
import Article from "./Article";
import Footer from "./Footer";

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
                    <LatestWorks/>
                    <ReviewCarousel />
                    <Article/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Content;