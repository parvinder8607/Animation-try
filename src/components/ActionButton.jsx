import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'

const ActionButton = ({isDrag, setIsDrag, dragControls }) => {
     
    
  
  

  return (
    <NavLink to="/play">
      <motion.button
    //  onClick={() => setIsDrag(!isDrag)}  
     initial={{scale: 1}}
     whileHover={{scale: 1.2}}
     whileTap={{scale: 0.8}}
     onPointerDown={event => dragControls.start(event, { snapToOrigin: true})}
     className='border bg-blue-600 px-4 py-2 text-white rounded-lg shadow-2xl cursor-pointer'
    >
      Play
    </motion.button>
    </NavLink>
  )
}

export default ActionButton
