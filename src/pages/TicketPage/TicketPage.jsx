// src/pages/TicketPage/TicketPage.jsx
import "./ticketPage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../../store/ticketStore";
import { useGenerateTicketID } from "../../hooks/useGenerateTicketID";

const TicketPage = () => {
    const { bookedEvent, setTicketInfo, ticketInfo } = useTicketStore();
    const generateTicketID = useGenerateTicketID();
    const navigate = useNavigate();

    const [seat, setSeat] = useState(null);
    const [section, setSection] = useState(null);

    useEffect(() => {
        if (!bookedEvent) {
            navigate("/"); // No event booked? Go back home
            return;
        }

        if (!ticketInfo) {
            // Generate fake seat & section
            const ticketID = generateTicketID();
            const section = "A";
            const seat = Math.floor(Math.random() * 50) + 1;

            setTicketInfo({ id: ticketID, section, seat });
            setSeat(seat);
            setSection(section);
        } else {
            setSeat(ticketInfo.seat);
            setSection(ticketInfo.section);
        }
    }, [bookedEvent, ticketInfo, setTicketInfo, generateTicketID, navigate]);

    return (
        <div className="ticket-wrapper">
            <h1 className="ticket-title">🎫 Your Ticket</h1>

            <div className="ticket-section">
                <p><span className="ticket-label">Event:</span> {bookedEvent?.name}</p>
                <p><span className="ticket-label">Location:</span> {bookedEvent?.where}</p>
                <p><span className="ticket-label">Date:</span> {bookedEvent?.when?.date}</p>
                <p><span className="ticket-label">Time:</span> {bookedEvent?.when?.from} - {bookedEvent?.when?.to}</p>
                <p><span className="ticket-label">Section:</span> {section}</p>
                <p><span className="ticket-label">Seat:</span> {seat}</p>
                <p className="ticket-id">Ticket ID: {ticketInfo?.id}</p>
            </div>

            <button className="back-btn" onClick={() => navigate("/")}>
                Back to Events
            </button>
        </div>
    );

};

export default TicketPage;
