import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from 'react'


const Try1 = () => {

  const container = useRef();
  
  useGSAP(()=> {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

        tl.to(".box1", {
            x: 100,
            duration: 1,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
           
        });
        tl.to(".box1", {
            y: "100%",
            duration: 1,
            opacity: 1,
            ease: "power3.out",
        });
        tl.to(".box1", {
            x: "200%",
            rotate: 360,
            duration: 1,
            opacity: 1,
            ease: "power3.out",
        });
        tl.to(".box1", {
            rotateY: 360,
            duration: 1,
            opacity: 1,
            ease: "power3.out",
        });
        tl.from(".box2", {
            x: 100,
            duration: 1,
            opacity: 0,
            ease: "power3.out",
        });
        tl.from(".box3", {
            x: 100,
            duration: 1,
            opacity: 0,
            ease: "power3.out",
        });
    })
  return (
    <div ref={container}  className='flex gap-2 p-8 perspective-distant w-full h-screen transform-3d'>
      <div className="box box1 aspect-square "></div>
      <div className="box box2 aspect-square"></div>
      <div className="box box3 aspect-square h-fit"></div>
    </div>
  )
}

export default Try1
