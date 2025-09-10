import React, { useRef, useEffect, useState } from 'react';
import car from '../assets/car.png';
import '../index.css'; 

function MoveElement() {
  const containerRef = useRef(null); 
  const divRef = useRef(null); 
  
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [blocks, setBlocks] = useState([
    { top: 150, left: 150, width: 10, height: 100 }, 
    { top: 300, left: 250, width: 100, height: 10 }, 
    { top: 50, left: 350, width: 10, height: 100 },  
  ]);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus(); 
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerDimensions({ width, height });
    }
  }, []);

  
  const checkCollision = (newTop, newLeft, divWidth, divHeight) => {
    for (const block of blocks) {
      if (
        newLeft < block.left + block.width &&
        newLeft + divWidth > block.left &&
        newTop < block.top + block.height &&
        newTop + divHeight > block.top
      ) {
        return true; 
      }
    }
    return false; 
  };

  const handleKeyDown = (event) => {
    const step = 10; 

    
    if (event.key === ' ' || event.key === 'Space') {
      if (divRef.current) {
        divRef.current.classList.add('moving-animation');
        
        
        setTimeout(() => {
          divRef.current.classList.remove('moving-animation');
        }, 500); 
      }
      return; 
    }

    if (divRef.current) {
      const divPosition = divRef.current.getBoundingClientRect();
      const containerPosition = containerRef.current.getBoundingClientRect();

      let newTop = divPosition.top;
      let newLeft = divPosition.left;

      switch (event.key) {
        case 'ArrowUp':
          newTop = Math.max(containerPosition.top, divPosition.top - step); 
          break;
        case 'ArrowDown':
          newTop = Math.min(
            containerPosition.top + containerDimensions.height - divPosition.height,
            divPosition.top + step
          ); 
          break;
        case 'ArrowLeft':
          newLeft = Math.max(containerPosition.left, divPosition.left - step); 
          break;
        case 'ArrowRight':
          newLeft = Math.min(
            containerPosition.left + containerDimensions.width - divPosition.width,
            divPosition.left + step
          ); 
          break;
        default:
          return; 
      }

      
      if (!checkCollision(newTop, newLeft, divPosition.width, divPosition.height)) {
        
        switch (event.key) {
          case 'ArrowUp':
            divRef.current.style.top = `${newTop}px`;
            divRef.current.style.transform = `rotate(0deg)`;
            break;
          case 'ArrowDown':
            divRef.current.style.top = `${newTop}px`;
            divRef.current.style.transform = `rotate(180deg)`;
            break;
          case 'ArrowLeft':
            divRef.current.style.left = `${newLeft}px`;
            divRef.current.style.transform = `rotate(-90deg)`;
            break;
          case 'ArrowRight':
            divRef.current.style.left = `${newLeft}px`;
            divRef.current.style.transform = `rotate(90deg)`;
            break;
          default:
            return;
        }
      }
    }
  };

  return (
    <div
      ref={containerRef} 
      tabIndex="0" 
      onKeyDown={handleKeyDown} 
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%', 
        height: '100vh', 
        backgroundColor: 'lightgray',
        border: '2px solid black',
      }}
    >
      {blocks.map((block, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${block.top}px`,
            left: `${block.left}px`,
            width: `${block.width}px`,
            height: `${block.height}px`,
            backgroundColor: 'red',
            opacity: 0.6, 
          }}
        ></div>
      ))}

      <div
        ref={divRef} 
        tabIndex="-1" 
        style={{
          position: 'absolute',
          top: '0px', 
          left: '0px', 
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease',
        }}
      >
        <img  className='w-[50px]'  src={car} />
      </div>
    </div>
  );
}

export default MoveElement;
