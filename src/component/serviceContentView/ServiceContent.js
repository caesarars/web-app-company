import React from "react";
import "./ServiceContent.css"
import iconService1 from "../../static/icon/icon-service-1.png"
import iconService2 from "../../static/icon/icon-service-2.png"
import iconService3 from "../../static/icon/icon-service-3.png"
import CardsService from "../CardsService/CardsService";


class ServiceContent extends React.Component {
    render () {

        const arrayOfService = [
            {
                serviceName: "UI/UX Design",
                iconUrl : iconService1,
                serviceDesc : "Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt."
            },
            {
                serviceName: "Website App",
                iconUrl : iconService2,
                serviceDesc : "Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt."
            }
            ,{
                serviceName: "Mobile App",
                iconUrl : iconService3,
                serviceDesc : "Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt."
            }
        ]

        const cardsServiceComponent = arrayOfService.map( service => (
            <CardsService serviceName={service.serviceName} 
                serviceDesc={service.serviceDesc} 
                iconUrl={service.iconUrl} />
        ));

        return (
            <div>
                <div className="row mb-2">
                    <span style={{fontSize:"40px", fontWeight:"bold"}}>
                        Empowering Solutions For Your Needs
                    </span>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        {cardsServiceComponent}
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceContent;