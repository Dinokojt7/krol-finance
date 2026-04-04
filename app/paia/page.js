import PageHero from "@/components/shared/PageHero";

export const metadata = { title: "PAIA Manual | Krol Finance" };

export default function PAIAPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="PAIA Manual"
        subtitle="Promotion of Access to Information Act — Section 51 Manual"
      />
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            {
              title: "Introduction",
              body: "This manual is published in terms of Section 51 of the Promotion of Access to Information Act, 2 of 2000 (PAIA). The purpose of PAIA is to give effect to the constitutional right of access to any information held by a private body that is required for the exercise or protection of any rights.",
            },
            {
              title: "Information Officer",
              body: "Name: Rudo Mphofu\nOrganisation: Krol Finance\nAddress: 7625 Korong Street, Soshanguve, South Africa\nEmail: ukwenzamashiane@gmail.com\nPhone: 079 459 7281",
            },
            {
              title: "Records Available Without Request",
              body: "Krol Finance makes the following information available without requiring a formal PAIA request: service descriptions, contact information, and general company information as published on our website.",
            },
            {
              title: "Records Available on Request",
              body: "All other records held by Krol Finance may be requested in accordance with PAIA. Requests must be submitted in writing using the prescribed Form C, accompanied by proof of identity and the prescribed fee where applicable.",
            },
            {
              title: "How to Submit a Request",
              body: "Submit your written request via email to ukwenzamashiane@gmail.com. Krol Finance will respond within 30 days of receiving a complete request as required by PAIA.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h2
                className="text-base font-bold mb-3"
                style={{ color: "var(--primary)" }}
              >
                {s.title}
              </h2>
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
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
