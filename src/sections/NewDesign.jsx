import React from 'react'
import {motion} from 'motion/react'

const NewDesign = () => {
  return (
    <>
    <section className='w-full h-screen bg-black flex justify-center items-center gap-10'> 
    

      <motion.div 
      initial={{scale:1}}
      whileHover={{scale: 1.2}} className="w-50 aspect-square rounded-full border  bg-radial-[at_75%_75%] from-white to-blue-900 to-65%  "></motion.div>
      <motion.div 
      initial={{scale:1}}
      whileHover={{scale: 1.2}} className="w-50 aspect-square rounded-full border  bg-radial-[at_50%_70%] from-white to-blue-900 to-70%  "></motion.div>
      <motion.div 
      initial={{scale:1}}
      whileHover={{scale: 1.2}} className="w-50 aspect-square rounded-full border  bg-radial-[at_25%_75%] from-white to-blue-900 to-65%  "></motion.div>
    </section>
    </>
  )
}

export default NewDesign
