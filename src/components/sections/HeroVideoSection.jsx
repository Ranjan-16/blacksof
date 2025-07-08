/**
 * HeroVideoSection component for the main hero section with video background
 * 
 * This component provides a full-screen hero section with video background,
 * overlay, and centered content.
 */

"use client";

import { useEffect, useRef } from "react";

/**
 * HeroVideoSection Component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.videoSrc] - Video source URL
 * @param {string} [props.videoPoster] - Video poster image URL
 * @param {string} [props.title] - Hero title text
 * @param {string} [props.subtitle] - Hero subtitle text
 * @param {string} [props.className] - Additional CSS classes
 */
export function HeroVideoSection({ 
  videoSrc = "/automotive.224e7418884105595114.mp4",
  videoPoster = "/automotive.224e7418884105595114.mp4",
  title = "Soft trims and NVH solutions",
  subtitle = "for seamless rides",
  className = ""
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className={`relative lg:h-screen min-h-[450px] overflow-hidden bg-blueDark ${className}`}>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover object-center"
          poster={videoPoster}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* <source src="/automotive.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
        <span className="sg-translate font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
          Driven by performance
        </span>
        <h2 className="sg-translate text-white font-light leading-tight pb-2 2xl:text-[3rem] xl:text-[36px] lg:text-[30px] text-[28px]">
          <span className="font-semibold">
            {title.split(' and ')[0]} and <span className="text-cyan-400">NVH solutions</span>
          </span>
          <br className="hidden md:block" />
          <span className="font-light">{subtitle}</span>
        </h2>
      </div>
    </section>
  );
}

export default HeroVideoSection;
