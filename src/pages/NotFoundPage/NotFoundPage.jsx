// src/pages/NotFoundPage/NotFoundPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-page">
            <h2>Oops! We couldn’t find that page.</h2>
            <p>But don’t worry, you’re just a click away from the next great event!</p>
            <button className="home-btn" onClick={() => navigate("/")}>
                Go Back to Home
            </button>
        </div>
    );
};

export default NotFoundPage;
