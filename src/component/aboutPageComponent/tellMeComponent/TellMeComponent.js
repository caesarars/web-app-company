import React from "react";
import "./TellMeComponent.css"


class TellMe extends React.Component {
    render() {
        return (
            <div className="row mt-5 container-tellme" >
                <div className="col-md-6">
                    <div className="wrapper-text-tellme">
                        <p>
                            Tell Us What’s On Your Mind!
                        </p>
                        <p>
                            Doesn’t matter if it is haven’t clear enough. Let’s talk and we will make it all clear.
                        </p>
                    </div>
                </div>  
                <div className="col-md-3">
                    <div className="btn">
                        Let's Talk
                    </div>
                </div>
            </div>
        )
    }
}

export default TellMe;