import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const text = "🚀 Infinite Scrolling Text Effect in React.js! 🎉";

const ScrollDirections = () => {

const [direction, setDirection] = useState('1');

useEffect(() => {
 
    let lastScrollY = window.scrollY;

    const handleScroll = ()=>{
        let currentScrollY = window.scrollY;
        if(currentScrollY > lastScrollY){
            setDirection('1')
        }else{
            setDirection('-1')
        }
        lastScrollY = currentScrollY;

    }
     console.log(direction)
    window.addEventListener('scroll', handleScroll);
    return ()=>{
        window.removeEventListener('scroll', handleScroll);
    }

})


  return (
    <section className='w-full h-screen flex items-end overflow-hidden py-2'>

<motion.div
        className="text-4xl font-bold whitespace-nowrap"
        animate={{
          x: direction === '1' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 10,
        }}
      >
        <span>{text}   {text}   {text}   {text}   {text}   {text}</span>
      </motion.div>

    </section>
  )
}

export default ScrollDirections