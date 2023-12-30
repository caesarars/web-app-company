import React from "react";
import "./CardsImage.css"
import arrowTopRightBlack from "../../static/icon/arrow-up-right-black.png"

class CardsImage extends React.Component {
    render() {

        const { imageUrl, title, project, isArticle} = this.props;

        const styleCards = { 
            width: "18rem", 
            minWidth: "368px", 
            minHeight: "591px", 
            border: "none", 
            marginTop: "64px", 
            overflow: "hidden", 
            borderRadius: "16px" ,
            boxShadow : "0px 0px 0px 0px #00000008"
        }

        return (
            <div>
                <div className="card" style={styleCards}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body" style={{backgroundColor:"#f2f2f2", textAlign:"left"}}>
                        <p className="card-title p-2" style={{fontSize:"16px"}}>{title}</p>
                        <h5 className="card-title p-2" style={{fontSize:"24px" , fontWeight:"700", minWidth:"368px", textWrap:"nowrap",overflow:"hidden"}}>{project}</h5>
                        <p className="card-text p-2" style={{fontSize:"16px", textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet consectetur. Mattis sed orci turpis euismod id eu sem. Proin urna cursus dolor nunc id ac mal. Lorem ipsum dolor sit amet consectetur. Mattis sed orci turpis euismod id eu sem. Proin urna cursus dolor nunc id ac mal
                        </p>
                        <div className="card-text p-2">
                            <span style={{fontSize:"18px", fontWeight:"700"}}>
                                { isArticle == true ? "Read Article" :"See Detail Case Study" }
                            </span>
                            <img style={{float:"right","margin-top" : "5px"}} src={arrowTopRightBlack} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CardsImage;