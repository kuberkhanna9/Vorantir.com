import React from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function StatusPage() {
  const nodes = [
    { name: "Telemetry Monitoring Node (Dubai)", status: "Operational", ping: "8ms" },
    { name: "Retrieval Pipeline Cluster (Mumbai)", status: "Operational", ping: "14ms" },
    { name: "Citation Mapping Database (Asia-South)", status: "Operational", ping: "22ms" },
    { name: "Semantic Analysis Engine (Dubai-Central)", status: "Operational", ping: "5ms" }
  ];

  return (
    <PageWrapper
      tag="Operations — System Status"
      title={<>All systems<br /><span className="italic text-black/50">fully operational.</span></>}
      subtitle="Vorantir maintains continuous, real-time tracking across global LLM retrieval clusters. Historical uptime over the past 365 days is 99.98%."
    >
      <div className="border-t border-black/5 pt-16">
        <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] mb-12">
          <div className="flex items-center gap-4 text-[14px]">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-black">Main System Uptime: 99.98%</span>
            <span className="text-black/30">•</span>
            <span className="text-black/50">All 4 global nodes operational</span>
          </div>
        </div>

        <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-6">Operational Clusters</h3>
        <div className="space-y-4">
          {nodes.map((node, index) => (
            <div key={index} className="rounded-2xl bg-white border border-black/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[15px] font-medium text-black">{node.name}</span>
              </div>
              <div className="flex items-center gap-6 text-[13px] text-black/60">
                <span className="font-mono">{node.ping} latency</span>
                <span className="px-3.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-medium uppercase font-mono tracking-wider">
                  {node.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
