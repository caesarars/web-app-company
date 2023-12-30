import React from "react";
import "./Footer.css"
import dlTechLogo from "../static/img/dltech-logo-l.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-3">
                            <div className="wrapper-left-footer">
                                <img src={dlTechLogo} />
                                <div>
                                    <span>Lorem ipsum dolor sit amet consectetur. At ultrices elementum ultrices velit a id. Nibh enim diam euismod hendrerit ac enim.</span>
                                </div>
                                <div className="mt-3">
                                   <p>info@kawankerja.co</p>
                                   <p>+62 123 45678 90</p>
                                   <p>Bandung, Jawa Barat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;