import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const Try2 = () => {

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".circle", {
      x: 900,
      duration: 2,
      opacity: 1,
      delay: 1,
    });
    tl.to(".circle", {
      y: 500,
      duration: 1.5,
      opacity: 1,
      ease: "bounce.out",
    }, "<");
    tl.to(".circle", {
      scale: 15,
      duration: 1,
      opacity: 1,
      ease: "power3.out",
    });
    tl.to(".mainbox", {
      backgroundColor: "white",
      duration: 1,
      opacity: 1,
      ease: "power3.out",
    });
    tl.to(".circle", {
      
      duration: 1,
      opacity: 0,
      ease: "power3.out",
    });  
    tl.to(".textbox", {
      backgroundColor: "black",
      duration: 1,
      opacity: 1,
      ease: "power3.out",
    });
  } );

  return (
    <section className=' mainbox relative h-screen w-full bg-black overflow-hidden'>
        <div className="circle w-48 aspect-square rounded-full bg-white absolute top-0 left-0"></div>
        <div className="textbox  flex h-full p-4 text-black items-center">
          <div className="w-1/2 ">
            <h1 className=" text-4xl font-bold">
              Hello
            </h1>
            <p className=" text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-1/2">
          </div>
        </div>
      
    </section>
  )
}

export default Try2
