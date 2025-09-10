import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { contain } from 'three/src/extras/TextureUtils.js';

const Try6 = () => {

    const container = useRef();
    const image = useRef();

    const content = 'Experience the power of GSAP with React';
  
    useGSAP(() => {
      const tl = gsap.timeline();
      gsap.from('#page5 .textup', {
        x: '10px',
        filter: 'blur(10px)',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          markers: true,
          trigger: container.current,
          start: 'top 0%',
          end: 'top -150%',
          scrub: true,
          pin: true,
        }
      });

      gsap.from( image.current, {
        x: '120%',
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            markers: true,
            trigger: container.current,
            start: 'top 0%',
            end: 'top -150%',
            scrub: true,
          
          }
      })
      
    });
  
    return (
      <section ref={container} id='page5' className='h-screen w-full p-4 flex justify-center items-center bg-black overflow-hidden relative'>
        <div className="w-1/2 flex flex-wrap ">
          {
            content.split(' ').map((word, wordIndex) => (
              <div key={wordIndex} className="flex  mr-4">
                {word.split('').map((letter, letterIndex) => (
                  <div key={letterIndex} className="inline-block  py-2">
                    <span className="textup text-white text-7xl inline-block font-bold">
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
        <div ref={image}  className="w-1/2 image ">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image" className="w-full h-full rounded-3xl object-cover" />
        </div>
      </section>
    );
  };

  export default Try6;
