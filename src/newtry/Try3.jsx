import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Try3 = () => {
    
    useGSAP(() =>{
        const tl = gsap.timeline();
    gsap.to("#page1 h1", {
        transform: "translateX(-50%)",
        scrollTrigger:{
            trigger: "#page1",
            scroller:"body",
            markers:true, 
            start: 'top 0%',
            end: 'top -200%',
            scrub: 5,
            pin: true,
        }
    });
    })

    return (
    <section id='page1' className=' h-screen w-full bg-black overflow-hidden  '>
      <h1 className='text-[30vw] text-white cursor-pointer mix-blend-difference' >Experience</h1>

    </section>
  )
}

export default Try3
