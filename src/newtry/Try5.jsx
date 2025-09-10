import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import { FaFigma, FaStar } from 'react-icons/fa';

const Try5 = () => {
  const container = useRef();

  const text = useRef();
  const textdes = useRef();

  useGSAP(() => {

    const split1 = new SplitText(text.current, { type: 'words, chars, lines' });
    const split2 = new SplitText(textdes.current, { type: 'words, chars, lines' });


    const tl = gsap.timeline();

    gsap .from(split1.chars, {
      y: 50,
      x: -50,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,       // element to watch
        start: "top 80%",      // when top of .box hits 80% down the viewport
        toggleActions: "play none none none",      // Show start/end markers (for debugging)
      }
    });
    gsap.from(split2.words, {

      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 2,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,     // Element that triggers animation
        start: "top 80%",
        toggleActions: "play none none none"        // Show start/end markers (for debugging)
      }
    });

    // tl.to('#page4 .newbox', {
    //   scale: 0.1,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 1,
    //   ease: 'power.out(1.7)',
    //   stagger: {
    //     grid: [10, 10],
    //     from: 'random',
    //     amount: 1,
    //   },
    // });







  }, { scope: container });


  return (
    <section
      id="page4"
      ref={container}
      className=" relative  h-screen w-full bg-black "
    >
      <div className="absolute hidden top-0 left-0 z-30 w-full h-full  grid-cols-10 gap-2 p-2 items-center overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="newbox"

          />

        ))}
      </div>

      <div style={{ fontFamily: "Raleway" }} className="w-full h-full grid grid-rows-2 grid-cols-12 gap-6 pt-[80px] p-4 ">

        <div className="  col-start-2">
          <FaFigma className='text-white text-[150px]' />
        </div>

        <div className=" col-start-7 col-span-6   ">
          <h1 ref={text} className="text-white lg:text-[54px] 2xl:text-[78px] font-bold ">
            UI/UX Design and Development
          </h1>
          <p className='text-lg 2xl:text-xl text-white/80 border-b pb-8 border-white/20'>Empowering digital experiences through seamless design</p>
        </div>
        <div className=" col-start-1 col-span-6 flex flex-col     ">
          <h3 ref={textdes} className="text-white text-xl 2xl:text-2xl font-semibold leading-10 tracking-wide border-r border-white/20 pr-4">
            Crafting seamless digital experiences through intuitive interfaces and engaging user interactions. Our UI/UX solutions combine aesthetic appeal with functional design to deliver impactful results.

          </h3> 
          <button className="w-fit bg-white text-black py-3 px-6 rounded-lg mt-8 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="hidden col-span-3 border-3 border-white/50 rounded-2xl p-4 h-fit">
          <ul>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> User-Centered Design Approach</li>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> Responsive & Interactive Interfaces</li>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> Wireframing & Prototyping</li>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> User Research & Testing</li>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> Visual Design & Branding</li>
            <li className="text-white/80 font-semibold text-xl  mb-3"> <FaStar className='inline-block mb-1' /> Accessibility Optimization</li>          </ul>
        </div>

      </div>
    </section>
  );
};

export default Try5;
