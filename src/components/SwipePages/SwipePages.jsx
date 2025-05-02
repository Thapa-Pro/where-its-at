import React from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import SplashScreen from "../SplashScreen/SplashScreen";
import EventPage from "../EventPage/EventPage";
import styles from "./swipePages.module.css";

const pages = [<SplashScreen key="splash" />, <EventPage key="events" />];

export default function SwipePages() {
    const [index, setIndex] = React.useState(0);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIndex((prev) => Math.min(prev + 1, pages.length - 1)),
        onSwipedRight: () => setIndex((prev) => Math.max(prev - 1, 0)),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div className={styles["swipe-container"]} {...swipeHandlers}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={uuidv4()}
                    className={styles.slide}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {pages[index]}
                </motion.div>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className={styles["dot-indicator"]}>
                {pages.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === index ? styles.active : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}
