import React from "react";
import "./CardsService.css"

class CardsService extends React.Component {
    render() {

        const { serviceName , serviceDesc, iconUrl } = this.props;

        return(
            <div>
                <div className="content-cards">
                    <img src={iconUrl} style={{position:"relative", top:"20px", zIndex:"100"}}/>
                    <div className="content-text">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <p className="title-content">{serviceName}</p>
                            <div className="wrapper-content-text">
                                <span className="content">
                                    {serviceDesc}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsService;