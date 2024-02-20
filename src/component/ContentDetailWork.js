import React from "react";
import "./ContentDetailWorks.css"
import orangeLeftArrow from "../static/icon/orange-arrow-left.png"
import detailWork from "../static/img/detail_work.png"
import detailApp1 from "../../src/static/img/dtl_app_1.png"
import detailApp2 from "../../src/static/img/dtl_app_2.png"
import detailApp3 from "../../src/static/img/dtl_app_3.png"
import detailApp4 from "../../src/static/img/dtl_app_4.png"
import detailApp5 from "../../src/static/img/dtl_app_5.png"

import { useEffect, useState } from "react";
import { useParams , Link} from 'react-router-dom';


const ContentDetailWork = () => {
    const { id } = useParams();

    const [ detailData , setDetailData ] = useState({})

    const fetchDetail = async () => {
        
        try {
            const response = await fetch(`https://us-central1-image-storing-project.cloudfunctions.net/app/record/${id}`);

            if (!response.ok) {
                throw new Error('Response not found');
            }

            const dataResponse = await response.json();
            console.log(dataResponse)
            console.log(Array.isArray(dataResponse))

            if (dataResponse) {
                console.log(dataResponse[0])
                setDetailData(dataResponse[0])
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [])

    return (
        <div className="container">
            <div className="wrapper_detail_work">
                <div className="row">
                    <Link to={`/web-app-company/works`} style={{textAlign: "left",textDecoration:"none"}} >
                        <span style={{textDecoration:"none"}} id="kembali"> <img src={orangeLeftArrow}/> &nbsp; Kembali</span>
                    </Link>
                    
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 wrapper_title_project">
                        <div className="row"><span id="title_project">{detailData.title}</span></div>
                        <div className="row mt-5"><span id="project_jargont">Simplifying Crypto Trading In Pintu Apps</span></div>
                        <div className="row mt-5">
                            <span id="project_desc">
                                How we helped designing Indonesia's most user-friendly cryptocurrency apps.
                            </span>
                        </div>
                        <div className="row mt-5" id="project_range" >
                            <div className="col-md-3">
                                <div className="row">
                                    <span id="project_year">
                                        Years:
                                    </span>
                                </div>
                                <div className="row">
                                    <span style={{fontWeight:"bold"}} id="project_year">
                                        2021
                                    </span>
                                </div>
                               
                            </div>
                            <div className="col-md-4 text-start">
                                <div className="row">
                                    <span id="project_year">
                                        Project Tags:
                                    </span>
                                </div>
                                <div className="row">
                                    <span style={{fontWeight:"bold"}} id="project_year">
                                        Mobile Apps
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 text-start">
                                <div className="row ">
                                    <span id="project_year">
                                        Timeline:
                                    </span>
                                </div>
                                <div className="row">
                                    <span style={{fontWeight:"bold"}} id="project_year">
                                        12 Weeks Project
                                    </span>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="wrapper_detail_image">
                            <img style={{width:"600px", height:"500px"}}  src={detailData.imgDetail}/>
                        </div>
                        
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    
                    <div className="col-md-4">
                        <ul className="wrapper_outline_project">
                            <li className="text-start">
                                Project Background
                            </li>
                            <li className="text-start">
                                The Challenge
                            </li>
                            <li className="text-start">
                                What We Do
                            </li>
                            <li className="text-start">
                                The Result
                            </li>
                            <li className="text-start">
                                The Impact
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 wrapper_project_desc">
                        <div className="row">
                            <span id="project_background_txt">Project Background</span>
                        </div>
                        <div className="row">
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Duis ac et interdum tincidunt quam faucibus penatibus cursus libero. Pharetra neque eget euismod sagittis eu adipiscing. Leo sed sit ac sit feugiat risus sit mauris amet in pulvinar id.
                            </span>
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Elementum quisque tincidunt sagittis massa habitant lobortis diam sit eu. Lobortis magna adipiscing adipiscing eget. Convallis pharetra vivamus.
                            </span>
                        </div>
                        <div className="row">
                            <span id="project_background_txt">The Challenge</span>
                        </div>
                        <div className="row">
                            <span id="project_background_desc_txt">
                            Lorem ipsum dolor sit amet consectetur. Duis ac et interdum tincidunt quam faucibus penatibus cursus libero. Pharetra neque eget euismod sagittis eu adipiscing. Leo sed sit ac sit feugiat risus sit mauris amet in pulvinar id.
                            </span>
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Elementum quisque tincidunt sagittis massa habitant lobortis diam sit eu. Lobortis magna adipiscing adipiscing eget. Convallis pharetra vivamus.
                            </span>
                        </div>
                        <div className="row">
                            <span id="project_background_txt">What We Do</span>
                        </div>
                        <div className="row">

                            <span id="project_background_desc_txt">
                            Lorem ipsum dolor sit amet consectetur. Viverra rhoncus nec fringilla turpis auctor nisi sapien eu. Mauris sagittis arcu maecenas dolor etiam. Cursus amet nibh aenean netus sit at. In diam dignissim odio scelerisque blandit. Interdum arcu dui non cursus. Enim urna est nunc tellus. Orci nulla vivamus condimentum amet euismod in nullam. Duis ullamcorper quis sapien aliquam semper tellus gravida nulla proin.
                            </span>
                    
                            <div>
                                <div className="wrapper_img_dtl">
                                    <img src={detailApp1} />
                                    <img src={detailApp2} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <span id="project_background_txt">The Result</span>
                        </div>
                        <div className="row">
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Duis ac et interdum tincidunt quam faucibus penatibus cursus libero. Pharetra neque eget euismod sagittis eu adipiscing. Leo sed sit ac sit feugiat risus sit mauris amet in pulvinar id.
                            </span>
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Leo eleifend lobortis urna proin pellentesque imperdiet nibh vitae. Sit tellus justo a amet quam turpis. Tortor commodo eleifend velit venenatis lorem purus gravida nisl at. Arcu et praesent felis fermentum molestie. Sed nisl dignissim molestie proin fusce etiam mattis. Leo quis imperdiet congue magna cursus tempor tincidunt.
                            </span>
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Tristique leo nisl venenatis nam et at diam quis. Nec sed viverra aliquet nisi. Neque amet nec elit mi adipiscing. Dictum cras mattis elit erat consectetur eu elementum tortor auctor. Et lacus tortor sed sit. Eleifend dignissim lacinia ultrices massa fames.
                            </span>
                            <div className="wrapper_img_dtl">
                                    <img src={detailApp3} />
                                    <img src={detailApp4} />
                             </div>
                        </div>
                        <div className="row">
                            <span id="project_background_txt">The Impact</span>
                        </div>
                        <div className="row">
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Duis ac et interdum tincidunt quam faucibus penatibus cursus libero. Pharetra neque eget euismod sagittis eu adipiscing. Leo sed sit ac sit feugiat risus sit mauris amet in pulvinar id.
                            </span>
                            <span id="project_background_desc_txt">
                                Lorem ipsum dolor sit amet consectetur. Volutpat felis ullamcorper magna diam vitae. Mi eu suscipit hac egestas iaculis dolor.
                            </span>
                            <div className="wrapper_img_dtl">
                                <img src={detailApp5} />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDetailWork