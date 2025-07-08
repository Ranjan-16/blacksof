/**
 * Header component for site navigation
 *
 * This component provides the main site header with responsive design,
 * navigation functionality, and scroll-based hide/show behavior.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollDirection } from "../../hooks/useScrollAnimation";

/**
 * Header Component
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
export function Header({ className = "" }) {
  const { isVisible, scrollY } = useScrollDirection(10);

  return (
    <div
      id="header-wrapper"
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrollY > 50 ? "shadow-xl border-b border-gray-100" : "shadow-lg"
      } ${className}`}
      style={{
        // Add backdrop blur and transparency when scrolled
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        backgroundColor:
          scrollY > 50 ? "rgba(255, 255, 255, 0.95)" : "rgb(255, 255, 255)",
      }}
    >
      <header className="py-1 sm:py-2 md:py-2 lg:py-3 xl:py-3 2xl:py-4 z-50">
        <div
          className="
          h-full 
          py-1 sm:py-2 md:py-2 lg:py-3 xl:py-3 2xl:py-4
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
          flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8
          items-center justify-between 
          mx-auto
          w-full sm:w-full md:w-95 lg:w-90 xl:w-90 2xl:w-83
          max-w-none sm:max-w-none md:max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl
        "
        >
          <Link href="/" className="flex-shrink-0">
            <span>
              <Image
                width={120}
                height={36}
                src="/logo.svg"
                className="
                  h-8 w-auto sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14
                  cursor-pointer
                  transition-all duration-200 ease-in-out
                  hover:scale-105
                "
                alt="Logo of supreme with text"
                loading="eager"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, (max-width: 1024px) 140px, (max-width: 1440px) 150px, 160px"
              />
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
