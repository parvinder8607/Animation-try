import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Optional animation library


const carouselItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    if (isScrolling) return; // Prevent multiple scroll events before the delay
    setIsScrolling(true);

    // If scrolling down
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselItems.length;
        return nextIndex;
      });
    }
    // If scrolling up
    if (e.deltaY < 0) {
      setCurrentIndex((prevIndex) => {
        const prevsIndex = (prevIndex - 1 + carouselItems.length) % carouselItems.length;
        return prevsIndex;
      });
    }

    // Introduce a delay of 500ms between each scroll action
    setTimeout(() => setIsScrolling(false), 500); 
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className="relative w-full h-64 overflow-hidden border rounded-lg shadow-lg">
      <motion.div
        className="absolute w-full h-full flex justify-center items-center bg-blue-200"
        key={currentIndex}
        animate={{ x: -100 }}  // Slide transition effect, can be adjusted
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl font-semibold text-gray-800">{carouselItems[currentIndex]}</span>
      </motion.div>
    </div>
  );
};

export default Carousel;
