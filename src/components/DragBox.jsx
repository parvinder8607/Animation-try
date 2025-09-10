import React from 'react'
import {motion, useMotionValue, useTime, useTransform} from 'motion/react'

const DragBox = ({outerRef, rangeTime, isDrag, dragControls}) => {

    const time = useTime(); 
    const rotate = useTransform(time, [0, ( rangeTime - 3900)] , [0, 360], {clamp: false})


  return (
    <div className="">
    <motion.div
     drag
     style={{rotate}}
     dragListener={isDrag}
     dragControls={dragControls}
     dragConstraints={outerRef}
     className='w-20 h-20 bg-violet-500 rounded-lg shadow-2xl'
    >
      
    </motion.div>
   
    </div>
  )
}

export default DragBox
