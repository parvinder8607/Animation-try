import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id='cursor'
      className="w-10 h-10 bg-white rounded-full fixed top-0 left-0 flex justify-center items-center font-bold text-2xl pointer-events-none z-50 mix-blend-difference"
    ></div>
  );
};

export default Cursor;
