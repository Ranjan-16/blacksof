"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[9999]">
      <div className="container mx-auto lg:max-w-[83%] max-w-[91%] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <a href="/">
              <span>
                <Image
                  src="/logo.svg"
                  height={40}
                  width={145}
                  className="h-full !cursor-pointer"
                  alt="Logo of supreme with text"
                  loading="eager"
                />
              </span>
            </a>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-800 font-medium px-4 py-2 lg:px-6 lg:py-2 rounded-full text-sm lg:text-base transition-colors duration-200">
              Contact Us
            </button>
            <Link
              href="#"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Image
                src={"/bxl-linkedin.svg"}
                height={24}
                width={24}
                alt="linkedin"
              />
            </Link>
            <div className="flex items-center space-x-1 text-gray-600">
              <Image
                src={"/translate 1.svg"}
                className="h-full"
                height={22}
                width={22}
                alt="translate"
              />
              <span className="text-sm font-semibold">ENG</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
