import React from "react";
import "./CardsImage.css"
import arrowTopRightBlack from "../../static/icon/arrow-up-right-black.png"

class CardsImage extends React.Component {
    render() {

        const { imageUrl, title, project } = this.props;

        const styleCards = { width: "18rem", minWidth: "368px", minHeight: "640px", border: "none", marginTop: "32px", overflow: "hidden", borderRadius: "16px" }

        return (
            <div>
                <div className="card" style={styleCards}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body" style={{backgroundColor:"#f2f2f2", textAlign:"left"}}>
                        <p className="card-title" style={{fontSize:"16px"}}>{title}</p>
                        <h5 className="card-title" style={{fontSize:"24px" , fontWeight:"700", minWidth:"368px", textWrap:"nowrap",overflow:"hidden"}}>{project}</h5>
                        <p className="card-text" style={{fontSize:"16px", textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet consectetur. Mattis sed orci turpis euismod id eu sem. Proin urna cursus dolor nunc id ac mal. Lorem ipsum dolor sit amet consectetur. Mattis sed orci turpis euismod id eu sem. Proin urna cursus dolor nunc id ac mal
                        </p>
                    </div>
                    <div className="card-footer"  style={{border:"none", backgroundColor:"#f2f2f2" , paddingBottom:"16px", textAlign:"left"}}>
                        <div className="row">
                            <div className="col-md-9">
                                    <span style={{fontSize:"18px", fontWeight:"700",paddingBottom:"48px"}}>See Detail Case Study</span>
                            </div>
                            <div className="col-md-3" style={{margin : "auto 0"}}>
                                <img style={{float:"right"}} src={arrowTopRightBlack} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CardsImage;