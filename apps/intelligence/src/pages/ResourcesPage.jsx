import React, { useState } from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function ResourcesPage() {
  const [activeChapter, setActiveChapter] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);

  const chapters = {
    overview: {
      title: "Platform Overview",
      content: (
        <div className="space-y-6">
          <p>
            The Vorantir Intelligence Platform provides real-time narrative presence tracking, entity reference pathways auditing, and citation authority mappings inside cognitive systems (large language models, vector indices, and answer synthesis networks).
          </p>
          <p>
            As traditional web search engine click-through optimization declines, synthesized answer engines representing over 90% of strategic search queries now parse primary source citation frameworks. Vorantir maps this transition.
          </p>
          <div className="rounded-[24px] bg-[#faf8f4] border border-black/5 p-6 mt-8">
            <h5 className="font-serif text-[18px] mb-3">System Framework Pillars</h5>
            <ul className="list-disc pl-5 space-y-2 text-[14px] text-black/60">
              <li><strong>Continuous Discovery Audit</strong>: Trace semantic associations live.</li>
              <li><strong>Attribution Node Resolution</strong>: Check what domain nodes are cited.</li>
              <li><strong>Competitive Narrative Mapping</strong>: Spot competitor domination vectors.</li>
            </ul>
          </div>
        </div>
      )
    },
    discovery: {
      title: "How AI Discovery Works",
      content: (
        <div className="space-y-6">
          <p>
            Frontier generative AI models compile information differently than standard keyword indexing engines:
          </p>
          <ol className="list-decimal pl-5 space-y-4 text-[15px]">
            <li>
              <strong>Retrieval Augmentation</strong>: A prompt maps directly to a high-dimensional vector space, selecting highly associated corporate semantic nodes.
            </li>
            <li>
              <strong>Context Assembly</strong>: Selected document fragments are loaded into a temporary memory window (context boundary).
            </li>
            <li>
              <strong>Answer Synthesis</strong>: The model outputs structured, synthesized claims, appending citation tokens pointing toward authoritative domain structures.
            </li>
          </ol>
        </div>
      )
    },
    metrics: {
      title: "AI Visibility Metrics",
      content: (
        <div className="space-y-6">
          <p>
            Vorantir defines three core institutional diagnostic variables to measure enterprise presence within cognitive systems:
          </p>
          <div className="space-y-6 mt-8">
            <div className="pb-4 border-b border-black/5">
              <h5 className="font-medium text-black">1. Entity Presence Index (EPI)</h5>
              <p className="text-[14px] text-black/60 mt-1">Measures the frequency with which your brand entities are compiled as primary answers in relevant prompt pathways.</p>
            </div>
            <div className="pb-4 border-b border-black/5">
              <h5 className="font-medium text-black">2. Citation Authority Fidelity (CAF)</h5>
              <p className="text-[14px] text-black/60 mt-1">Tracks whether synthesized citation tokens link back to your primary domain nodes, preserving traffic and attribution.</p>
            </div>
            <div>
              <h5 className="font-medium text-black">3. Narrative Drift Variance (NDV)</h5>
              <p className="text-[14px] text-black/60 mt-1">Analyzes deviations in brand characterization across model revisions (OpenAI, Anthropic, Gemini, Perplexity), preventing misrepresentation.</p>
            </div>
          </div>
        </div>
      )
    },
    faq: {
      title: "Platform FAQ",
      content: (
        <div className="space-y-4">
          {[
            {
              q: "What is Generative Engine Optimization (GEO)?",
              a: "GEO refers to the systematic structure of enterprise data, citation networks, and primary source authority to ensure accurate and premium brand representation within synthesized model answers."
            },
            {
              q: "How does Vorantir monitor private sandboxed models?",
              a: "Vorantir utilizes localized query matrices and standardized testing environments mimicking modern enterprise-grade custom models to audit entity perceptions accurately."
            },
            {
              q: "Is regional data residency guaranteed?",
              a: "Yes. All operational databases, semantic indexes, and tracking history are resident within secure, isolated enterprise clouds in our active operating regions, fully protecting brand diagnostic history."
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-black/5 bg-[#faf8f4] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-serif text-[16px] sm:text-[18px] focus:outline-none"
              >
                <span>{item.q}</span>
                <span className="text-[14px]">{openFaq === idx ? "✕" : "▼"}</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-[14px] leading-6 text-black/60 border-t border-black/5 pt-4 bg-white/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <PageWrapper
      tag="Documentation — Technical System"
      title={<>System overview &<br /><span className="italic text-black/50">documentation.</span></>}
      subtitle="Understand how Generative Engine Optimization (GEO), semantic visibility metrics, and active LLM monitoring compose the new standard in enterprise visibility."
    >
      <div className="grid lg:grid-cols-12 gap-10 border-t border-black/5 pt-16">
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 space-y-2">
          {Object.keys(chapters).map((key) => (
            <button
              key={key}
              onClick={() => setActiveChapter(key)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-[14px] font-medium tracking-wide uppercase transition-all duration-300 text-left ${activeChapter === key
                ? "bg-black text-white font-semibold"
                : "bg-white/40 text-black/60 hover:bg-white/70"
                }`}
            >
              <span>{chapters[key].title}</span>
              <span className="text-[10px]">→</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="lg:col-span-8 rounded-[32px] bg-white border border-black/5 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] min-h-[400px]">
          <h3 className="font-serif text-[28px] sm:text-[36px] tracking-[-0.03em] mb-6">
            {chapters[activeChapter].title}
          </h3>
          <div className="text-[15px] leading-8 text-black/55">
            {chapters[activeChapter].content}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
