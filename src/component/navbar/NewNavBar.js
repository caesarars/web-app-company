import React from "react";

const NewNavBar = () => {
    return (
        <div className="navbar navbar-ligth bg-light">

            <div className="justfiy-content-start">
                here is the logo
            </div>

            <div className="justify-content-end">
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default NewNavBar;