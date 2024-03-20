import React from "react";
import blackCheckCircle from "../../static/icon/black_check_circle.png"
import uiuxService from "../../static/img/ui_ux_exp.png"

const ListService = (props) => {

    const data = props.data

    const title = data.title
    const points = data.points;
    const timeline = data.timeline
    const image = data.image

    return (
        <div className="wrapper_service_1 mt-5" style={{marginBottom:'72px'}}>
            <div className="row">
                <div className="col-sm-7">
                    <div className="left_s1">
                        <p id="title_service1" className="mb-4">{title}</p>
                        {
                            points.map(text => {
                                return (
                                    <div className="row mb-4">
                                        <div className="col-md-auto align-self-center">
                                            <img src={blackCheckCircle} alt="black_check_circle"/>
                                        </div>
                                        <div className="col-md-10">
                                            <p className="text-start fs16px">
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                
                                )
                            })
                        }
                        <hr className="mb-4  mt-5"></hr>
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={blackCheckCircle} alt="black_check_circle"/>
                            </div>
                            <div className="col-md-10">
                                <p className="text-start timeline">
                                    {timeline}
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="col-md-5 bg-lightgrey">
                    <img src={image} alt="ui_ux" />
                 </div>
            </div>
         </div>
    )
}

export default ListService;