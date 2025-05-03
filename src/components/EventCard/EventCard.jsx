// src/components/EventCard/EventCard.jsx

import React from "react";
import "./eventCard.css";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
    const { name, where, price, when, id } = event;
    const navigate = useNavigate();

    const [day, rawMonth] = when?.date?.split(" ") || ["??", "???"];
    const month = rawMonth ? rawMonth.substring(0, 3).toUpperCase() : "???";

    const handleClick = () => {
        console.log("Navigating to event ID:", id);
        navigate(`/event/${id}`);
    };

    return (
        <div className="event-card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="event-date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
            </div>

            <div className="event-info">
                <h3 className="band">{name || "Unknown Band"}</h3>
                <p className="location">{where || "Unknown location"}</p>
                <p className="time">
                    {(when?.from && when?.to) ? `${when.from} - ${when.to}` : "?? - ??"}
                </p>
            </div>

            <div className="price">
                {price} <span>sek</span>
            </div>
        </div>
    );
};

export default EventCard;
