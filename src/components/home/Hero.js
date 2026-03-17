"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export default function Hero() {
  const { business } = siteData;

  return (
    <section className="w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: "var(--primary)",
          borderRadius: "0 0 64px 64px",
          minHeight: "clamp(380px, 60vh, 680px)",
        }}
      >
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-14 md:px-20 py-20 max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent)" }}
          >
            {business.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.0] tracking-tight mb-8"
          >
            SERVING YOUR<br />
            COMMUNITY WITH<br />
            <span className="relative inline-block">
              EXPERTISE &amp; TRUST
              {/* Accent underline */}
              <span
                className="absolute left-0 -bottom-2 h-1 w-3/4"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-white/60 text-sm sm:text-base max-w-lg leading-relaxed mb-10"
          >
            {business.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity rounded-md"
              style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            >
              GET IN TOUCH
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white/40 text-xs font-bold tracking-widest uppercase text-white hover:border-white transition-colors rounded-md"
            >
              OUR SERVICES
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
