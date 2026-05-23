import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function StrategicIntelligencePage() {
  return (
    <PageWrapper
      tag="Solutions — Advisory"
      title={<>Systemic intelligence for the<br /><span className="italic text-black/50">executive suite.</span></>}
      subtitle="Strategic advisory partnerships and bespoke threat evaluations for Chief Risk Officers, C-Suite leaders, and corporate boards."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Advisory Briefs</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Executive Briefings & Analytics</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Bespoke, human-reviewed diagnostic metrics for executive boards. We translate high-dimensional model perceptions and drift anomalies into concise strategic risks, preparing executives for algorithmically driven public evaluations.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Algorithmic Risk Governance</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Compliance & Security Alignment</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensure that your corporate representation patterns align strictly with regional data privacy parameters, operational risk mitigation rules, and regional commercial standards.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Board Level Advisory</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Board-level risk reports</li>
              <li>Algorithmic bias threat maps</li>
              <li>Corporate governance alignments</li>
              <li>Strategic risk assessments</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
