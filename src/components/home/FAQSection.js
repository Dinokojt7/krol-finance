"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import siteData from "@/lib/data/site-data.json";

export default function FAQSection() {
  const { faqs } = siteData;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[340px_1fr] gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Title (intentional offset) */}
            <div className="ml-2 sm:ml-4">
              <h2
                className="text-5xl sm:text-6xl font-black uppercase leading-none relative inline-block"
                style={{ color: "var(--primary)" }}
              >
                FAQ&apos;S
                <span
                  className="absolute left-0 -bottom-2 h-1.5 w-16"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </h2>
            </div>

            {/* Image (aligned to header, not title) */}
            <div className="mt-12 -ml-1 sm:-ml-2 lg:-ml-3">
              <Image
                src="/images/asset-management.png"
                alt="Asset management"
                width={0}
                height={0}
                sizes="40vw"
                className="h-auto w-[110%] max-w-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="pl-4 sm:pl-6 lg:pl-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-dashed border-gray-300">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-start justify-between gap-3 py-6 text-left"
                >
                  {/* Question */}
                  <span
                    className="text-sm sm:text-base font-black uppercase leading-snug pr-4"
                    style={{ color: "var(--primary)" }}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
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
                      <p className="text-sm text-gray-500 leading-relaxed pb-6 pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
