// src/pages/TicketPage/TicketPage.jsx

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../../store/ticketStore";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Confetti from "react-confetti";
import JsBarcode from "jsbarcode";
import "./ticketPage.css";

const BarcodeComponent = ({ text }) => {
    const barcodeRef = useRef(null);

    useEffect(() => {
        if (barcodeRef.current) {
            // Clear previous barcode completely
            barcodeRef.current.innerHTML = "";
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            try {
                JsBarcode(svg, text, {
                    format: "CODE128",
                    lineColor: "#000",
                    width: 2,
                    height: 50,
                    displayValue: true,
                });
                barcodeRef.current.appendChild(svg);
            } catch (error) {
                console.error("Barcode generation failed:", error);
            }
        }
    }, [text]);

    return <div className="barcode" ref={barcodeRef}></div>;
};

const TicketPage = () => {
    const { tickets } = useTicketStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentIndex < tickets.length - 1) {
            setDirection(1);
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    if (!tickets.length) {
        return (
            <div className="ticket-page">
                <p>No tickets available.</p>
                <button onClick={() => navigate("/")}>Back to Events</button>
            </div>
        );
    }

    return (
        <div className="ticket-page" {...handlers}>
            <Confetti numberOfPieces={250} recycle={false} />
            <h1 className="enjoy-show">ENJOY YOUR SHOW!</h1>
            <div className="ticket-container">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="ticket-card"
                    >
                        <div className="ticket-header">🎟️ Biljett</div>
                        <h2 className="ticket-title">{tickets[currentIndex].event.name}</h2>
                        <p className="ticket-location">@ {tickets[currentIndex].event.where}</p>
                        <div className="ticket-info">
                            <p><strong>Datum:</strong> {tickets[currentIndex].event.when?.date}</p>
                            <p><strong>Tid:</strong> {tickets[currentIndex].event.when?.from} - {tickets[currentIndex].event.when?.to}</p>
                            <p><strong>Sektion:</strong> {tickets[currentIndex].section}</p>
                            <p><strong>Sittplats:</strong> {tickets[currentIndex].seat}</p>
                        </div>
                        <BarcodeComponent text={tickets[currentIndex].id} />
                        <p className="ticket-number">Ticket ID: {tickets[currentIndex].id}</p>
                    </motion.div>
                </AnimatePresence>
                <button className="back-btn" onClick={() => navigate("/")}>Back to Events</button>
            </div>
        </div>
    );
};
export default TicketPage;
