import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function TrustCenterPage() {
  const pillars = [
    {
      title: "Data Privacy",
      desc: "We treat data privacy as a foundational right. All monitoring parameters, diagnostic runs, and brand tracking indices reside exclusively within physically isolated, secure enterprise cloud clusters in our active operating regions."
    },
    {
      title: "Encryption Architecture",
      desc: "All dynamic pipeline transmissions and diagnostic metrics use TLS 1.3 encryption in transit and AES-256 for resting database partitions. Enterprise API credentials remain completely private."
    },
    {
      title: "Sandbox Safety",
      desc: "Vorantir acts as a strictly passive, read-only diagnostic system. We never write back to or compromise standard model configurations, preserving model weights integrity."
    },
    {
      title: "Compliance Standard",
      desc: "Fully aligned with regional compliance frameworks, SOC 2 Type II audit controls, and secure enterprise data isolation standards."
    }
  ];

  return (
    <PageWrapper
      tag="Compliance — Operational Trust"
      title={<>Institutional-grade<br /><span className="italic text-black/50">trust & security.</span></>}
      subtitle="Vorantir is engineered for modern organizations operating under strict compliance frameworks. We treat data privacy as a foundational right."
    >
      <div className="border-t border-black/5 pt-16">
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {pillars.map((pil, index) => (
            <div key={index} className="rounded-[28px] bg-white border border-black/5 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <h4 className="font-serif text-[24px] tracking-[-0.02em] mb-4">{pil.title}</h4>
              <p className="text-[15px] leading-7 text-black/55">{pil.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] bg-[#faf8f4] border border-black/5 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-[24px] mb-4">Request Trust Verification</h4>
          <p className="text-[15px] leading-7 text-black/55 mb-6">
            We provide full SOC 2 compliance reports, architecture documents, and data isolation parameters to validated chief information security officers.
          </p>
          <button className="rounded-full bg-black text-white px-8 py-3 text-[12px] hover:opacity-90 transition-opacity">
            Request Audits
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

