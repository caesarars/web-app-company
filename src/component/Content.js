import React from "react";
import "./Content.css"
import ServiceContent from "./serviceContentView/ServiceContent";
import ImageBanner from "./imageBannerView/ImageBanner";
import Partners from "./partnersView/Partners";
import ContentHeader from "./contentHeaderView/ContentHeader";
import LatestWorks from "./latestWorkView/LatestWorks";
import ReviewCarousel from "./reviewCarouselView/ReviewCarousel";
import Article from "./articleView/Article";
import Footer from "./footer/Footer";

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
                </div>
            </div>
        )
    }
}

export default Content;