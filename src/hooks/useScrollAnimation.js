/**
 * Custom hook for scroll-triggered animations
 *
 * This hook provides smooth scroll-triggered animations using Intersection Observer
 * with various animation types and customizable options.
 */

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation hook
 *
 * @param {Object} options - Animation options
 * @param {string} [options.animation="fadeInUp"] - Animation type
 * @param {number} [options.threshold=0.1] - Intersection threshold
 * @param {number} [options.delay=0] - Animation delay in milliseconds
 * @param {number} [options.duration=600] - Animation duration in milliseconds
 * @param {boolean} [options.once=true] - Whether animation should trigger only once
 * @returns {Object} - { ref, isVisible, animationClass }
 */
export function useScrollAnimation(options = {}) {
  const {
    animation = "fadeInUp",
    threshold = 0.1,
    delay = 0,
    duration = 600,
    once = true,
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !once) {
            setTimeout(() => {
              setIsVisible(true);
              if (once) setHasAnimated(true);
            }, delay);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, delay, once, hasAnimated]);

  // Animation classes mapping
  const animationClasses = {
    fadeIn: {
      initial: "opacity-0",
      animate: "opacity-100 transition-opacity",
      duration: `duration-${duration}`,
    },
    fadeInUp: {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0 transition-all",
      duration: `duration-${duration}`,
    },
    fadeInDown: {
      initial: "opacity-0 -translate-y-8",
      animate: "opacity-100 translate-y-0 transition-all",
      duration: `duration-${duration}`,
    },
    fadeInLeft: {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0 transition-all",
      duration: `duration-${duration}`,
    },
    fadeInRight: {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0 transition-all",
      duration: `duration-${duration}`,
    },
    scaleIn: {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100 transition-all",
      duration: `duration-${duration}`,
    },
    slideInUp: {
      initial: "translate-y-full opacity-0",
      animate: "translate-y-0 opacity-100 transition-all",
      duration: `duration-${duration}`,
    },
    rotateIn: {
      initial: "opacity-0 rotate-12 scale-95",
      animate: "opacity-100 rotate-0 scale-100 transition-all",
      duration: `duration-${duration}`,
    },
  };

  const currentAnimation =
    animationClasses[animation] || animationClasses.fadeInUp;

  const animationClass = isVisible
    ? `${currentAnimation.animate} ${currentAnimation.duration}`
    : `${currentAnimation.initial} ${currentAnimation.duration}`;

  return {
    ref: elementRef,
    isVisible,
    animationClass,
  };
}

/**
 * useStaggeredAnimation hook for multiple elements
 *
 * @param {number} itemCount - Number of items to animate
 * @param {Object} options - Animation options
 * @returns {Array} - Array of animation objects
 */
export function useStaggeredAnimation(itemCount, options = {}) {
  const { staggerDelay = 100, ...animationOptions } = options;

  const animations = [];

  for (let i = 0; i < itemCount; i++) {
    animations.push(
      useScrollAnimation({
        ...animationOptions,
        delay: (animationOptions.delay || 0) + i * staggerDelay,
      })
    );
  }

  return animations;
}

/**
 * useParallaxScroll hook for parallax effects
 *
 * @param {number} [speed=0.5] - Parallax speed (0-1)
 * @returns {Object} - { ref, transform }
 */
export function useParallaxScroll(speed = 0.5) {
  const elementRef = useRef(null);
  const [transform, setTransform] = useState("translateY(0px)");

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setTransform(`translateY(${rate}px)`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    transform,
  };
}

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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Don't hide header when at the very top
      if (currentScrollY < threshold) {
        setIsVisible(true);
        setScrollDirection("up");
        setLastScrollY(currentScrollY);
        return;
      }

      // Determine scroll direction
      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection("down");
        setIsVisible(false);
      } else {
        // Scrolling up
        setScrollDirection("up");
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY, threshold]);

  return {
    scrollDirection,
    isVisible,
    scrollY,
  };
}
