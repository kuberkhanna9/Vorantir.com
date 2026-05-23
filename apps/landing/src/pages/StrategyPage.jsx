import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function StrategyPage() {
  return (
    <PageWrapper
      tag="Division IV — Vorantir Strategy"
      title={<>Institutional transition and<br /><span className="italic text-black/50">systems strategy.</span></>}
      subtitle="Bespoke advisory partnerships and model-behavior strategic roadmaps for modern boards, executives, and high-growth brands."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Scenario Modeling</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Strategic Scenario Mapping</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We leverage predictive simulators to map how shifts in generative indexing standards, compliance guidelines, and competitive landscape models impact your enterprise’s visibility dominance.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Board Guidance</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Long-Horizon Readiness</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Advising executive leaders and risk compliance committees on aligning unstructured data assets, internal repositories, and sandbox architectures with SOC 2 and secure regional data compliance guidelines.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Strategy Parameters</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Regional data isolation consulting</li>
              <li>Generative risk landscape diagnostics</li>
              <li>Board-level strategic briefs</li>
              <li>Multi-decadal transition metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

