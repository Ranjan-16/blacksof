import React from "react";
import Carousel from "../common/Carousel";

const AutomotiveSection = () => {
  const videoData = [
    {
      label: "Complete body",
      videoSrc: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
      poster: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
    },
    {
      label: "Front",
      videoSrc: "/Front.8f5fda304d3095ab6b02.mp4",
      poster: "/Front.8f5fda304d3095ab6b02.mp4",
    },
    {
      label: "Cabin",
      videoSrc: "/Cabin.3260d3e4f52b3804dae5.mp4",
      poster: "/Cabin.3260d3e4f52b3804dae5.mp4",
    },
    {
      label: "Trunk",
      videoSrc: "/Trunk.54bfaa734c0395172c08.mp4",
      poster: "/Trunk.54bfaa734c0395172c08.mp4",
    },
    {
      label: "Exterior",
      videoSrc: "/Exterior.a127ebb308e655c7e32c.mp4",
      poster: "/Exterior.a127ebb308e655c7e32c.mp4",
    },
  ];
  return (
    <div className="blade-top-padding blade-bottom-padding bg-black">
      <section className="bg-black blade-top-padding blade-bottom-padding text-white lg:h-screen lg:overflow-hidden">
        <div className="w-container max-w-none flex flex-col h-full justify-between gap-4 2xl:gap-10 w-full">
          <h2 className="animated-heading w-fit hidden mx-auto md:block text-white font-light text-center padding-sm xl:pt-6 z-10">
            <span className="sg-translate">
              Evolving the drive with{" "}
              <span className="font-bold">360-degree</span>{" "}
              <br className="hidden md:block" /> comprehensive solutions
            </span>
          </h2>
        </div>
        <div className="lg:hidden blade-top-padding-lg mt-2 text-center w-container">
          <div>
            <h4 className="sg-translate text-xl text-blue mb-2 font-semibold">
              Passenger vehicles
            </h4>
            <p className="sg-translate ">
              Revving up innovation <br className="md:hidden" /> from interior to
              exterior.
            </p>
            <Carousel videoData={videoData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveSection;
