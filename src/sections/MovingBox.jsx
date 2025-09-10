import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MovingBox() {
  const containerRef = useRef(null);

  // Scroll progress between 0 and 1 over entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // animation range
  });

  // Map scroll to horizontal X position (0% -> 100%)
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "800%"]);

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-gray-100">
      {/* Sections */}
      <div className="h-screen flex items-center justify-center">Section 1</div>
      <div className="h-screen flex items-center justify-center">Section 2</div>
      <div className="h-screen flex items-center justify-center">Section 3</div>
      <div className="h-screen flex items-center justify-center">Section 4</div>

      {/* Moving Component */}
      <motion.div
        style={{ x }}
        className="fixed top-[30%] left-0 w-48 h-48 bg-blue-500 text-white flex items-center justify-center text-xl rounded-xl shadow-xl"
      >
        I'm Moving!
      </motion.div>
    </div>
  );
}

export default MovingBox;
