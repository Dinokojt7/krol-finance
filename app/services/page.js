import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export const metadata = {
  title: "Services | Krol Finance",
  description:
    "Car finance, business finance, commercial asset finance, debt management, tax compliance, and bookkeeping — all under one roof.",
};

export default function ServicesPage() {
  const { services, business } = siteData;

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Comprehensive services,
            <br />
            <em>built around you.</em>
          </>
        }
        subtitle="From finance deals to debt freedom — we cover every financial need your business or personal journey requires."
      />

      {/* Services grid */}
      <section
        className="w-full py-20 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--bg-warm)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-10"
                style={{ backgroundColor: "var(--bg-warm)" }}
              >
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--primary)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#5A5A5A" }}
                >
                  {svc.detail}
                </p>
                {svc.points && (
                  <ul className="space-y-2 mt-4">
                    {svc.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#5A5A5A" }}
                      >
                        <span
                          className="mt-1 w-3 h-3 rounded-full shrink-0 border-2"
                          style={{ borderColor: "var(--primary)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance focus block */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#A09060" }}
            >
              Finance Solutions
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
              Let us help you qualify
              <br />
              and get the <em>perfect deal.</em>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5A5A5A" }}
            >
              Whether you need a vehicle for personal use, funding for your
              business, or financing for commercial assets — Krol Finance
              connects you with the right lenders and negotiates the best
              available rates on your behalf.
            </p>
            <div className="space-y-3">
              {[
                "Car Finance",
                "Business Finance",
                "Commercial Asset Finance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-gray-100"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "var(--primary)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="p-10 rounded-2xl"
            style={{ backgroundColor: "var(--bg-warm)" }}
          >
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#A09060" }}
            >
              Debt Management
            </p>
            <h3
              className="mb-4 text-xl font-semibold"
              style={{ color: "var(--primary)" }}
            >
              We assist with:
            </h3>
            <ul className="space-y-3">
              {[
                "Reviewing your debts",
                "Simplifying payments",
                "Reducing interest rates",
                "Creating repayment plans",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#5A5A5A" }}
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <p
              className="text-xs mt-6 pt-4 border-t border-gray-200"
              style={{ color: "#A09060" }}
            >
              Let us guide you to a debt-free future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-10 px-6 sm:px-10 lg:px-16 bg-white">
        <div
          className="max-w-7xl mx-auto rounded-2xl py-14 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <div>
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 48px)",
              }}
            >
              Ready to get started?
            </h2>
            <p className="text-white/60 text-sm max-w-sm">
              Book a free consultation and let us find the right solution for
              you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--bg-warm)" }}
            >
              WhatsApp us
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white/30 text-sm font-medium text-white rounded-full hover:border-white/70 transition-colors"
            >
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
