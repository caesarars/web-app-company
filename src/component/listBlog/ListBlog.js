import React from "react";
import "./ListBlog.css"

import image from "../../static/img/our-vision.png"
import image2 from "../../static/img/our-mission.png"

const ListBlog = () => {
    return (
        <div className="d-flex flex-column">
            <div className="blog_card_container">
                <div className="row">
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <p className="" id="title_blog">
                            5 habits to have better finances than 99% of people
                        </p>
                        <br></br>
                        <p className="" id="headline_blog">
                            While this is one topic that never gets old and is always of utmost importance to people, it’s not directly thought in schools, which ultimately creates generations that are unprepared and inefficient when it comes to their finances.
                        </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <img className="" id="image_blog" src={image} />
                    </div>
                    <br></br>
                    <hr></hr>
                </div>                    
            </div>
            <div className="blog_card_container">
                <div className="row">
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <p className="" id="title_blog">
                        Use the “1 Hour Rule” to Catapult Yourself into the Top 1% of Income Earners.
                        </p>
                        <br></br>
                        <p className="" id="headline_blog">
                        #1. Don’t be cheap. — I fell for it too. I used to feel that my life was just too busy and chaotic; there was too much going on and not enough
                        </p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <img className="" id="image_blog" src={image2} />
                    </div>
                    <br></br>
                    <hr></hr>
                </div>                    
            </div>
        </div>
    )
}


export default ListBlog;