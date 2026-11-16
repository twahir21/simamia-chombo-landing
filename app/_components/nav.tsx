"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo, LOGIN_URL, NAV_LINKS, REGISTER_URL } from "./ui";
import { getLenis } from "./smooth-scroll";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    if (next !== scrolled) setScrolled(next);
  });

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Lenis is stopped while the menu is open, so close first, then scroll.
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    requestAnimationFrame(() => {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(href, { offset: -80, force: true });
      else document.querySelector(href)?.scrollIntoView();
      history.replaceState(null, "", href);
    });
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled || open ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0)",
        borderColor: scrolled || open ? "rgba(21,37,33,0.08)" : "rgba(21,37,33,0)",
      }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <nav aria-label="Urambazaji mkuu" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#juu" aria-label="Simamia Chombo, rudi juu" className="rounded-lg">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a href={LOGIN_URL} className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-brand-dark sm:block">
            Ingia
          </a>
          <motion.a
            href={REGISTER_URL}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex h-10 items-center rounded-full bg-brand-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-deeper"
          >
            Fungua Akaunti
          </motion.a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menyu-simu"
            aria-label={open ? "Funga menyu" : "Fungua menyu"}
            className="ml-1 grid size-10 place-items-center rounded-full text-ink hover:bg-canvas-2 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <motion.path animate={{ d: open ? "M6 6L18 18" : "M4 8H20" }} />
              <motion.path animate={{ d: open ? "M6 18L18 6" : "M4 16H20" }} />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menyu-simu"
            key="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              className="mx-auto max-w-6xl px-5 py-4"
            >
              {NAV_LINKS.map((l) => (
                <motion.li key={l.href} variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}>
                  <a
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    className="flex min-h-12 items-center border-b border-line text-base font-medium text-ink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="pt-4">
                <a href={LOGIN_URL} className="flex min-h-12 items-center justify-center rounded-full border border-line font-semibold text-ink">
                  Ingia kwenye akaunti
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
