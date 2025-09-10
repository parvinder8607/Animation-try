import React from 'react'
import {motion} from 'framer-motion'

const BounceBall = () => {
  return (
    <>
    <section className='h-screen w-screen flex '>
       <div className='ball-container flex items-center '>

        <motion.div
         initial={{y:0, x:0}}
         animate={{y:200, x:200}}
         transition={{
                duration: 1,
                 }}
         className="w-20 aspect-square bg-red-200 rounded-full flex justify-center items-center">
            ball
        </motion.div>
        </div>
    </section>
    </>
  )
}

export default BounceBall
