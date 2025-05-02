import { useState, useEffect } from "react";

const API_URL = "https://santosnr6.github.io/Data/events.json";

const useEventData = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEvents(data.events || []); // ✅ Unwrap array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useEventData;
