// src/components/SwipePages/SwipePages.jsx

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "../SplashScreen/SplashScreen";
import HomePage from "../../pages/HomePage/HomePage";
import styles from "./swipePages.module.css";

const SwipePages = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward

    const pages = [
        <SplashScreen key="splash" />, // Slide 1
        <HomePage key="home" />       // Slide 2
    ];

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentPage < pages.length - 1) {
                setDirection(1);
                setCurrentPage((prev) => prev + 1);
            }
        },
        onSwipedRight: () => {
            if (currentPage > 0) {
                setDirection(-1);
                setCurrentPage((prev) => prev - 1);
            }
        },
        trackMouse: true,
    });

    return (
        <div className={styles["swipe-container"]} {...handlers}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={styles.slide}
                >
                    {pages[currentPage]}
                </motion.div>
            </AnimatePresence>

            <div className={styles["dot-indicator"]}>
                {pages.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${currentPage === i ? styles.active : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SwipePages;
