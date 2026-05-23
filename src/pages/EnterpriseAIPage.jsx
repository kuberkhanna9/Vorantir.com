import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function EnterpriseAIPage() {
  return (
    <PageWrapper
      tag="Solutions — Enterprise"
      title={<>Restructuring enterprise for<br /><span className="italic text-black/50">model integration.</span></>}
      subtitle="We architect indexing systems enabling forward-thinking organizations to adapt their enterprise data architectures for generative search discovery."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Corporate Knowledge Ingestion</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Enterprise Data Preparation</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Unstructured corporate data represents a sleeping resource. We restructure, sanitize, and format enterprise knowledge repositories, preparing them for highly secure, low-latency search integration inside global model indexes.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Compliance Barriers</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Enterprise Sandbox Boundaries</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Operating at institutional scales requires absolute isolation limits. Vorantir designs dedicated testing sandboxes mimicking public networks, protecting corporate files from public model leak vulnerabilities.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Solutions Components</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Corporate repository sanitation</li>
              <li>Secure retrieval sandbox setups</li>
              <li>SOC 2 compliance-barrier auditing</li>
              <li>Scale-level diagnostic dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
