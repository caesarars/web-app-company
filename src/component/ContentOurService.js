import React, { useState , useEffect } from "react";
import whatWeDoImg from "../static/img/what_we_do.png"
import "./ContentOurService.css"
import svgArrow from "../static/icon/arrow-up-right.svg"
import fixedPrice from "../../src/static/icon/fixed_price.png"
import onTime from "../static/icon/on_time.png"
import fastWork from "../static/icon/fast_work.png"


import ListService from "./componentServiceview/ListService";


const ContentOurService = () => {
    
    const url = 'https://us-central1-image-storing-project.cloudfunctions.net/app/services'

    const [ourServices, setOurServices] = useState([])

    const fetchOurService = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Response not found');
            }

            const dataResponse = await response.json();
            
            if (dataResponse) {
                setOurServices(dataResponse)
                console.log(dataResponse)
            }

        } catch (error) {
            console.log(error)
        }
    }
    
    const loadingComponent = () => {
        return (
            <div className="spinner-border" role="status" style={{width:"3rem", height:"3rem"}}>
               <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    useEffect(  () => {
        try {
            fetchOurService()
        } catch ( error ) {
            console.log(error)
        }
       
    }, []) 

    return (
        <div className="container wrapper_content_our_service">
            <div className="row mb-5 pb-3">
                <div className="col-md-6">
                    <div className="wrapper_left_service_content">
                        <div className="d-flex flex-column align-items-left">
                            <span id="what_we_do" className="mb-5 mt-5">What We Do</span>
                            <span id="text_2" >Get expert assistance at different stages with your unique design needs from professionals with over 6 years of experience.</span>
                            <div className="btn start_project btn-orange mt-5">
                                <span className="start_project_text">Start a Project</span> &nbsp;&nbsp;&nbsp;
                                <img src={svgArrow} alt="My SVG" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={whatWeDoImg} alt="what we do pic"/>
                </div>
            </div>

                <p className="reason_why pb-5">Why You Should Choose Us Because ...</p>
                <div className="container_why_cards mt-5 pt-5 mb-5 pb-5">
                    <div className="card_why">
                        <div className="wrapper_icon_why">
                            <img className="icon_why"  src={fixedPrice} alt="fixed_price" />
                        </div>
                        <p className="reason_header">
                            Fixed Price Project
                        </p>
                        <p className="reason_desc">
                        Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                        </p>
                    </div>
                    <div className="card_why">
                        <div className="wrapper_icon_why">
                            <img className="icon_why"  src={onTime} alt="onTime" />
                        </div>
                        <p className="reason_header">Receive On Time</p>
                        <p className="reason_desc">
                        Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                        </p>
                    </div>
                    <div className="card_why">
                     <div className="wrapper_icon_why">
                            <img className="icon_why"  src={fastWork} alt="fastWork" />
                        </div>
                        <p className="reason_header">Fast Work Turnaround</p>
                        <p className="reason_desc">
                        Lorem ipsum dolor sit amet consectetur. Volutpat sit lobortis vestibulum tellus hendrerit at feugiat adipiscing. Varius ut quam tincidunt.
                        </p>
                    </div>        
                </div>
                <div className="row mb24px"></div>
                {
                    ourServices.length > 0 ? ourServices.map((data) => {
                        return (<ListService data={data}/>)
                    }) : loadingComponent()
                }
        </div>
    )
}

export default ContentOurService;