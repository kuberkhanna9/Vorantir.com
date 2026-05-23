import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function ResearchPage() {
  const initiatives = [
    {
      id: "01",
      title: "Ecosystem Citation Authority",
      desc: "An ongoing longitudinal study on how modern frontier models evaluate domain credibility and prioritize citation attribution within multi-source response pipelines."
    },
    {
      id: "02",
      title: "Cognitive Retrieval Dynamics",
      desc: "Mapping semantic cluster trajectories inside massive frontier embeddings to trace how corporate entities are indexed, grouped, and synthesized relative to competitors."
    },
    {
      id: "03",
      title: "Generative Search Latency",
      desc: "Deconstructs the divergence between user-initiated keyword intent and dynamic synthesized outcomes, providing a framework for long-term platform planning."
    },
    {
      id: "04",
      title: "Multi-Model Narrative Drift",
      desc: "Audits semantic representation consistency across varying model scales, highlighting where brand messaging decays under recursive retrieval pathways."
    }
  ];

  const publications = [
    {
      title: "Structural Citation Authority in Synthesized Environments",
      date: "April 2026",
      division: "Division III — Systems Research",
      author: "Dr. E. Vance, Prof. L. Steiner"
    },
    {
      title: "Decoupling Entity Representation from Direct Web Indices",
      date: "December 2025",
      division: "Division III — Systems Research",
      author: "J. Marceau, A. Petrov"
    },
    {
      title: "Evaluating Semantic Degradation Inside Enterprise Sandboxes",
      date: "August 2025",
      division: "Division III — Systems Research",
      author: "M. Thorne, Dr. E. Vance"
    }
  ];

  return (
    <PageWrapper
      tag="Division III — Systems Research"
      title={<>Frontier research for<br /><span className="italic text-black/50">systemic transition.</span></>}
      subtitle="Vorantir Research publishes strategic studies and designs analytical frameworks covering large-scale AI visibility, retrieval architecture, and semantic discovery networks."
    >
      <div className="border-t border-black/5 pt-16">
        <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-10">Active Initiatives</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {initiatives.map((init) => (
            <div key={init.id} className="rounded-[28px] bg-white border border-black/5 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-500">
              <div>
                <div className="text-[12px] font-mono text-black/30 mb-6">{init.id} // INITIATIVE</div>
                <h4 className="font-serif text-[24px] sm:text-[28px] tracking-[-0.03em] mb-4">{init.title}</h4>
                <p className="text-[15px] leading-7 text-black/55">{init.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-10">Recent Publications</h3>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="rounded-[24px] border border-black/5 bg-[#faf8f4] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#f6f2ea] transition-all duration-300">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[12px] text-black/40 uppercase tracking-wider">
                  <span>{pub.date}</span>
                  <span>•</span>
                  <span className="font-mono">{pub.division}</span>
                </div>
                <h4 className="font-serif text-[20px] sm:text-[24px] tracking-[-0.03em] text-black">{pub.title}</h4>
                <div className="text-[14px] text-black/50 italic">Authors: {pub.author}</div>
              </div>
              <button className="shrink-0 self-start md:self-auto rounded-full border border-black/10 px-6 py-2.5 text-[12px] hover:bg-black hover:text-white transition-colors duration-300">
                Access PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
