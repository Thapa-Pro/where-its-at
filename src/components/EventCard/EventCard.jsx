import React from "react";
import "./eventCard.css";

const EventCard = ({ event }) => {
    const date = new Date(event.date);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();

    return (
        <div className="event-card">
            <div className="event-date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
            </div>

            <div className="event-info">
                <h3 className="band">{event.band}</h3>
                <p className="location">{event.location}</p>
                <p className="time">
                    {event.startTime} - {event.endTime}
                </p>
            </div>

            <div className="price">
                {event.price} <span>sek</span>
            </div>
        </div>
    );
};

export default EventCard;
