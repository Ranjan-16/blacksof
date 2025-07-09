"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export function AutoMotiveDesktop({ videoData }) {
  const [activeVehicle, setActiveVehicle] = useState("passenger");
  const [activeControl, setActiveControl] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const passengerRef = useRef(null);
  const commercialRef = useRef(null);

  const passengerInView = useInView(passengerRef, { threshold: 0.5 });
  const commercialInView = useInView(commercialRef, { threshold: 0.5 });

  useEffect(() => {
    if (passengerInView) {
      setActiveVehicle("passenger");
      setActiveControl(0);
    } else if (commercialInView) {
      setActiveVehicle("commercial");
      setActiveControl(0);
    }
  }, [passengerInView, commercialInView]);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, activeControl]);

  const handleControlClick = (index) => {
    setActiveControl(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentControls =
    activeVehicle === "passenger"
      ? videoData.passengerVehicle
      : videoData.commercialVehicle;

  const currentVideo = currentControls[activeControl];

  return (
    <>
      <div ref={passengerRef} className="h-screen w-full"></div>
      <div ref={commercialRef} className="h-screen w-full"></div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[35%_65%] relative">
     
        <div className="cards-wrp pl-14 self-cente ml-[15%] relative 2xl:ml-[25%] 2xl:py-10 py-5 flex flex-col ">
          <button
            type="button"
            onClick={() => {
              setActiveVehicle("passenger");
              setActiveControl(0);
            }}
            className={`text-left mb-14 transition-opacity duration-300 ${
              activeVehicle === "passenger" ? "opacity-100" : "opacity-20"
            }`}
          >
            <h3 className="font-medium text-left pb-2">Passenger vehicles</h3>
            <h6 className="font-light text-left 2xl:text-lg">
              Revving up innovation from <br /> interior to exterior.
            </h6>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveVehicle("commercial");
              setActiveControl(0);
            }}
            className={`text-left transition-opacity duration-300 ${
              activeVehicle === "commercial" ? "opacity-100" : "opacity-20"
            }`}
          >
            <h3 className="font-medium text-left pb-2">Commercial vehicles</h3>
            <h6 className="font-light text-left 2xl:text-lg">
              Advancing engineering <br /> for heavy-duty vehicles.
            </h6>
          </button>
          <div className="absolute left-0 h-full w-[2px] rounded-md bg-gray-600 top-0">
            <div
              className="w-[2px] bg-white rounded-md transition-all duration-500"
              style={{
                height: "50%",
                transform: `translateY(${
                  activeVehicle === "passenger" ? "0%" : "100%"
                })`,
              }}
            />
          </div>
        </div>

        <div className="relative flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeVehicle}-${activeControl}`}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mx-auto"
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop
                className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                poster={currentVideo.poster}
              >
                <source src={currentVideo.videoSrc} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls (unchanged) */}
      <div className="hidden lg:flex justify-end items-center relative max-w-[84%] w-full">
        <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
          <div
            className={`grid gap-4 ${
              activeVehicle === "passenger" ? "grid-cols-5" : "grid-cols-3"
            }`}
          >
            {currentControls.map((control, index) => (
              <button
                key={control.id}
                type="button"
                onClick={() => handleControlClick(index)}
                className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${
                  activeControl === index ? "opacity-100" : "opacity-50"
                }`}
                aria-label={control.label}
              >
                <img
                  src={control.image || "/placeholder.svg"}
                  alt={control.label}
                  className="max-h-16 pt-1 2xl:max-h-20"
                />
                <span className="-mt-1 text-sm 2xl:text-base">
                  {control.label}
                </span>
              </button>
            ))}
          </div>

          {/* Play/Pause */}
          <div className="video-control-1 absolute right-0 top-0 bottom-0 my-auto z-50 flex items-center">
            <div className="relative inline-block z-50">
              <button
                type="button"
                onClick={togglePlayPause}
                className="p-3 2xl:p-4 rounded-full z-10 relative bg-white/10 hover:bg-white/20 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              <svg
                className="absolute top-0 left-0 z-0"
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeDasharray="144.51"
                  strokeDashoffset="0"
                  className="transition-all duration-300"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
