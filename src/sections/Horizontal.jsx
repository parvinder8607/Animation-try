import React from 'react'
import icon from '../assets/icon.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import { motion, useTransform, useScroll } from 'framer-motion'

const Horizontal = () => {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -100px", "end 110vh"] 
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300vw"])



  return (
    <div ref={ref} className='w-full h-[calc(100vh*6)] '>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex bg-white"> 
      
          <motion.div style={{ x }}   className="w-[calc(100vw*4)] h-screen flex flex-shrink-0">
            <motion.div className='w-screen h-screen flex justify-center items-center bg-red-400'>
                <div className="flex bg-pink-100  rounded-3xl ">
                  <div className="flex items-center justify-center gap-16 p-8"> 
                    <span className='text-9xl font-bold'>1</span>
                    <div className="flex flex-col  ">
                    <h1 className='text-4xl font-bold'>
                        Title
                    </h1>
                    <p className='text-gray-500 max-w-[400px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                    </div>

                  </div>
                  <div className="">
                    <img className=' scale-80' src={icon} alt="" />
                  </div>
                </div>
            </motion.div>
            <motion.div className='w-screen h-screen flex justify-center items-center bg-blue-400'>
            <div className="flex bg-pink-100  rounded-3xl ">
                  <div className="flex items-center justify-center gap-16 p-8"> 
                    <span className='text-9xl font-bold'>2</span>
                    <div className="flex flex-col  ">
                    <h1 className='text-4xl font-bold'>
                        Title
                    </h1>
                    <p className='text-gray-500 max-w-[400px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                    </div>

                  </div>
                  <div className="">
                    <img className=' scale-80' src={icon2} alt="" />
                  </div>
                </div>
            </motion.div>
            <motion.div className='w-screen h-screen flex justify-center items-center bg-green-400'>
            <div className="flex bg-pink-100  rounded-3xl ">
                  <div className="flex items-center justify-center gap-16 p-8"> 
                    <span className='text-9xl font-bold'>3</span>
                    <div className="flex flex-col  ">
                    <h1 className='text-4xl font-bold'>
                        Title
                    </h1>
                    <p className='text-gray-500 max-w-[400px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                    </div>

                  </div>
                  <div className="">
                    <img className=' scale-80' src={icon3} alt="" />
                  </div>
                </div>
            </motion.div>
            <motion.div className='w-screen h-screen flex justify-center items-center bg-violet-400'>
            <div className="flex bg-pink-100  rounded-3xl ">
                  <div className="flex items-center justify-center gap-16 p-8"> 
                    <span className='text-9xl font-bold'>4</span>
                    <div className="flex flex-col  ">
                    <h1 className='text-4xl font-bold'>
                        Title
                    </h1>
                    <p className='text-gray-500 max-w-[400px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                    </div>

                  </div>
                  <div className="">
                    <img className=' scale-80' src={icon4} alt="" />
                  </div>
                </div>
            </motion.div>
          </motion.div>
          
       
      </div>
    </div>
  )
}

export default Horizontal;