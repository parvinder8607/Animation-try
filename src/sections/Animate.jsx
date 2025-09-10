import React, { useEffect, useRef, useState } from 'react'
import DragBox from '../components/DragBox'
import RangeBox from '../components/RangeBox'
import ActionButton from '../components/ActionButton'
import { useDragControls } from 'motion/react'
import Counter from '../components/Counter'


const Animate = () => {
   
  const  [isDrag, setIsDrag] = useState(true);
  const [t, setT] = useState(0);
  const outerRef = useRef(null);
  const dragControls = useDragControls();
    
   


  return (
    <div ref={outerRef}  className='w-full h-screen bg-white flex flex-col gap-8 justify-center items-center  '>
      <DragBox outerRef={outerRef} rangeTime={t} dragControls={dragControls} isDrag={isDrag} />
      <DragBox outerRef={outerRef} rangeTime={t} dragControls={dragControls} isDrag={isDrag} />
      <Counter t={t} />
      {t}
      <RangeBox t={t} setT={setT} />
      <ActionButton isDrag={isDrag} setIsDrag={setIsDrag} dragControls={dragControls} />
    </div>
  )
}

export default Animate
