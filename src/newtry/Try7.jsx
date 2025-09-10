import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef, useEffect } from 'react';

gsap.registerPlugin(SplitText);

const Try7 = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const textElements = textRefs.current;

      textElements.forEach((el, i) => {
        const split = new SplitText(el, { type: 'words, chars, lines' });

        tl.from(split.words, {
          duration: 1,
          y: 100,
          opacity: 0,
          filter: 'blur(10px)',
          autoAlpha: 0,
          stagger: 0.05,
        });

        tl.to(el, {
          delay: 0.5,
          opacity: 0,
        });
      });

      tl.to('.circlestart', {
        scale: 15,
        duration: 3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative w-full h-screen bg-black flex flex-col gap-2 justify-center items-center text-white text-4xl overflow-hidden'
    >
      <div className='circlestart absolute rounded-full bg-white w-48 aspect-square scale-0 z-10'></div>

      {[
        'Dream big, work hard, stay focused.',
        "Success is not a destination, it's a journey.",
        'The future belongs to those who believe in the beauty of their dreams.',
      ].map((text, i) => (
        <p
          key={i}
          ref={(el) => (textRefs.current[i] = el)}
          className='absolute '
        >
          {text}
        </p>
      ))}
    </section>
  );
};

export default Try7;
