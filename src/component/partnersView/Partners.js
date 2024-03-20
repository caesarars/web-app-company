import React from "react";
import "./Partners.css"
import logoBankBri from "../../static/img/bank-bri.png"
import logoBankBni from "../../static/img/bank-bni.png"
import logoAjaib from "../../static/img/ajaib.png"
import logoOgilvy from "../../static/img/ogilvy.png"
import logoRaya from "../../static/img/raya.png"
import logoRpx from "../../static/img/rpx.png"
import logoSayurbox from "../../static/img/sayurbox-logo.png"
import logoTelin from "../../static/img/telin.png"
import logoCashbac from "../../static/img/cashbac.png"
import logoCodex from "../../static/img/codex.png"

const Partner = (props) =>{

        const isInAbout = props.isInAbout ;
        const trustedStyle = 
            {
                fontWeight:isInAbout ? '400' : '700', 
                fontSize: isInAbout  ? '24px' : '32px',
                paddingBottom: isInAbout ? '10px' : '0px'
            }
        
        return (
            <div id="wrapper-container-partner" className={isInAbout ? 'bg-white' : 'bg-light'}>
                <div className="row pt-2">
                    <div className="pt-5 mt-5 d-flex flex-column align-items-center justify-content-center">
                        <span style={trustedStyle}>
                            Our Trusted Partners  {isInAbout ? '' : ":"}   
                        </span>
                        <span style={{fontWeight:"bold", fontSize: "32px", width : isInAbout ? '600px' : 'auto'}}>
                            {isInAbout ? 'We Had The Privilege To Work With Brands & Companies' : 'A Testament to Our Success' }
                        </span>
                        <div style={{display : isInAbout ? "none" : "block"}} id="black-box"></div>
                    </div>
                </div>
                <div className="row mt-5 pt-3">
                    <div className="wrapper-container-partners d-flex align-items-center justify-content-center">
                        <div>
                            <img className="logo-img" src={logoBankBri} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoBankBni} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoAjaib} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoOgilvy} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoRaya} />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="wrapper-container-partners d-flex align-items-center justify-content-center">
                        <div>
                            <img className="logo-img" src={logoRpx} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoSayurbox} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoTelin} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoCashbac} />
                        </div>
                        <div>
                            <img className="logo-img" src={logoCodex} />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Partner;