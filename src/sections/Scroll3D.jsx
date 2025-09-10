import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

const Scroll3D = () => {

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const z = useTransform(scrollYProgress, [0, 1], [-10000, 1188]);
    const color = useTransform(scrollYProgress, [0, 1], ["#000", "#fff"]);

  return (
    <section ref={ref}
    
    style={{ backgroundColor : color }}
     className='w-full h-[300vh] flex justify-center  bg-black  '>
        <div className="sticky overflow-hidden top-0 flex flex-col items-center justify-center w-full h-screen">
            <div >
            <motion.div className=' perspective-distant ' >
                <motion.h2 
            style={{ z }}
                className=' transform-3d text-9xl text-white font-extrabold'>Change Your Future</motion.h2>
            </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Scroll3D
