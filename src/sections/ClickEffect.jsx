import React from 'react'
import { motion } from 'motion/react'
import icon from '../assets/icon.png'

const ClickEffect = () => {
    
  return (
    <motion.section  className='w-full h-screen flex justify-center items-center relative gap-8 px-8  bg-black py-4'>
  
      {
        [1,2,3,4].map((item, index) => {
            const [isClick, setIsClick] = React.useState(false)
            return (
                <motion.div
                key={index}
                onClick={() => setIsClick(!isClick)}
                animate={{
                 position: isClick ? "absolute" : "relative",
                 zIndex: isClick ? 99 : 0,
                 width: isClick ? "100vw" : "25%",
                 height: isClick ? "100vh" : "50%",
                 top: isClick ? "0" : "initial",
             }}
                 transition={{duration: 0.5, ease: "easeInOut"}} 
                className="bg-gray-100  border-blue-50 border rounded-3xl flex justify-center items-center w-1/3 h-1/2 cursor-pointer relative">
                 <img src={icon} className='w-32 h-32' alt="" />
               </motion.div>
            )}
    )
}
    </motion.section>
  )
}

export default ClickEffect
