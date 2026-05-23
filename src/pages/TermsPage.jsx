import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function TermsPage() {
  return (
    <PageWrapper
      tag="Compliance — Terms of Use"
      title="Terms of Service"
      subtitle="Last updated: May 2026"
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl text-[15px] leading-8 text-black/60 space-y-6">
        <h4 className="font-serif text-[22px] text-black">1. Operational Scope</h4>
        <p>
          By utilizing the Vorantir Platform ("Services"), you agree to abide by these terms. Vorantir provides passive diagnostic data auditing and analytical reporting on enterprise presence in public cognitive architectures and vector search layouts.
        </p>
        <h4 className="font-serif text-[22px] text-black">2. Platform Boundaries</h4>
        <p>
          Users are prohibited from attempting to disrupt model sandboxes, reverse engineer vector indexing arrays, or execute denial of service vectors against monitoring nodes. Access is governed strictly by the corporate seat boundaries assigned during enterprise procurement.
        </p>
        <h4 className="font-serif text-[22px] text-black">3. Governing Jurisdiction</h4>
        <p>
          These Terms are governed strictly by regional enterprise laws. The exclusive place of jurisdiction for all disputes arising from platform usage shall be the courts of Dubai, UAE.
        </p>
      </div>
    </PageWrapper>
  );
}
