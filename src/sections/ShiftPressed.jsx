import React, { useState, useEffect } from 'react';

function ShiftPressed() {
  
  const [shiftPressed, setShiftPressed] = useState(false);
  const [ctrlPressed, setCtrlPressed] = useState(false);

  
  const handleKeyDown = (event) => {
    if (event.key === 'Shift') {
      setShiftPressed(true); 
    }
    if (event.key === 'Control') {
      setCtrlPressed(true); 
    }
  };

  
  const handleKeyUp = (event) => {
    if (event.key === 'Shift') {
      setShiftPressed(false); 
    }
    if (event.key === 'Control') {
      setCtrlPressed(false); 
    }
  };

  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div>
      <h1>Press Shift or Ctrl</h1>
      <p>Shift Pressed: {shiftPressed ? 'Yes' : 'No'}</p>
      <p>Ctrl Pressed: {ctrlPressed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ShiftPressed;
