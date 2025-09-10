import React from 'react'
import icon from '../assets/icon.png'
import { motion } from 'motion/react'

const HoverEffect = () => {
  return (
    <section className='w-full h-screen flex justify-center  bg-black py-4'>
       <div className="flex container m-auto h-1/2 bg-white rounded-2xl p-8">
        <div className="w-1/2 flex flex-col justify-center">
         <h1 className='text-4xl font-bold'>
            Title for Section
         </h1>
         <p className='text-lg text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        </div>
        <motion.div
         layout
         className="flex items-center   gap-4 p-8 grid-rows-2 w-2/3  h-full  ">
          {
            [1,2,3,4].map((item, index) => {
                const [isHover, setIsHover] = React.useState(false)
                return (
                <motion.div
                key={index}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
                initial={{width: "50%",}}
                whileHover={{width: "200%"}}
                className=" h-50 flex justify-center items-center px-2 bg-red-200 rounded-3xl cursor-pointer">
                    <img src={icon} className='w-32' alt="" />
                <motion.div
                 initial={{ width: "0%", opacity: 0 }}
                 animate={{width: isHover ? "100%" : "0%", opacity: isHover? 1: 0 }} 
                 transition={{duration: 0.5, ease: "easeInOut"}}
                 className=' overflow-hidden h-full flex flex-col justify-center items-center bg-red-200 rounded-3xl'>
                <h1 className='text-2xl font-bold'>
                Text for that
                </h1>
                <p className='text-gray-400'>This is paragraph</p>
                </motion.div>
                </motion.div>
            )})
          }
        </motion.div>
       </div>
    </section>
  )
}

export default HoverEffect
