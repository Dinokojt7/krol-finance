import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export const metadata = {
  title: "About Us | Krol Finance",
  description:
    "Learn about Krol Finance — a results-driven financial services company helping growing businesses take control of their finances.",
};

const VALUES = [
  {
    title: "Clarity",
    description:
      "We break down complex financial concepts into plain language so you always understand your position.",
  },
  {
    title: "Discipline",
    description:
      "We apply consistent, structured approaches to financial management that deliver measurable results.",
  },
  {
    title: "Growth",
    description:
      "Everything we do is oriented toward one outcome — the long-term financial growth of our clients.",
  },
  {
    title: "Integrity",
    description:
      "We operate with full transparency. No hidden fees, no vague advice — just honest professional guidance.",
  },
];

export default function AboutPage() {
  const { business, stats } = siteData;

  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={
          <>
            More than accounting.
            <br />
            <em>Your growth partner.</em>
          </>
        }
        subtitle="Krol Finance is a results-driven financial services company built for serious business owners who want more than compliance — they want growth."
      />

      {/* Mission */}
      <section
        className="w-full py-20 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--bg-warm)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#A09060" }}
            >
              Our Mission
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 46px)",
                color: "var(--primary)",
                lineHeight: 1.1,
              }}
            >
              Plan Today.
              <br />
              <em>Prosper Tomorrow.</em>
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#5A5A5A" }}
            >
              Krol Finance was founded on a simple belief: every business owner
              deserves access to professional financial guidance — not just the
              wealthy or the well-connected. We partner with committed
              entrepreneurs and established SMEs across South Africa to deliver
              practical, profit-focused financial solutions.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#5A5A5A" }}
            >
              Our services span car finance, business finance, commercial asset
              finance, debt management, tax compliance, and bookkeeping — giving
              you a single trusted partner for every financial need.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-section.png"
              alt="Krol Finance financial dashboard"
              width={0}
              height={0}
              sizes="50vw"
              className="w-full h-auto scale-125 origin-center"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#A09060" }}
          >
            What We Stand For
          </p>
          <h2
            className="mb-14"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              color: "var(--primary)",
              lineHeight: 1.1,
            }}
          >
            Our core values.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3
                  className="text-sm font-bold tracking-widest uppercase mb-3"
                  style={{ color: "var(--primary)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5A5A5A" }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="w-full py-16 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/10">
          {stats.map(({ num, label }) => (
            <div key={num} className="px-6 py-8 text-center">
              <p
                className="font-black text-white mb-2"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(32px, 5vw, 56px)",
                }}
              >
                {num}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              color: "var(--primary)",
            }}
          >
            Ready to take control?
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#5A5A5A" }}
          >
            Book a no-obligation consultation and let&apos;s talk about your
            financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-gray-300 text-sm font-medium rounded-full hover:border-gray-900 transition-colors"
              style={{ color: "var(--primary)" }}
            >
              Our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
