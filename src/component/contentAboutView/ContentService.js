import React from "react";
import CardsImage from "../CardsImage/CardsImage";




const  ContentService = (props) => {


    const renderCardsArticle = props.data.map((content) => (
        <CardsImage id={content._id}
            isArticle={false} 
            title={content.type} 
            project={content.title} 
            imageUrl={content.imgUrl}/>
    ))
    
    return (
        <div className="wrapper-article-cards">   
            {renderCardsArticle}
        </div>
    )
    
}


export default ContentService;