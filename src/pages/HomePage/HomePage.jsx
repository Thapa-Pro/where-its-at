import React, { useState } from "react";
import "./homePage.css";
import { FiSearch } from "react-icons/fi";
import EventCard from "../../components/EventCard/EventCard";
import useEventData from "../../hooks/useEventData";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const { events = [], loading, error } = useEventData();

    // Filter using event.name (since it's the band name)
    const filteredEvents = events.filter((event) =>
        search.trim() === "" || (event.name || "").toLowerCase().includes(search.toLowerCase())
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

            {loading && <p className="feedback">Loading events...</p>}
            {error && <p className="feedback error">Error: {error}</p>}

            <div className="event-list">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
