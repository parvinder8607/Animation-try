import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

const Try4 = () => {
    const imgBox = useRef(null);
    const cursor = document.querySelector('#cursor');

    // Animate cursor and image on hover
    const handleMouseIn = () => {
        gsap.to(cursor, {
            width: 100,
            height: 100,
            ease: "back.out(1.7)",
        });
        gsap.to(imgBox.current, {
            scale: 1.2,
            duration: 0.5,
            ease: "back.out(1.7)",
        });
        cursor.innerHTML = "Explore";
    };

    const handleMouseOut = () => {
        gsap.to(cursor, {
            width: 40,
            height: 40,
            ease: "back.out(1.7)",
        });
        gsap.to(imgBox.current, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
        });
        cursor.innerHTML = "";
    };

    // Optional: Setup GSAP context for cleanup (good practice)
    useGSAP(() => {
        // You can place initial animations here if needed
    });

    return (
        <section className='h-screen w-full flex justify-center items-center bg-black overflow-hidden relative'>
           
            <div 
                ref={imgBox}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
                className="w-1/2 cursor-pointer"
            >
                <img 
                    src="https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg" 
                    alt="futuristic scene" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </section>
    );
};

export default Try4;
