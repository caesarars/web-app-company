import React, {useState} from "react";

const ImageLoader = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            {!loaded && (
                <div className="spinner-border text-black p-3 m-5" role="status"></div>) 
            }
            <img id="img-card" className="card-img-top" 
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)} // Set loaded to true when the image finishes loading
                style={{ display: loaded ? 'block' : 'none' }} // Hide the image until it's loaded
            />
        </div>
    )
}

export default ImageLoader;