"use client";

import React, { useRef } from "react";
import Carousel from "../common/Carousel";
import dynamic from "next/dynamic";

// Dynamically import AutoMotiveDesktop to avoid SSR issues
const AutoMotiveDesktop = dynamic(
  () => import("../AutoMotiveDesktop").then((mod) => mod.AutoMotiveDesktop),
  {
    ssr: false,
    loading: () => (
      <div className="hidden lg:block h-96 animate-pulse bg-gray-800 rounded-lg" />
    ),
  }
);

const AutomotiveSection = () => {
  const videoData = {
    passengerVehicle: [
      {
        id: 1,
        image: "/compelete_body.png",
        label: "Complete body",
        videoSrc: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
        poster: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
      },
      {
        id: 2,
        image: "front.png",
        label: "Front",
        videoSrc: "/Front.8f5fda304d3095ab6b02.mp4",
        poster: "/Front.8f5fda304d3095ab6b02.mp4",
      },
      {
        id: 3,
        image: "cabin.png",
        label: "Cabin",
        videoSrc: "/Cabin.3260d3e4f52b3804dae5.mp4",
        poster: "/Cabin.3260d3e4f52b3804dae5.mp4",
      },
      {
        id: 4,
        image: "trunk.png",
        label: "Trunk",
        videoSrc: "/Trunk.54bfaa734c0395172c08.mp4",
        poster: "/Trunk.54bfaa734c0395172c08.mp4",
      },
      {
        id: 5,
        image: "exterior.png",
        label: "Exterior",
        videoSrc: "/Exterior.a127ebb308e655c7e32c.mp4",
        poster: "/Exterior.a127ebb308e655c7e32c.mp4",
      },
    ],
    commercialVehicle: [
      {
        id: 1,
        image: "commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg",
        label: "Complete body",
        videoSrc: "/Commercial Alpha.92c92d40f9116c837d1d.mp4",
        poster: "/Commercial Alpha.92c92d40f9116c837d1d.mp4",
      },
      {
        id: 2,
        image: "/commercial-engine.474985507c936157fc7a6daa457d4f04.svg",
        label: "Engine",
        videoSrc: "/Commercial-Engine.d8957f7c027ca396858e.mp4",
        poster: "/Commercial-Engine.d8957f7c027ca396858e.mp4",
      },
      {
        id: 3,
        image: "/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg",
        label: "Cabin",
        videoSrc: "/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
        poster: "/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
      },
    ],
  };

  return (
    <div className="md:pt-8 py-10 bg-black">
      <section className="bg-black md:py-8 py-10 text-white lg:h-screen lg:overflow-hidden w-container max-w-none flex flex-col h-full justify-between gap-4 2xl:gap-10 w-full">
        {/* Heading */}
        <div className="w-container max-w-none flex flex-col px-3 justify-between gap-4 2xl:gap-10 w-full">
          <div className="animate-fade-in">
            <h2 className="animated-heading text-[28px] md:text-[30px] w-fit mx-auto md:block text-white font-light text-center pt-6 z-10">
              <span className="sg-translate">
                Evolving the drive with{" "}
                <span className="font-bold">360-degree</span>{" "}
                <br className="hidden md:block" /> comprehensive solutions
              </span>
            </h2>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden pt-10 mt-2 text-center w-container">
          <div>
            <h4 className="text-xl text-[#006CBC] mb-2 font-semibold">
              Passenger vehicles
            </h4>
            <p>
              Revving up innovation <br className="md:hidden" /> from interior
              to exterior.
            </p>
            <Carousel videoData={videoData.passengerVehicle} />
          </div>

          <div className="pt-8">
            <h3 className="text-xl mb-2 text-blue font-semibold">
              Commercial vehicles
            </h3>
            <p>
              Advancing engineering <br className="md:hidden" /> for heavy-duty
              vehicles.
            </p>
            <Carousel videoData={videoData.commercialVehicle} />
          </div>
        </div>

        {/* Desktop Layout */}
        <AutoMotiveDesktop videoData={videoData} />
      </section>
    </div>
  );
};

export default AutomotiveSection;
