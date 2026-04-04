"use client";

import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section
      className="relative w-full pt-40 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{
        backgroundColor: "var(--primary)",
        borderRadius: "0 0 48px 48px",
      }}
    >
      <div className="max-w-7xl mx-auto max-w-3xl">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-white/50 mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white mb-5"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(36px, 6vw, 68px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
