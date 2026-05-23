import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function VisibilityIntelligencePage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities I"
      title={<>Ecosystem visibility<br /><span className="italic text-black/50">auditing.</span></>}
      subtitle="We track corporate presence and claim representation across the frontier AI model space, mapping how large language models characterize your organization."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">The Representation Index</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Algorithmic Representation</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Modern AI systems do not simply retrieve links; they synthesize claims. Our platform audits the representation patterns of your corporate identity, cataloging how your key competencies, capabilities, and executive announcements are stored within neural network weights.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Semantic Consistency</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Mitigating Narrative Decay</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Without active auditing, brand narratives decay when generated recursively. Vorantir ensures that model outputs maintain high alignment fidelity with your primary public announcements, identifying drifted characterizations.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Audit Parameters</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Neural weight representation mapping</li>
              <li>Recursive claim consistency monitoring</li>
              <li>LLM ecosystem search trajectory evaluations</li>
              <li>Enterprise search engine presence audits</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
