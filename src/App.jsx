// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipePages from "./components/SwipePages/SwipePages";
import TicketPage from "./pages/TicketPage/TicketPage";
import EventPage from "./pages/EventPage/EventPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <SwipePages
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    }
                />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/ticket" element={<TicketPage />} />
                <Route path="*" element={<NotFoundPage />} /> {/* Corrected */}
            </Routes>
        </Router>
    );
}

export default App;
