import PageHero from "@/components/shared/PageHero";

export const metadata = { title: "Terms of Service | Krol Finance" };

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Krol Finance website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Services",
    body: "Krol Finance provides financial advisory, financing facilitation, debt management, tax compliance, and bookkeeping services. All services are subject to a separate engagement letter or service agreement which will outline the specific scope, fees, and terms applicable to your engagement.",
  },
  {
    title: "No Financial Advice Disclaimer",
    body: "Information provided on this website is for general informational purposes only and does not constitute professional financial advice. Always seek the advice of a qualified financial professional for your specific situation before making any financial decisions.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for providing accurate and complete information required for us to deliver our services. Krol Finance accepts no liability for outcomes resulting from incomplete or inaccurate information provided by the client.",
  },
  {
    title: "Limitation of Liability",
    body: "Krol Finance shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website, to the fullest extent permitted by South African law.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the jurisdiction of the South African courts.",
  },
  {
    title: "Changes to Terms",
    body: "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: April 2026"
      />
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2
                className="text-base font-bold mb-3"
                style={{ color: "var(--primary)" }}
              >
                {s.title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5A5A5A" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
