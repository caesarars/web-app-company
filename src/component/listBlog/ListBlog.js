import React from "react";
import "./ListBlog.css"

import image from "../../static/img/our-vision.png"
import image2 from "../../static/img/our-mission.png"

const ListBlog = () => {


    const blogs = [ 
        {
            "title" : "5 habits to have better finances than 99% of people",
            "headline" : "While this is one topic that never gets old and is always of utmost importance to people, it’s not directly thought in schools, which ultimately creates generations that are unprepared and inefficient when it comes to their finances."
        },
        {
            "title" : "Use the “1 Hour Rule” to Catapult Yourself into the Top 1% of Income Earners.",
            "headline" : "#1. Don’t be cheap. — I fell for it too. I used to feel that my life was just too busy and chaotic; there was too much going on and not enough"
        },
        {
            "title" : "How to make yourself lucky",
            "headline" : "Ever notice how certain people seem to attract all the luck in life, while others are like characters in a Peanuts comic? Always attracting the rain like they bathe in an aura of misfortune. Do you think there mig"
        }
    ]

    return (
        <div className="d-flex flex-column">
            {
                blogs.map((data) => {
                    return (
                        <div className="blog_card_container">
                            <div className="row">
                                <div className="col-md-8 d-flex flex-column justify-content-center">
                                    <p className="" id="title_blog">
                                        {data.title}
                                    </p>
                                    <br></br>
                                    <p className="" id="headline_blog">
                                        {data.headline}
                                    </p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <img className="" id="image_blog" src={image} />
                                </div>
                                <br></br>
                                <hr></hr>
                            </div>                    
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ListBlog;