// src/pages/EventPage/EventPage.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEventData from "../../hooks/useEventData";
import useTicketStore from "../../store/ticketStore";
import "./eventPage.css";

const EventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToOrder } = useTicketStore();
    const [quantity, setQuantity] = useState(1);
    const { events = [] } = useEventData();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const found = events.find((e) => String(e.id) === String(id));
        setEvent(found || null);
    }, [events, id]);

    if (!event) {
        return <p style={{ padding: "2rem", color: "white" }}>Event not found</p>;
    }

    const handleAdd = () => {
        addToOrder(event, quantity);
        navigate("/order");
    };

    const handleDecrease = () => {
        if (quantity === 1) {
            navigate("/"); // back to events if 0
        } else {
            setQuantity((q) => q - 1);
        }
    };

    return (
        <div className="event-page">
            <h2 className="event-title">Event</h2>
            <p className="event-subtext">You are about to score some tickets to</p>

            <h1 className="band-name">{event.name}</h1>
            <p className="date-time">
                {event.when.date} kl {event.when.from} - {event.when.to}
            </p>
            <p className="location">@ {event.where}</p>

            <div className="ticket-box">
                <div className="total-price">{event.price * quantity} sek</div>
                <div className="quantity-controls">
                    <button className="qty-btn" onClick={handleDecrease}>−</button>
                    <span className="qty">{quantity}</span>
                    <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
            </div>

            <button className="confirm-btn" onClick={handleAdd}>
                Lägg i varukorgen
            </button>

            <button className="back-btn" onClick={() => navigate("/")}>
                Tillbaka till Events
            </button>
        </div>
    );
};

export default EventPage;
