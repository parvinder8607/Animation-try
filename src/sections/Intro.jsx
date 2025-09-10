import React from 'react'
import school from '../assets/Images/HeroImage.jpg'
import { motion } from 'framer-motion'

const Intro = () => {
    return (
        <section className=' overflow-hidden bg-black/50 w-full h-screen flex justify-center items-center relative gap-8 px-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white  font-bold   py-4'>
           <motion.div
             
            className="absolute -z-10 w-full h-screen">
            <img src={school} className='w-full h-full object-cover' alt="" />
           </motion.div>
            <motion.div
                initial={{ gap: "0px" }}
                animate={{ gap: "100px" }}
                transition={{delay: .5, duration: 1}}
                className="overflow-hidden h-26  flex  gap-32">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className=" overflow-hidden relative whitespace-nowrap ">
                    <motion.div
                    initial={{ width: "4rem" }}
                    animate={{ width: "100%" }}
                    transition={{delay: .5, duration: 1}}
                    >
                    <motion.span className=' relative z-10'>A</motion.span>
                    <motion.span
                        initial={{ x: "-140%" }}
                        animate={{ x: "0%" }}
                        transition={{delay: 1.5, duration: 1, type: "spring"}}
                        className='inline-block -translate-x-[100%'>pna</motion.span>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className=" overflow-hidden relative whitespace-nowrap ">
                    <motion.div
                    initial={{ width: "4rem" }}
                    animate={{ width: "100%" }}
                    transition={{delay: .5, duration: 1}}
                    >
                    <motion.span className=' relative z-10'>C</motion.span>
                    <motion.span
                        initial={{ x: "-140%" }}
                        animate={{ x: "0%" }}
                        transition={{delay: 1.5, duration: 1, type: "spring"}}
                        className='inline-block -translate-x-[100%'>hhota</motion.span>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className=" overflow-hidden relative whitespace-nowrap ">
                    <motion.div
                    initial={{ width: "4rem" }}
                    animate={{ width: "100%" }}
                    transition={{delay: .5, duration: 1}}
                    >
                    <motion.span className=' relative z-10'>S</motion.span>
                    <motion.span
                        initial={{ x: "-140%" }}
                        animate={{ x: "0%" }}
                        transition={{delay: 1.5, duration: 1, type: "spring"}}
                        className='inline-block -translate-x-[100%'>chool</motion.span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Intro
