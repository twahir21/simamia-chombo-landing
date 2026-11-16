"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost-light";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-dark text-white shadow-[0_8px_24px_-8px_rgb(8_125_109/0.55)] hover:bg-brand-deeper",
  secondary: "border border-line bg-white text-ink hover:border-brand/40 hover:text-brand-dark",
  light: "bg-white text-brand-deeper hover:bg-brand-light",
  "ghost-light": "border border-white/25 text-white hover:bg-white/10",
};

/** Call-to-action link with Motion hover/press feedback. */
export function Cta({ href, children, variant = "primary", className = "" }: CtaProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}

/**
 * Card that lifts slightly on hover (Motion). The outer wrapper is the GSAP
 * stagger target, so scroll entrance and hover never fight over `transform`.
 */
export function HoverCard({
  children,
  className = "",
  cardClassName = "",
}: {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
}) {
  return (
    <div data-stagger-item className={className}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`h-full ${cardClassName}`}
      >
        {children}
      </motion.article>
    </div>
  );
}
