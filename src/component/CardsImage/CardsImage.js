import React from "react";
import "./CardsImage.css"

class CardsImage extends React.Component {
    render() {

        const { imageUrl } = this.props;

        return (
            <div>
                <div className="cards">
                    <div>
                        <img className="img-cards" src={imageUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsImage;