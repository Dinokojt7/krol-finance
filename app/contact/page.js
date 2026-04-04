"use client";

import { useState, useRef, useEffect } from "react";
import PageHero from "@/components/shared/PageHero";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

const SERVICES = [
  "Car Finance",
  "Business Finance",
  "Commercial Asset Finance",
  "Debt Management",
  "Tax & Compliance",
  "Bookkeeping",
  "Other",
];

export default function ContactPage() {
  const { business } = siteData;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const inputClass =
    "w-full h-12 px-4 text-sm border border-black/15 rounded-lg bg-white/15 backdrop-blur-sm focus:outline-none focus:border-black/40 transition-colors placeholder:text-gray-400";
  const labelClass =
    "block text-xs font-semibold tracking-wider uppercase mb-2";

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s talk about
            <br />
            <em>your finances.</em>
          </>
        }
        subtitle="Book a free consultation or send us a message. We respond within one business day."
      />

      <section
        className="w-full py-14 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--bg-warm)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <h2
              className="mb-7 text-xl font-semibold"
              style={{ color: "var(--primary)" }}
            >
              Send us a message
            </h2>

            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "var(--primary)" }}
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: "#5A5A5A" }}>
                  We&apos;ll get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs font-semibold tracking-wide underline"
                  style={{ color: "var(--primary)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--primary)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rudo Mphofu"
                      className={inputClass}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--primary)" }}
                    >
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--primary)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="079 000 0000"
                      className={inputClass}
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <div ref={dropdownRef} className="relative">
                    <label
                      className={labelClass}
                      style={{ color: "var(--primary)" }}
                    >
                      Service Interested In
                    </label>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className="w-full h-12 px-4 pr-10 text-sm border border-black/15 rounded-lg bg-white/15 backdrop-blur-sm focus:outline-none focus:border-black/40 transition-colors flex items-center justify-between"
                      style={{
                        color: form.service ? "var(--primary)" : "#9CA3AF",
                      }}
                    >
                      <span>{form.service || "Select a service"}</span>
                      <ChevronDown
                        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform"
                        style={{
                          color: "var(--primary)",
                          marginTop: "13px",
                          transform: dropdownOpen
                            ? "translateY(-50%) rotate(180deg)"
                            : "translateY(-50%)",
                        }}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white/70 backdrop-blur-md border border-black/10 rounded-lg overflow-hidden z-20 shadow-lg">
                        {SERVICES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => {
                              setForm((f) => ({ ...f, service: s }));
                              setDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-sm text-left transition-colors hover:bg-black/8"
                            style={{
                              color: "var(--primary)",
                              backgroundColor:
                                form.service === s
                                  ? "rgba(0,0,0,0.06)"
                                  : undefined,
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    className={labelClass}
                    style={{ color: "var(--primary)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your financial needs..."
                    className="w-full px-4 py-3 text-sm border border-black/15 rounded-lg bg-white/15 backdrop-blur-sm focus:outline-none focus:border-black/40 transition-colors resize-none placeholder:text-gray-400"
                    style={{ color: "var(--primary)" }}
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-500">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: "var(--primary)" }}
              >
                Contact Details
              </h3>
              <div className="space-y-5">
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                    style={{ borderColor: "rgba(0,0,0,0.2)" }}
                  >
                    <Phone
                      className="w-4 h-4"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mb-0.5"
                      style={{ color: "#A09060" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--primary)" }}
                    >
                      {business.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
                    style={{ borderColor: "rgba(0,0,0,0.2)" }}
                  >
                    <Mail
                      className="w-4 h-4"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mb-0.5"
                      style={{ color: "#A09060" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium break-all"
                      style={{ color: "var(--primary)" }}
                    >
                      {business.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
                    style={{ borderColor: "rgba(0,0,0,0.2)" }}
                  >
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-wide uppercase mb-0.5"
                      style={{ color: "#A09060" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: "var(--primary)" }}
                    >
                      {business.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">
                Prefer WhatsApp?
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Message us directly on WhatsApp for a quick response.
              </p>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium text-gray-900 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--bg-warm)" }}
              >
                Open WhatsApp
              </a>
            </div>

            <div
              className="text-xs leading-relaxed"
              style={{ color: "#A09060" }}
            >
              <p className="font-semibold tracking-wide uppercase mb-1">
                Business Hours
              </p>
              <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
