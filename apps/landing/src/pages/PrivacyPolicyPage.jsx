import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper
      tag="Compliance — Legal Framework"
      title="Privacy Policy"
      subtitle="Last updated: May 2026"
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl text-[15px] leading-8 text-black/60 space-y-6">
        <h4 className="font-serif text-[22px] text-black">1. Privacy Framework</h4>
        <p>
          This Policy describes how Vorantir ("we," "our," or "us") manages corporate data, query diagnostics, and platform usage metrics. We operate under strict compliance parameters aligned with regional digital regulations and secure enterprise frameworks.
        </p>
        <h4 className="font-serif text-[22px] text-black">2. Information Isolation</h4>
        <p>
          We do not sell, rent, or lease brand diagnostic history. All audit runs, prompt queries, and competitor diagnostic runs remain the strictly isolated intellectual property of the licensed enterprise client. No cross-client data analysis is permitted inside our retrieval sandboxes.
        </p>
        <h4 className="font-serif text-[22px] text-black">3. Data Residence</h4>
        <p>
          Consistent with our commitment to privacy, all platform usage databases, user profile databases, and tracking indices are located securely inside high-security enterprise clouds in our key operating regions in India and the United Arab Emirates.
        </p>
      </div>
    </PageWrapper>
  );
}

