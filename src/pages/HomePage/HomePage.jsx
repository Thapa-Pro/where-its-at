// src/pages/HomePage/HomePage.jsx

import React, { useState } from "react";
import "./homePage.css";
import eventsData from "../../utils/events";
import EventCard from "../../components/EventCard/EventCard";
import { FiSearch } from "react-icons/fi";
import { useEventData } from "../../hooks/useEventData";

const HomePage = () => {
    const { events, loading, error } = useEventData();
    const [search, setSearch] = useState("");

    const filteredEvents = eventsData.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <h2 className="section-title">Events</h2>

            <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="event-list">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
