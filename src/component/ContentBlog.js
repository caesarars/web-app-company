import React from "react";
import "./ContentBlog.css"
import ListBlog from "./listBlog/ListBlog";

const ContentBlog = () => {
    return (
        <div className="container blog_container">
            <div className="header_blog">
                <p id="our_blog">
                    Our Blog
                </p>
                <p id="desc_blog">
                    The Publication or Documentation that already we had published 
                </p>
            </div>

            <ListBlog/>
           
        </div>
    )
}

export default ContentBlog;