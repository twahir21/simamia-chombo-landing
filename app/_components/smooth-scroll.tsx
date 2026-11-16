"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

// Height of the sticky header, so anchor jumps don't hide section titles.
const NAV_OFFSET = -80;

let lenis: Lenis | null = null;

/** The active Lenis instance, or null when smooth scrolling is off (reduced motion). */
export function getLenis() {
  return lenis;
}

/**
 * Lenis owns smooth scrolling; GSAP's ticker drives it so ScrollTrigger
 * and Lenis read the same scroll position on the same frame.
 * Motion (Framer Motion) respects the OS reduced-motion setting via MotionConfig.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      autoRaf: false,
      lerp: 0.12,
      anchors: { offset: NAV_OFFSET },
    });
    lenis = instance;

    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Web fonts change section heights; re-measure trigger positions once loaded.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      instance.destroy();
      lenis = null;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
