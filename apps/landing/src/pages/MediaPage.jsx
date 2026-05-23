import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function MediaPage() {
  return (
    <PageWrapper
      tag="Division III — Vorantir Media"
      title={<>Strategic media and<br /><span className="italic text-black/50">communication networks.</span></>}
      subtitle="Publishing corporate narratives and structuring digital representations optimized specifically for model-driven citation networks."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Narrative Authority</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Primary Source Structuring</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We design and publish narrative matrices that establish solid source attribution, preventing generative networks from misrepresenting or diluting corporate metadata.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Informational Velocity</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Indexing Agility</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensuring critical press releases, financial data, and board communications are packaged in highly dense formats to enable near-instant model indexing, updates, and ingestion.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Media Frameworks</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Primary source metadata locking</li>
              <li>Neural press release distribution</li>
              <li>Dynamic corporate indexes publishing</li>
              <li>Attribution consistency monitors</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

