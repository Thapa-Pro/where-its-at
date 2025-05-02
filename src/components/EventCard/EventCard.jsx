import React from "react";
import "./eventCard.css";

const EventCard = ({ event }) => {
    const { name, where, price, when } = event;

    // Split the date like "21 Mars" -> ["21", "Mars"]
    const [day, rawMonth] = when?.date?.split(" ") || ["??", "???"];

    // Take first 3 letters and uppercase them
    const month = rawMonth?.substring(0, 3).toUpperCase();

    return (
        <div className="event-card">
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
