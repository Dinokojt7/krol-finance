"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export default function FAQPage() {
  const { faqs } = siteData;
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions,
            <br />
            <em>answered.</em>
          </>
        }
        subtitle="Everything you need to know about Krol Finance and our services."
      />

      <section
        className="w-full py-20 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--bg-warm)" }}
      >
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className="text-sm sm:text-base font-semibold leading-snug"
                  style={{ color: "var(--primary)" }}
                >
                  {faq.question}
                </span>
                <span
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--primary)" }}
                >
                  {open === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-sm leading-relaxed pb-6"
                      style={{ color: "#5A5A5A" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Still have questions?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5A5A5A" }}>
            We&apos;re happy to help. Reach out and we&apos;ll get back to you
            promptly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
