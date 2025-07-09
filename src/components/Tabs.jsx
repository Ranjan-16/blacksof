"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabContent = {
  tab1: {
    label: "Passenger Vehicles",
    description: "Revving up innovation from interior to exterior.",
    color: "bg-cyan-500",
  },
  tab2: {
    label: "Commercial Vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    color: "bg-green-500",
  },
};

const variants = {
  enter: (direction) => ({
    y: direction === "up" ? 50 : -50,
    scale: 0,
    opacity: 0,
  }),
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    y: direction === "up" ? -50 : 50,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  }),
};

export default function MotionTabs() {
  const [tab, setTab] = useState("tab1");
  const [direction, setDirection] = useState("up");

  const handleTabChange = (newTab) => {
    setDirection(newTab === "tab1" ? "down" : "up");
    setTab(newTab);
  };

  const content = tabContent[tab];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Tab Buttons */}
      <div className="mb-8 space-x-4">
        <button
          onClick={() => handleTabChange("tab1")}
          className={`px-6 py-2 border ${
            tab === "tab1" ? "border-white" : "border-gray-500"
          }`}
        >
          Passenger
        </button>
        <button
          onClick={() => handleTabChange("tab2")}
          className={`px-6 py-2 border ${
            tab === "tab2" ? "border-white" : "border-gray-500"
          }`}
        >
          Commercial
        </button>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-lg h-64">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={tab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 rounded-xl p-6 flex flex-col justify-center items-center text-center ${content.color}`}
          >
            <h2 className="text-2xl font-bold mb-4">{content.label}</h2>
            <p className="text-lg">{content.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
