import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function BrandVisibilityPage() {
  return (
    <PageWrapper
      tag="Solutions — Brands"
      title={<>Preserving narrative integrity in<br /><span className="italic text-black/50">search transition.</span></>}
      subtitle="We advise premium brands and forward-thinking companies on safeguarding their narrative reputation as keyword search transitions into synthesized answers."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Narrative Custody</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Maintaining Definition Rights</h4>
            <p className="text-[15px] leading-7 text-black/55">
              As AI engines curate responses, standard corporate marketing copy fades. We define, map, and secure the baseline metadata, technical specifications, and key publications to preserve absolute authority over how you are described.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Generative Strategy</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">GEO Optimization Frameworks</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We apply advanced mathematical frameworks, optimizing primary domain nodes to ensure high-priority ranking, dynamic keyword associations, and zero attribution losses within modern AI synthesis clusters.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Brand Strategy Pillars</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Primary description optimization</li>
              <li>GEO attribution frameworks</li>
              <li>Category presence optimization</li>
              <li>Recursive citation auditing</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
