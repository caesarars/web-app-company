import React from "react";
import "./CardsImage.css"
import arrowTopRightBlack from "../../static/icon/arrow-up-right-black.png"
import ImageLoader from "./ImageLoader";
import { Link } from 'react-router-dom';


const CardsImage = (props) =>  {

        const { id , imageUrl, title, project, isArticle} = props;
      

        const styleCards = { 
            width: "18rem", 
            minWidth: "368px", 
            minHeight: "591px", 
            border: "none", 
            marginTop: "64px", 
            overflow: "hidden", 
            borderRadius: "16px" ,
            boxShadow : "0px 0px 0px 0px #00000008",
            backgroundColor: "#f2f2f2"
        }

        const handleProjectName = () => {
            let length = project.length
            let temp = "" 
            if (length > 30 ) {
                return project.substring(0,22) +" . . . "            
            } else {
                return project
            }
        }

        return (
            <div>
                <div className="card" style={styleCards}>
                    <ImageLoader src={imageUrl} alt="..."/>

                    <div className="card-body" style={{backgroundColor:"#f2f2f2", textAlign:"left"}}>
                        <p className="card-title p-2" style={{fontSize:"16px"}}>{title}</p>
                        <h5 className="card-title p-2" style={{fontSize:"24px" , fontWeight:"700", minWidth:"368px", textWrap:"nowrap",overflow:"hidden"}}>{handleProjectName()}</h5>
                        <p className="card-text p-2 mb-4" style={{fontSize:"16px", textAlign:"left"}}>
                            Lorem ipsum dolor sit amet consectetur. Mattis sed orci turpis euismod id eu sem. Proin urna cursus dolor nunc id ac mal. Lor...
                        </p>
                        <Link to={`/web-app-company/works/${id}` } style={{textDecoration:"none"}} onClick={() => console.log('Link clicked')}>
                            <div className="card-text card-footer-btn mb-2">
                                <span id="footer-btn-text" style={{fontSize:"18px", fontWeight:"700", color:"black"}}>
                                        { isArticle == true ? "Read Article" :"See Detail Case Study" }     
                                    </span>
                                <img id="arrow" style={{float:"right","margin-top" : "5px"}} src={arrowTopRightBlack} />
                            </div>
                        </Link>
                        
                    </div>
                </div>
                </div>
        )
}

export default CardsImage;