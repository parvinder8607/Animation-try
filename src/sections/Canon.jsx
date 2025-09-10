import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Canon() {
  const [balls, setBalls] = useState([]); // Store fired balls
  const [dragX, setDragX] = useState(0); // Track the drag position of the cannon

  // Create a reference for the cannon
  const ref = React.useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new ball to the balls array every 1.5 seconds (adjust for speed)
      setBalls((prevBalls) => [
        ...prevBalls,
        { id: Date.now(), animation: 'fire', xaxis: dragX }
      ]);
    }, 150); // Fire every 1.5 seconds (can be adjusted)

    return () => clearInterval(interval);
  }, [dragX]); // Update balls based on dragX value

  return (
    <div className="flex justify-center items-end h-screen bg-gray-200">
      <motion.div
        ref={ref}
        drag="x"
        onDrag={(e, info) => setDragX(info.point.x)} // Update the dragX value on drag
        className="relative"
      >
        {/* Canon */}
        <div className="w-16 h-8 bg-gray-600 rounded-t-lg"></div>

        {/* Balls */}
        {balls.map(
          (ball) => (
          <motion.div
            
            key={ball.id}
            style={{ x: ball.xaxis - 390  }} // Adjust the position relative to the cannon
            className={`ball w-6 h-6 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2 ${ball.animation}`}
          />
        )
      )
        }
      </motion.div>
    </div>
  );
}

export default Canon;
