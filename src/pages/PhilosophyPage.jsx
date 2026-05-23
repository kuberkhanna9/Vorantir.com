import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function PhilosophyPage() {
  return (
    <PageWrapper
      tag="Philosophy — Worldview"
      title={<>Designing the layer<br /><span className="italic text-black/50">for AI-first discovery.</span></>}
      subtitle="How users search, discover, and build trust is undergoing a generational shift. We build the infrastructure to navigate it."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">01 / The Shift</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">From Links to Synthesized Answers</h4>
            <p className="text-[15px] leading-7 text-black/55">
              For three decades, web discovery was defined by index queries and link clicks. Today, information is increasingly synthesized in real-time by LLMs and search engines. In this new paradigm, traditional SEO is giving way to AI engine optimization. Vorantir helps modern brands understand and shape how they are represented in these generative answers.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">02 / The AI-Native Thesis</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">The Interface Paradigm</h4>
            <p className="text-[15px] leading-7 text-black/55">
              The future belongs to companies that build for the next generation of user interfaces. Rather than retrofitting classical databases with simple semantic search, forward-thinking organizations treat model-driven discovery as a core technical priority—structuring their unstructured data and public narratives to be perfectly understood by frontier models.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">03 / Precision Telemetry</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Real-Time System Visibility</h4>
            <p className="text-[15px] leading-7 text-black/55">
              In model-driven ecosystems, visibility is not static. It shifts dynamically with fine-tuning, retrieval pipelines, and recursive training. Understanding where your brand dominates or decays requires precision telemetry—analyzing prompt references, source citations, and narrative drift in real-time across frontier model networks.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">04 / Focused Leverage</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">High Leverage, Small Teams</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We believe in the power of highly focused, technically sharp teams. By focusing on core infrastructure rather than building bloated software layers, we deliver outsized leverage for our clients. We build tools that are technically precise, visually minimal, and highly strategic.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Core Convictions</h4>
            <div className="space-y-3 text-[14px] text-black/60">
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>From Search to Synthesis</span>
                <span className="font-mono">01</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>Model-first visibility</span>
                <span className="font-mono">02</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-2">
                <span>High-leverage engineering</span>
                <span className="font-mono">03</span>
              </div>
              <div className="flex justify-between">
                <span>Thoughtful, long-term focus</span>
                <span className="font-mono">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
