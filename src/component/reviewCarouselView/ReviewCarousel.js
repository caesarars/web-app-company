import React from "react";
import "./ReviewCarousel.css"
import doubleQouteIcon from "../../static/icon/double-qoutes.png"
import leftArrow from "../../static/icon/left-arrow-car.png"
import rightArrow from "../../static/icon/right-arrow-car.png"

class ReviewCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          animateLeft: false,
          animateRight: false
        };
      }
       arrayOfReview = [
        {
            "reviewBold" :"Lorem ipsum dolor sit amet consectetur.",
            "review" : "Tempus scelerisque sit pellentesque gravida donec massa massa mattis. Vulputate semper viverra purus non consectetur aliquet. In aliquet sit arcu lacus rhoncus vitae malesuada. Nibh magna viverra volutpat proin varius egestas in.",
            "by":"Anderson Sumarli",
            "jobTitle" : "CEO of Ajaib Group"
        },
        {
            "reviewBold" :"Kenapa harus beda agama? karena ya gitudah",
            "review" : "Tempus scelerisque sit pellentesque gravida donec massa massa mattis. Vulputate semper viverra purus non consectetur aliquet. In aliquet sit arcu lacus rhoncus vitae malesuada. Nibh magna viverra volutpat proin varius egestas in.",
            "by":"Caesar Arssetya",
            "jobTitle" : "CEO of DL Tech"
        },
        {
            "reviewBold" :"Chungusida",
            "review" : "Tempus scelerisque sit pellentesque gravida donec massa massa mattis. Vulputate semper viverra purus non consectetur aliquet. In aliquet sit arcu lacus rhoncus vitae malesuada. Nibh magna viverra volutpat proin varius egestas in.",
            "by":"Raditya Dika",
            "jobTitle" : "Content Creator"
        }
    ]
      
      handleLeftClick = () => {
        this.setState((prevState) => ({
            index: prevState.index > 0 ? prevState.index - 1 : prevState.index
        }));

        this.setState((prevState) => ({
            animateLeft : !prevState.animateLeft
        }))

        setTimeout(() => {
            this.setState({ animateLeft: false });
          }, 500);
    }
    
    handleRightClick = () => {
        const maxIndex = this.arrayOfReview.length - 1;
        this.setState((prevState) => ({
            index: prevState.index < maxIndex ? prevState.index + 1 : prevState.index
        }));
        this.setState((prevState) => ({
            animateRight : !prevState.animateRight
        }))

        setTimeout(() => {
            this.setState({ animateRight: false });
          }, 500);
    }

    


    render() {

        const reviewBoldText = this.arrayOfReview[this.state.index].reviewBold
        const reviewText = this.arrayOfReview[this.state.index].review
        const by = this.arrayOfReview[this.state.index].by
        const jobTitle = this.arrayOfReview[this.state.index].jobTitle

        return (
            <div className="wrapper-review mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="wrapper-arrow">
                                <img onClick={() => this.handleLeftClick()} src={leftArrow} />
                            </div>
                        </div>
                        <div className={this.state.animateRight ? 'col-md-8 animateRight' : this.state.animateLeft ? 'col-md-8 animateLeft' : 'col-md-8'}>
                            <div className="row" style={{margin:"0 auto"}}>
                                <img src={doubleQouteIcon} style={{width:"56px", height:"56px"}}/>
                            </div>
                            <div className="row">
                                <p style={{fontSize:"24px", fontWeight:"400", textAlign:"justify"}}>
                                <span
                                    style={{backgroundColor:"#FBAB18"}}>{reviewBoldText}</span>&nbsp;
                                {reviewText}</p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-3">
                                    
                                </div>
                                <div className="col-md-3 offset-md-6">
                                    <p style={{fontSize:"24px", fontWeight:"700"}}>{by}</p>
                                    <p style={{fontSize:"18px"}}>{jobTitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="wrapper-arrow">
                                <img onClick={() => this.handleRightClick()} src={rightArrow} />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default ReviewCarousel;