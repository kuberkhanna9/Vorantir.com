import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function SourceMappingPage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities II"
      title={<>Attribution node<br /><span className="italic text-black/50">optimization.</span></>}
      subtitle="Map and reinforce the authoritative source nodes that frontier models parse during retrieval augmentation pipelines."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Retrieval Authority</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Document Fragment Prioritization</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Retrieval-augmented generation selects document fragments based on semantic density and mathematical cosine similarity. We structure your primary domain nodes so neural indexes ingestion programs easily map and digest the key data.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Citation Fidelity</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Attribution Accuracy</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensure synthesized output tokens link directly back to your secure, primary corporate nodes, protecting your domain from representation hijack or attribution leakage by third-party scraping aggregators.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Ingestion Benchmarks</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Semantic density data formatting</li>
              <li>Retrieval vector priority audits</li>
              <li>Dynamic source-node linking graphs</li>
              <li>Entity authority preservation indices</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
