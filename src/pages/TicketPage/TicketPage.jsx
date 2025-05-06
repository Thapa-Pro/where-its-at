// src/pages/TicketPage/TicketPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../../store/ticketStore";
import Confetti from "react-confetti";
import "./ticketPage.css";

const TicketPage = () => {
    const { tickets } = useTicketStore();
    const navigate = useNavigate();

    if (!tickets.length) {
        return (
            <div className="ticket-page">
                <p>No tickets available.</p>
                <button onClick={() => navigate("/")}>Back to Events</button>
            </div>
        );
    }

    return (
        <div className="ticket-page">
            <Confetti numberOfPieces={250} recycle={false} />
            {tickets.map((ticket) => (
                <div key={ticket.id} className="ticket-card">
                    <h2>🎫 Your Ticket</h2>
                    <p><strong>Event:</strong> {ticket.event.name}</p>
                    <p><strong>Location:</strong> {ticket.event.where}</p>
                    <p><strong>Date:</strong> {ticket.event.when?.date}</p>
                    <p><strong>Time:</strong> {ticket.event.when?.from} - {ticket.event.when?.to}</p>
                    <p><strong>Section:</strong> {ticket.section}</p>
                    <p><strong>Seat:</strong> {ticket.seat}</p>
                    <p><strong>Ticket ID:</strong> {ticket.id}</p>
                </div>
            ))}

            <button className="back-btn" onClick={() => navigate("/")}>
                Back to Events
            </button>
        </div>
    );
};

export default TicketPage;
