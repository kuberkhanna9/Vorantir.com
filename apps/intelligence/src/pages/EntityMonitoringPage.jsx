import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function EntityMonitoringPage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities III"
      title={<>Continuous threat vector<br /><span className="italic text-black/50">monitoring.</span></>}
      subtitle="Secure corporate entities, products, and executives from semantic decay, hallucinations, and negative association mappings."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Hallucination Detection</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Algorithmic Risk Governance</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Neural network models are inherently probabilistic, causing them to hallucinate fictitious claims or align entities with false narratives. Vorantir actively tracks systemic prompt flows to discover and flag algorithmic anomalies.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Executive Brand Safety</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Leadership Protection</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We monitor executive names, critical brand trademarks, and public leadership disclosures across public model iterations to prevent narrative degradation or negative context association.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Threat Protection parameters</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Active hallucinations detection algorithms</li>
              <li>Recursive brand trademark monitoring</li>
              <li>Context-drift prevention parameters</li>
              <li>Threat vulnerability indicators</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
