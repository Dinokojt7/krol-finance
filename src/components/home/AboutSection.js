"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="grid md:grid-cols-2 items-center">
        {/* Left: text — padded normally */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 pl-4 sm:pl-8 lg:pl-16 xl:pl-24 pr-6 md:pr-10"
        >
          <div className="max-w-lg">
            <h2
              className="mb-8 leading-[1.05] tracking-tight"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(36px, 5vw, 58px)",
                color: "var(--primary)",
              }}
            >
              More than accounting.
              <br />
              Your partner in
              <br />
              <em>financial growth.</em>
            </h2>

            <div className="space-y-5">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#5A5A5A" }}
              >
                Krol Finance is a results-driven financial services company
                dedicated to helping growing businesses take control of their
                finances and scale with confidence. We partner with serious
                business owners to deliver practical, profit-focused financial
                solutions that go beyond basic accounting.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#5A5A5A" }}
              >
                At Krol Finance, we don&apos;t just manage finances — we act as
                your financial growth partner. Our approach is built on clarity,
                discipline, and measurable results, ensuring that our clients
                not only stay compliant but also achieve long-term financial
                success.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-12 px-8 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Get started
            </a>
          </div>
        </motion.div>

        {/* Right: office image — full natural height, vertically centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/images/services-office.webp"
            alt="Professional financial advisors at work"
            width={0}
            height={0}
            sizes="50vw"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
