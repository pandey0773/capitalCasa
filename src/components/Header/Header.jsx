import React from "react";
import './Header.css'

function Header(params) {
    return(
        <div className="header_container">
            <div className="one">
                <img src="homeLogo.png" alt=""></img>
            </div>
            <div className="two">
                <img src="homeLogo.png" alt=""></img>
            </div>
            <div className="three">
                <p>Airbnb your home</p>
            </div>
        </div>
    )
}

export default Header;