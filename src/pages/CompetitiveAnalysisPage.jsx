import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function CompetitiveAnalysisPage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities IV"
      title={<>Competitive semantic<br /><span className="italic text-black/50">mapping.</span></>}
      subtitle="Audit competitor share of voice, presence index, and representation authority within the generative engine space."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Share of Generative Voice</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Ecosystem Dominance</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Identify which brand entities are consistently referenced inside core industry query streams. Vorantir maps the presence share of your competitors, allowing you to discover narrative gaps and prioritize optimization.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Attribution Domination</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Citation Mapping</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Understand which authoritative websites, journals, or data pools competitors utilize to bolster their neural presence, mapping their strategic data integration vectors.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">SGV Analysis Indicators</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Competitor query-flow mapping</li>
              <li>Semantic gap diagnostic graphs</li>
              <li>Citation dominance evaluations</li>
              <li>Category share of voice indicators</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
