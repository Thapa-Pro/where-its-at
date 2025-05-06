// src/pages/OrderPage/OrderPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import useTicketStore from "../../store/ticketStore";
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
        generateTickets();      // ✅ Generate ticket data
        resetOrder();           // ✅ Clear cart
        navigate("/ticket");    // ✅ Go to ticket page
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
                <p className="info-text">Din varukorg är tom.</p>
            ) : (
                <>
                    {order.map(({ event, quantity }) => (
                        <div key={event.id} className="order-item">
                            <h3 className="band-name">{event.name}</h3>
                            <p className="date-time">
                                {event.when?.date} kl {event.when?.from} - {event.when?.to}
                            </p>

                            <div className="ticket-box">
                                <div className="quantity-controls">
                                    <button className="qty-btn" onClick={() => handleDecrease(event.id, quantity)}>−</button>
                                    <span>{quantity}</span>
                                    <button className="qty-btn" onClick={() => handleIncrease(event.id, quantity)}>+</button>
                                </div>
                                <p className="subtotal">
                                    {quantity} × {event.price} = <strong>{quantity * event.price} sek</strong>
                                </p>
                            </div>
                        </div>
                    ))}

                    <p className="total-label">Totalt värde på order</p>
                    <p className="total">{total} sek</p>

                    <button className="order-btn" onClick={handleSendOrder}>
                        Skicka order
                    </button>
                </>
            )}

            <button className="back-btn" onClick={goBack}>
                Tillbaka till Events
            </button>
        </div>
    );
};

export default OrderPage;
