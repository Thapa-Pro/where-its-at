// src/pages/OrderPage/OrderPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../../store/ticketStore";
import { motion } from "framer-motion";
import "./orderPage.css";

const OrderPage = () => {
    const {
        order,
        updateQuantity,
        removeFromOrder,
        generateTickets,
        resetOrder,
    } = useTicketStore();

    const navigate = useNavigate();

    const handleIncrease = (eventId, currentQty) => {
        updateQuantity(eventId, currentQty + 1);
    };

    const handleDecrease = (eventId, currentQty) => {
        if (currentQty <= 1) {
            removeFromOrder(eventId);
        } else {
            updateQuantity(eventId, currentQty - 1);
        }
    };

    const handleSendOrder = () => {
        generateTickets();
        resetOrder();
        navigate("/ticket");
    };

    const goBack = () => navigate("/");

    const total = order.reduce(
        (sum, item) => sum + item.event.price * item.quantity,
        0
    );

    return (
        <div className="order-page">
            <h2 className="section-title">Order</h2>

            {order.length === 0 ? (
                <p className="info-text">🛒 Din varukorg är tom. Lägg till några biljetter!</p>
            ) : (
                <>
                    {order.map(({ event, quantity }) => (
                        <div key={event.id} className="order-item compact">
                            <h3 className="band-name">{event.name}</h3>
                            <p className="date-time">
                                {event.when?.date} kl {event.when?.from} - {event.when?.to}
                            </p>

                            <div className="ticket-box compact">
                                <div className="quantity-controls compact">
                                    <motion.button className="qty-btn" whileTap={{ scale: 0.9 }} onClick={() => handleDecrease(event.id, quantity)}>−</motion.button>
                                    <span className="qty">{quantity}</span>
                                    <motion.button className="qty-btn" whileTap={{ scale: 0.9 }} onClick={() => handleIncrease(event.id, quantity)}>+</motion.button>
                                </div>
                                <p className="subtotal compact">
                                    {quantity} × {event.price} = <strong>{quantity * event.price} sek</strong>
                                </p>
                            </div>
                        </div>
                    ))}

                    <p className="total-label">Totalt värde på order</p>
                    <p className="total">{total} sek</p>

                    <motion.button className="order-btn" whileTap={{ scale: 0.95 }} onClick={handleSendOrder}>
                        Skicka order
                    </motion.button>
                </>
            )}

            <motion.button className="back-btn" whileTap={{ scale: 0.95 }} onClick={goBack}>
                Tillbaka till Events
            </motion.button>
        </div>
    );
};

export default OrderPage;
