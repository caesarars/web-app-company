import React from "react";
import OurTeamCards from "./OurTeamCards";

const MeetOurTeam = () => {
    return (
        <div className="row bg-light pt-5 bt-5">
            <div className="container">
                <p style={{fontSize:'36px', fontWeight:'700'}}>
                    Meet Our Team
                </p>
                <p className="mt-5" style={{textAlign:'center',width:'700px', margin:'0 auto', fontSize:'20px', fontWeight:'400'}}>
                    Lorem ipsum dolor sit amet consectetur. Vitae habitasse hendrerit aenean tortor. Ut feugiat mauris risus mus vulputate.
                </p>
                <OurTeamCards/>
            </div>
        </div>
    )
}

export default MeetOurTeam;