import PageHero from "@/components/shared/PageHero";

export const metadata = { title: "Privacy Policy | Krol Finance" };

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect personal information you provide directly to us, such as your name, email address, phone number, and financial details necessary to deliver our services. We may also collect information automatically when you use our website, including IP address and browser type.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to provide, maintain, and improve our services, respond to your enquiries, send you relevant updates about our services, and comply with legal obligations under South African law including POPIA.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services (e.g., engaging with financial institutions on your behalf with your knowledge).",
  },
  {
    title: "Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
  },
  {
    title: "Your Rights (POPIA)",
    body: "Under the Protection of Personal Information Act (POPIA), you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at ukwenzamashiane@gmail.com.",
  },
  {
    title: "Contact",
    body: "If you have questions about this Privacy Policy, please contact us at ukwenzamashiane@gmail.com or 079 459 7281.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
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
