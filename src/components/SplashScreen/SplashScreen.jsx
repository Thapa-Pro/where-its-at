// src/components/SplashScreen/SplashScreen.jsx

import React from "react";
import "./splashScreen.css";
import logo from "../../assets/logo.svg";

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <img src={logo} alt="Where It's @ logo" className="splash-logo" />
            <h1 className="splash-title">
                Where It's <span className="highlight">@</span>
            </h1>
            <p className="splash-tagline">Ticketing made easy</p>
        </div>
    );
};

export default SplashScreen;
