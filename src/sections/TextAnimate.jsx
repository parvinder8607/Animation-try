import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const TextAnimate = () => {

  const secRef = React.useRef();

  const { scrollYProgress: Scroll2 } = useScroll({
    target: secRef,
    offset: ['start end', 'center end']
  })
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start center', 'end end']
  })

  const space = useTransform(scrollYProgress, [0, 1], ['0px', '50px']);

  const y = useTransform(Scroll2, [0, 1], [100, 0],);

  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", '60vh'], { clamp: false });


  return (
    <motion.section ref={secRef} className='w-full h-[100vh] flex justify-center  p-4 bg-transparent'>
      <motion.div
        style={{ y: y2 }}
        className="overflow-hidden w-[100%] text-center  h-[8rem]">
        <motion.div
          style={{ y: y }}
          className='font-display text-9xl font-extrabold  text-white cursor-pointer'>
          <motion.div
            initialial={{ y: 0 }}
            whileHover={{ y: '-75%' }}
            transition={{ duration: .7, ease: "easeInOut", type: "spring" }}
            className='inline-flex justify-center flex-col'
          >
            <div className="">A</div>
            <div className="">ᜣ</div>
            <div className="">A</div>
            <div className="">ᜣ</div>
          </motion.div>
          <motion.div
            initialial={{ y: 0 }}
            whileHover={{ y: '-75%' }}
            transition={{ duration: .7, ease: "easeInOut", type: "spring" }}
            className='inline-flex justify-center flex-col'
          >
            <div className="">B</div>
            <div className="">ᜩᜳ</div>
            <div className="">B</div>
            <div className="">ᜩᜳ</div>
          </motion.div>
          <motion.div
            initialial={{ y: 0 }}
            whileHover={{ y: '-75%' }}
            transition={{ duration: .7, ease: "easeInOut", type: "spring" }}
            className='inline-flex justify-center flex-col'
          >
            <div className="">C</div>
            <div className="">ᜰᜳ</div>
            <div className="">C</div>
            <div className="">ᜰᜳ</div>
          </motion.div>
          <motion.div
            initialial={{ y: 0 }}
            whileHover={{ y: '-75%' }}
            transition={{ duration: .7, ease: "easeInOut", type: "spring" }}
            className='inline-flex justify-center flex-col'
          >
            <div className="">D</div>
            <div className="">ᜨ</div>
            <div className="">D</div>
            <div className="">ᜨ</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default TextAnimate
