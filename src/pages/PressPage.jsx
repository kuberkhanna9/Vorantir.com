import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function PressPage() {
  const navigate = useNavigate();

  const releases = [
    {
      category: "INSIGHT",
      title: "Why Generative Engine Optimisation is replacing traditional SEO",
      date: "May 12, 2026",
      desc: "Search behavior is shifting from links to synthesized answers. As ChatGPT, Gemini, Claude, and Perplexity become discovery layers, brands must optimize not just for rankings — but for interpretation, citation, and recommendation inside AI-generated responses.",
      target: "/press-article-1"
    },
    {
      category: "RESEARCH",
      title: "AI agents will become the next shopping interface",
      date: "February 18, 2026",
      desc: "Consumers are beginning to delegate product discovery and purchase decisions to AI systems. Visibility inside recommendation engines, conversational agents, and autonomous shopping workflows may soon matter more than traditional advertising placement.",
      target: "/press-article-2"
    },
    {
      category: "ANALYSIS",
      title: "The new battleground is AI visibility, not search rankings",
      date: "October 05, 2025",
      desc: "Modern AI systems build answers by aggregating entities, sources, citations, and semantic trust signals. Companies that understand how frontier models interpret their brand will shape market perception long before competitors recognize the shift.",
      target: "/press-article-3"
    }
  ];

  return (
    <PageWrapper
      tag="INSIGHTS & RESEARCH"
      title={<>Industry essays &<br /><span className="italic text-black/50">strategic research.</span></>}
      subtitle="Read strategic analyses, founder insights, and industry notes on Generative Engine Optimization (GEO), AI recommendation systems, and visibility inside frontier models."
    >
      <div className="grid lg:grid-cols-12 gap-16 border-t border-black/5 pt-16">
        <div className="lg:col-span-8 space-y-8">
          {releases.map((rel, index) => (
            <div
              key={index}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
                navigate(rel.target);
              }}
              className="group rounded-[28px] bg-white border border-black/5 p-8 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-500 text-left"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-black/35 font-mono">{rel.category}</span>
                <span className="text-[12px] text-black/40 font-mono">{rel.date}</span>
              </div>
              <h4 className="font-serif text-[22px] sm:text-[26px] tracking-[-0.03em] mb-4 text-black group-hover:text-black/70 transition-colors">{rel.title}</h4>
              <p className="text-[15px] leading-7 text-black/55 mb-6">{rel.desc}</p>
              <span className="text-[12px] tracking-[0.1em] uppercase text-black font-semibold group-hover:underline">Read article →</span>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] h-fit text-left">
          <h4 className="font-serif text-[22px] mb-4">Strategic Research</h4>
          <p className="text-[14px] leading-6 text-black/60 mb-6">
            For collaborations, research inquiries, or custom brand diagnostics, connect with our strategy lead directly:
          </p>
          <div className="font-mono text-[13px] text-black font-semibold">
            press@vorantir.com
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
