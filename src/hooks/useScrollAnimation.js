/**
 * Custom hook for scroll-triggered animations
 *
 * This hook provides smooth scroll-triggered animations using Intersection Observer
 * with various animation types and customizable options.
 */

"use client";

import { useEffect, useRef, useState, useMemo } from "react";

/**
 * useScrollDirection hook for detecting scroll direction
 *
 * @param {number} [threshold=10] - Minimum scroll distance to trigger direction change
 * @returns {Object} - { scrollDirection, isVisible, scrollY }
 */
export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const handleScroll = useMemo(() => {
    return () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);

          if (currentScrollY < threshold) {
            setIsVisible(true);
            setScrollDirection("up");
            lastScrollYRef.current = currentScrollY;
            tickingRef.current = false;
            return;
          }

          if (Math.abs(currentScrollY - lastScrollYRef.current) < threshold) {
            tickingRef.current = false;
            return;
          }

          if (currentScrollY > lastScrollYRef.current) {
            setScrollDirection("down");
            setIsVisible(false);
          } else {
            setScrollDirection("up");
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    scrollDirection,
    isVisible,
    scrollY,
  };
}
