// components/VideoSection.jsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Try8() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ctx = gsap.context(() => {
      // Ensure video metadata is loaded to get duration
      video.addEventListener("loadedmetadata", () => {
        const duration = video.duration;

        ScrollTrigger.create({
          trigger: video,
          start: "top top",
          end: "bottom bottom",
          scrub: true, // smooth scrubbing
          onUpdate: (self) => {
            const scrollProgress = self.progress; // 0 to 1
            video.currentTime = duration * scrollProgress;
          },
          markers: true, // for dev debugging
        });
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section style={{ height: "200vh", paddingTop: "50vh" }}>
      <video
        ref={videoRef}
        src="/infiniteloop.webm"
        muted
        playsInline
        preload="auto"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </section>
  );
}
