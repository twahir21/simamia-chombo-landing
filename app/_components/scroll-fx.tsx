"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fmt = new Intl.NumberFormat("en-US");

/**
 * All scroll-driven animation lives here (GSAP + ScrollTrigger).
 * Sections stay server-rendered and opt in with data attributes:
 *
 *   data-hero-item     intro sequence on load (hero only)
 *   data-reveal        fade/slide up when entering the viewport
 *   data-stagger       children marked data-stagger-item enter one by one
 *   data-count="N"     number counts up to N when visible
 *   data-bar           bar grows from the bottom
 *   data-progress      bar grows from the left
 *   data-strike        line draws from the left
 *   data-parallax="k"  decorative element drifts with scroll
 *   data-draw="x|y"    line scrubs with scroll through its section
 *   data-hpin          desktop: pinned section, data-htrack scrolls sideways
 *
 * Everything runs inside gsap.matchMedia, so reduced-motion users get the
 * static page and all tweens/triggers are reverted on unmount.
 */
export function ScrollFx() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
      Array.from(root.querySelectorAll<T & Element>(sel)) as T[];

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero intro
      const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero.fromTo(
        q("[data-hero-item]"),
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 },
      );
      q("[data-hero-count]").forEach((el) => {
        const target = Number(el.dataset.heroCount);
        const obj = { v: 0 };
        el.textContent = "0";
        hero.to(
          obj,
          { v: target, duration: 1.4, ease: "power2.out", onUpdate: () => (el.textContent = fmt.format(Math.round(obj.v))) },
          0.5,
        );
      });
      hero.from(q("[data-hero-bar]"), { scaleY: 0, transformOrigin: "50% 100%", duration: 0.7, stagger: 0.06 }, 0.7);
      hero.from(q("[data-hero-row]"), { autoAlpha: 0, x: -12, duration: 0.5, stagger: 0.08 }, 0.9);
      hero.from(q("[data-hero-progress]"), { scaleX: 0, transformOrigin: "0 50%", duration: 0.9, stagger: 0.08 }, 1.0);
      hero.from(q("[data-hero-float]"), { autoAlpha: 0, y: 30, scale: 0.96, duration: 0.8, stagger: 0.15 }, 1.2);

      // Gentle idle float for the overlapping hero cards
      q("[data-hero-float]").forEach((el, i) => {
        gsap.to(el, { y: i % 2 ? 6 : -6, duration: 3 + i, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });
      });

      // Generic reveals
      q("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      q("[data-stagger]").forEach((group) => {
        // Only direct members: nested groups animate their own items.
        const items = q("[data-stagger-item]", group).filter((el) => el.parentElement?.closest("[data-stagger]") === group);
        if (!items.length) return;
        gsap.from(items, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      q("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => (el.textContent = fmt.format(Math.round(obj.v))),
        });
      });

      q("[data-bar]").forEach((el) => {
        gsap.from(el, {
          scaleY: 0,
          transformOrigin: "50% 100%",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        });
      });

      q("[data-progress]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "0 50%",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      q("[data-strike]").forEach((el, i) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "0 50%",
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.4 + i * 0.25,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
      });

      q("[data-parallax]").forEach((el) => {
        const k = Number(el.dataset.parallax) || 0.2;
        gsap.to(el, {
          yPercent: k * 100,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top top", end: "bottom top", scrub: true },
        });
      });

      q("[data-draw]").forEach((el) => {
        const axis = el.dataset.draw === "y" ? "scaleY" : "scaleX";
        gsap.fromTo(
          el,
          { [axis]: 0 },
          {
            [axis]: 1,
            ease: "none",
            transformOrigin: axis === "scaleY" ? "50% 0" : "0 50%",
            scrollTrigger: { trigger: el.closest("section") ?? el, start: "top 70%", end: "bottom 70%", scrub: 0.5 },
          },
        );
      });
    });

    // Pinned horizontal story: desktop only, and only with motion allowed.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      q("[data-hpin]").forEach((section) => {
        const track = section.querySelector<HTMLElement>("[data-htrack]");
        const wrap = section.querySelector<HTMLElement>("[data-hwrap]");
        if (!track || !wrap) return;
        const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
