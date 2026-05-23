import React from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function CompanyPage() {
  return (
    <PageWrapper
      tag="Company — About Us"
      title={<>Building the discovery<br /><span className="italic text-black/50">layer of the next web.</span></>}
      subtitle="Vorantir is a founder-led technology company based in India and the UAE. We build precision telemetry and visibility platforms for the AI-native era."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">01 / The Mission</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Making AI Discovery Legible</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Vorantir was founded to solve a single, critical challenge: making generative engine representation transparent. As cognitive models become the primary gateway to the web, we build the measurement and visibility tools that modern companies need to navigate synthesized discovery with total clarity.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">02 / Intellectual Density</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Focused Expertise</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We are a small, collaborative team of engineers, systems designers, and researchers. We prize depth and speed over sheer organizational scale. By remaining focused, we maintain the agility needed to ship rapidly in a fast-evolving technical landscape.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">03 / Long-Term Focus</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Designed for Continuity</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We are backed by long-term partners who share our commitment to deep technical excellence. This structure shields our research and engineering decisions from short-term public market pressures, enabling us to build stable, reliable infrastructure that modern enterprises can trust.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Team Locations</h4>
            <div className="space-y-3 text-[14px] text-black/60">
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>India</span>
                <span className="font-mono">Product & Strategy</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>United Arab Emirates</span>
                <span className="font-mono">Partnerships & Expansion</span>
              </div>
              <div className="flex justify-between">
                <span>Distributed staff</span>
                <span className="font-mono">Remote Operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

