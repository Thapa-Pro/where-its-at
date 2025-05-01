// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwipePages from "./components/SwipePages/SwipePages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SwipePages />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
