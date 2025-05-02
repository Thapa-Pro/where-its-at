// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipePages from "./components/SwipePages/SwipePages";

function App() {
    // State to keep track of current page index
    const [currentPage, setCurrentPage] = useState(0);

    // Example page components (you can customize these)
    const pages = [
        <div className="slide" key="welcome">
            <h1>Welcome</h1>
            <p>Swipe to see events</p>
        </div>,
        <div className="slide" key="events">
            <h1>Events</h1>
            <p>Here are your events</p>
        </div>,
    ];

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <SwipePages
                            pages={pages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    }
                />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
