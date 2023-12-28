import React from "react";
import "./ReviewCarousel.css"
import doubleQouteIcon from "../static/icon/double-qoutes.png"

class ReviewCarousel extends React.Component {

    render() {
        return (
            <div className="wrapper-review mt-5 pt-5">
                <div className="container">
                    <div className="row" style={{margin:"0 auto"}}>
                        <img src={doubleQouteIcon} style={{width:"56px", height:"56px"}}/>
                    </div>
                    <div className="row">
                        <p style={{fontSize:"24px", fontWeight:"400", textAlign:"justify"}}>
                        <span style={{backgroundColor:"#FBAB18"}}>Lorem ipsum dolor sit amet consectetur.</span>&nbsp;
                        Tempus scelerisque sit pellentesque gravida donec massa massa mattis. Vulputate semper viverra purus non consectetur aliquet. In aliquet sit arcu lacus rhoncus vitae malesuada. Nibh magna viverra volutpat proin varius egestas in.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            
                        </div>
                        <div className="col-md-3 offset-md-6">
                            <p style={{fontSize:"24px", fontWeight:"700"}}>Anderson Sumarli</p>
                            <p style={{fontSize:"18px"}}>CEO of Ajaib Group</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewCarousel;