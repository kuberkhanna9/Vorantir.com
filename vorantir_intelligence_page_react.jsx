import { useEffect, useState } from "react";
import VorantirLandingPage from "./vorantir_enterprise_landing_page_react.jsx";
import mossyHills from "./mossy_hills_terrain.png";
import SignalPage from "./SignalPage.jsx";

const llmLogos = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Anthropic",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
  },
  {
    name: "Gemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg",
  },
  {
    name: "Perplexity",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/perplexity.png",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
  },
];

// Reusable quiet-luxury Page Wrapper for the light theme pages
function PageWrapper({ title, tag, subtitle, children }) {
  return (
    <div className="bg-[#f3efe8] text-[#11110f] min-h-screen pt-36 pb-28 relative overflow-hidden [perspective:1800px]">
      {/* Background Atmosphere Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-black/5 opacity-30 animate-[spin_100s_linear_infinite]" />
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[1500px] h-[1500px] rounded-full border border-black/[0.02] animate-[spin_160s_linear_infinite_reverse]" />

        {/* Ambient floating elements */}
        <div className="absolute top-[20%] left-[8%] w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_8px_rgba(255,255,255,0.5),0_15px_45px_rgba(0,0,0,0.04)] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[25%] right-[8%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_8px_rgba(255,255,255,0.4),0_20px_50px_rgba(0,0,0,0.05)] animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mb-16 sm:mb-20">
          {tag && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/40 backdrop-blur-md text-[11px] tracking-[0.2em] uppercase text-black/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              {tag}
            </div>
          )}

          <h1 className="font-serif text-[38px] sm:text-[62px] lg:text-[76px] leading-[1.02] tracking-[-0.04em] mb-8">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[16px] sm:text-[20px] leading-8 sm:leading-9 text-black/60 max-w-3xl font-light">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}

// 0. Philosophy Page
function PhilosophyPage() {
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

// 0.2 Signal Page (Strategic Growth and Influence Division)
// Replaced with external modular SignalPage.jsx


// 0.3 Media Page
function MediaPage() {
  return (
    <PageWrapper
      tag="Division III — Vorantir Media"
      title={<>Strategic media and<br /><span className="italic text-black/50">communication networks.</span></>}
      subtitle="Publishing corporate narratives and structuring digital representations optimized specifically for model-driven citation networks."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Narrative Authority</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Primary Source Structuring</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We design and publish narrative matrices that establish solid source attribution, preventing generative networks from misrepresenting or diluting corporate metadata.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Informational Velocity</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Indexing Agility</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensuring critical press releases, financial data, and board communications are packaged in highly dense formats to enable near-instant model indexing, updates, and ingestion.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Media Frameworks</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Primary source metadata locking</li>
              <li>Neural press release distribution</li>
              <li>Dynamic corporate indexes publishing</li>
              <li>Attribution consistency monitors</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 0.4 Strategy Page
function StrategyPage() {
  return (
    <PageWrapper
      tag="Division IV — Vorantir Strategy"
      title={<>Institutional transition and<br /><span className="italic text-black/50">systems strategy.</span></>}
      subtitle="Bespoke advisory partnerships and model-behavior strategic roadmaps for modern boards, executives, and high-growth brands."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Scenario Modeling</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Strategic Scenario Mapping</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We leverage predictive simulators to map how shifts in generative indexing standards, compliance guidelines, and competitive landscape models impact your enterprise’s visibility dominance.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Board Guidance</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Long-Horizon Readiness</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Advising executive leaders and risk compliance committees on aligning unstructured data assets, internal repositories, and sandbox architectures with SOC 2 and secure regional data compliance guidelines.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Strategy Parameters</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Regional data isolation consulting</li>
              <li>Generative risk landscape diagnostics</li>
              <li>Board-level strategic briefs</li>
              <li>Multi-decadal transition metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 1. Company Page
function CompanyPage() {
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

// 2. Research Page
function ResearchPage() {
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

// 3. Careers Page
function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    url: "",
    location: "",
    interest: "",
    message: ""
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setErrors((prev) => ({ ...prev, resume: "Only PDF files are supported." }));
      setResume(null);
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.resume;
        return next;
      });
      setResume(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    if (!form.interest) nextErrors.interest = "Please select an area of interest.";
    if (!resume) nextErrors.resume = "Please upload your resume (PDF only).";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      url: "",
      location: "",
      interest: "",
      message: ""
    });
    setResume(null);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <PageWrapper
      tag="JOIN VORANTIR"
      title={<>Work on the future<br /><span className="italic text-black/50">of AI visibility.</span></>}
      subtitle="We’re building systems that help brands understand and shape how they appear across AI ecosystems. If you’re thoughtful, ambitious, and deeply curious about technology, strategy, or design — we’d love to hear from you."
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl">
        {submitted ? (
          <div className="rounded-[28px] bg-[#faf8f4] border border-black/5 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-left">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-6">✓</div>
            <h3 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Application Sent</h3>
            <p className="text-[15px] leading-7 text-black/55 mb-6">
              Thank you for initiating your application. Our team reviews all inquiries individually and will contact you directly if there is a potential alignment.
            </p>
            <button
              onClick={resetForm}
              className="rounded-full border border-black/10 px-6 py-2.5 text-[12px] hover:bg-black hover:text-white transition-colors duration-300"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-2xl border ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-black/10 focus:border-black"} bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none transition-colors`}
                  placeholder="e.g. Jean Marceau"
                />
                {errors.name && <span className="text-[12px] text-red-500/80 mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full rounded-2xl border ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-black/10 focus:border-black"} bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none transition-colors`}
                  placeholder="e.g. jean@marceau.com"
                />
                {errors.email && <span className="text-[12px] text-red-500/80 mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">LinkedIn / Portfolio URL</label>
                <input
                  type="url"
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="e.g. linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="e.g. Dubai, UAE or Bengaluru, India"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Area of Interest</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className={`w-full rounded-2xl border ${errors.interest ? "border-red-500/50 focus:border-red-500" : "border-black/10 focus:border-black"} bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none transition-colors`}
                >
                  <option value="">Select an area...</option>
                  <option value="AI & Engineering">AI & Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Research">Research</option>
                  <option value="Media">Media</option>
                  <option value="Partnerships">Partnerships</option>
                  <option value="Operations">Operations</option>
                  <option value="Other">Other</option>
                </select>
                {errors.interest && <span className="text-[12px] text-red-500/80 mt-1 block">{errors.interest}</span>}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Resume Upload (PDF only)</label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative rounded-2xl border-2 border-dashed ${isDragOver ? "border-black bg-black/5" : errors.resume ? "border-red-500/30 bg-red-50/10" : "border-black/10 bg-white/40 hover:border-black/20"} px-5 py-3.5 flex items-center justify-between text-[13px] transition-all duration-300 min-h-[54px]`}
                >
                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={(e) => handleFileChange(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  {resume ? (
                    <div className="flex items-center justify-between w-full z-10">
                      <span className="font-mono text-black truncate max-w-[200px]">📄 {resume.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setResume(null);
                        }}
                        className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100/50 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full text-black/40 pointer-events-none">
                      <span>Click to upload or drag PDF here</span>
                      <span className="font-mono text-[11px]">.PDF only</span>
                    </div>
                  )}
                </div>
                {errors.resume && <span className="text-[12px] text-red-500/80 mt-1 block">{errors.resume}</span>}
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Short Message</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                placeholder="Tell us about a complex project you built or a problem you are currently thinking about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-full bg-black text-white px-8 py-3.5 text-[13px] shadow-[0_15px_40px_rgba(0,0,0,0.14)] hover:opacity-90 transition-opacity duration-300 font-medium"
            >
              Send Application
            </button>
          </form>
        )}
      </div>
    </PageWrapper>
  );
}

// 4. Contact Page
function ContactPage() {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "enterprise", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <PageWrapper
      tag="Contact — Connect"
      title={<>Start a<br /><span className="italic text-black/50">conversation.</span></>}
      subtitle="We partner with industry leaders, premium brands, and advanced software platforms. Let us know how we can collaborate."
    >
      <div className="grid lg:grid-cols-12 gap-16 border-t border-black/5 pt-16">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-[28px] bg-[#faf8f4] border border-black/5 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-6">✓</div>
              <h3 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Inquiry Received</h3>
              <p className="text-[15px] leading-7 text-black/55 mb-6">
                Thank you for your transmission. A member of our team will review your inquiry and respond within two business days.
              </p>
              <button
                onClick={() => { setForm({ name: "", org: "", email: "", type: "enterprise", msg: "" }); setSubmitted(false); }}
                className="rounded-full border border-black/10 px-6 py-2.5 text-[12px] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g. Jean Marceau"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Organization</label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g. Marceau Holdings"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="e.g. j.marceau@marceau.com"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Inquiry Focus</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="enterprise">Enterprise Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="advisory">Strategic Advisory</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Message Description</label>
                <textarea
                  rows="4"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Please describe your enterprise's operational model..."
                ></textarea>
              </div>

              <button type="submit" className="rounded-full bg-black text-white px-8 py-3.5 text-[13px] shadow-[0_15px_40px_rgba(0,0,0,0.14)] hover:opacity-90 transition-opacity">
                Transmit inquiry
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h4 className="font-serif text-[22px] tracking-[-0.02em] mb-4">Direct Channels</h4>
            <div className="space-y-2 text-[14px] text-black/60">
              <p>Strategic Partnerships: <span className="font-mono text-black font-medium">partnerships@vorantir.com</span></p>
              <p>General Inquiries: <span className="font-mono text-black font-medium">hello@vorantir.com</span></p>
              <p>Press & Media Relations: <span className="font-mono text-black font-medium">press@vorantir.com</span></p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-[22px] tracking-[-0.02em] mb-4">Operating Regions</h4>
            <div className="space-y-4 text-[14px] text-black/60 font-light">
              <div>
                <p className="font-medium text-black">India</p>
                <p>Product, strategy, and operational development</p>
              </div>
              <div>
                <p className="font-medium text-black">United Arab Emirates</p>
                <p>Partnerships, business development, and regional expansion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 5. Documentation / Resources Page
function ResourcesPage() {
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

// 6. Trust Center Page
function TrustCenterPage() {
  const pillars = [
    {
      title: "Data Privacy",
      desc: "We treat data privacy as a foundational right. All monitoring parameters, diagnostic runs, and brand tracking indices reside exclusively within physically isolated, secure enterprise cloud clusters in our active operating regions."
    },
    {
      title: "Encryption Architecture",
      desc: "All dynamic pipeline transmissions and diagnostic metrics use TLS 1.3 encryption in transit and AES-256 for resting database partitions. Enterprise API credentials remain completely private."
    },
    {
      title: "Sandbox Safety",
      desc: "Vorantir acts as a strictly passive, read-only diagnostic system. We never write back to or compromise standard model configurations, preserving model weights integrity."
    },
    {
      title: "Compliance Standard",
      desc: "Fully aligned with regional compliance frameworks, SOC 2 Type II audit controls, and secure enterprise data isolation standards."
    }
  ];

  return (
    <PageWrapper
      tag="Compliance — Operational Trust"
      title={<>Institutional-grade<br /><span className="italic text-black/50">trust & security.</span></>}
      subtitle="Vorantir is engineered for modern organizations operating under strict compliance frameworks. We treat data privacy as a foundational right."
    >
      <div className="border-t border-black/5 pt-16">
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {pillars.map((pil, index) => (
            <div key={index} className="rounded-[28px] bg-white border border-black/5 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <h4 className="font-serif text-[24px] tracking-[-0.02em] mb-4">{pil.title}</h4>
              <p className="text-[15px] leading-7 text-black/55">{pil.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] bg-[#faf8f4] border border-black/5 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-[24px] mb-4">Request Trust Verification</h4>
          <p className="text-[15px] leading-7 text-black/55 mb-6">
            We provide full SOC 2 compliance reports, architecture documents, and data isolation parameters to validated chief information security officers.
          </p>
          <button className="rounded-full bg-black text-white px-8 py-3 text-[12px] hover:opacity-90 transition-opacity">
            Request Audits
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

// 7. Privacy Policy Page
function PrivacyPolicyPage() {
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

// 8. Terms of Service Page
function TermsPage() {
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

// 9. Status Page
function StatusPage() {
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

// 10.1 Press Article 1
function PressArticle1Page({ onNavigate }) {
  return (
    <PageWrapper
      tag="Insight — Generative Engine Optimisation"
      title={<>Why GEO is replacing<br /><span className="italic text-black/50">traditional SEO.</span></>}
      subtitle="Search behavior is shifting from links to synthesized answers. As ChatGPT, Gemini, Claude, and Perplexity become discovery layers, brands must optimize for interpretation and recommendation."
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl text-left">
        <button
          onClick={() => onNavigate("press")}
          className="text-[12px] tracking-[0.15em] uppercase text-black/45 hover:text-black transition-colors font-mono mb-8 block"
        >
          ← Back to insights
        </button>

        <div className="space-y-8 text-[15px] sm:text-[16px] leading-8 text-black/60">
          <p className="font-serif text-[20px] sm:text-[24px] leading-9 text-black tracking-[-0.02em] italic">
            "The fundamental architecture of human discovery is changing. We are moving from a web of indexing to a web of synthesis."
          </p>

          <p>
            For three decades, search engine optimization (SEO) followed a predictable playbook: keywords, backlink counts, and metadata tags designed to rank higher on pages of blue links. But as frontier LLMs take center stage, traditional search optimization is facing a permanent paradigm shift.
          </p>

          <h4 className="font-serif text-[22px] text-black">The Paradigm Shift from Links to Synthesis</h4>
          <p>
            In the new era, users rarely seek a catalog of links. Instead, they interact with conversational engines like ChatGPT, Google Gemini, Claude, and Perplexity to receive direct, consolidated answers. When a model answers a query, it reads across a semantic index, selects trusted entities, compiles references, and outputs a single cohesive summary.
          </p>
          <p>
            This is where <strong>Generative Engine Optimization (GEO)</strong> becomes essential. In a world of generative answers, being ranked "number one" matters far less than being recognized, trusted, and cited as a credible source by the underlying model's neural network.
          </p>

          <h4 className="font-serif text-[22px] text-black">Optimizing for LLM Interpretation & Attribution</h4>
          <p>
            Models do not read websites like traditional indexers. They look for cohesive semantic structures, citation fidelity, and contextual authority. To ensure high <strong>AI visibility</strong>, organizations must audit how frontier architectures perceive their brand telemetry.
          </p>
          <p>
            Key components of a robust <strong>LLM SEO</strong> strategy include:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Entity Consistency:</strong> Ensuring unstructured datasets, corporate records, and press mentions present unified details across public and private sandboxes.</li>
            <li><strong>Citation Fidelity:</strong> Actively monitoring citation tokens to ensure model recommendations map back to your primary domain nodes.</li>
            <li><strong>Semantic Richness:</strong> Providing precise, factual data points rather than corporate fluff, as models value information density and context verification.</li>
          </ul>

          <h4 className="font-serif text-[22px] text-black">A New Era of Visibility</h4>
          <p>
            As AI recommendation systems and conversational platforms scale, brands that continue to rely on traditional SEO strategies will face brand erasure. The future belongs to those who understand how models synthesize intelligence and actively optimize their presence inside generative networks.
          </p>
        </div>

        <div className="pt-8 border-t border-black/5 mt-12">
          <p className="text-[13px] font-mono text-black/40">Published May 12, 2026 // Insight Series // Vorantir Strategy</p>
        </div>
      </div>
    </PageWrapper>
  );
}

// 10.2 Press Article 2
function PressArticle2Page({ onNavigate }) {
  return (
    <PageWrapper
      tag="Research — Autonomous Agents"
      title={<>AI agents will become the<br /><span className="italic text-black/50">next shopping interface.</span></>}
      subtitle="Consumers are beginning to delegate product discovery and purchase decisions to AI systems. Visibility inside recommendation engines and conversational agents is the new battleground."
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl text-left">
        <button
          onClick={() => onNavigate("press")}
          className="text-[12px] tracking-[0.15em] uppercase text-black/45 hover:text-black transition-colors font-mono mb-8 block"
        >
          ← Back to insights
        </button>

        <div className="space-y-8 text-[15px] sm:text-[16px] leading-8 text-black/60">
          <p className="font-serif text-[20px] sm:text-[24px] leading-9 text-black tracking-[-0.02em] italic">
            "When choice is delegated to algorithms, traditional visual advertising loses its power. The new mandate is structural verification."
          </p>

          <p>
            The rise of autonomous agentic workflows is redefining <strong>conversational commerce</strong>. We are rapidly moving toward a future where human buyers no longer browse catalogs, read reviews, or compare specifications manually. Instead, they will commission a personal agent to purchase the exact product that meets their parameters.
          </p>

          <h4 className="font-serif text-[22px] text-black">The Delegation of Choice</h4>
          <p>
            Imagine an autonomous agent tasked to "find the most reliable enterprise database cluster with regional UAE data compliance." Or a retail agent instructed to "purchase a neutral, sustainable linen shirt with the highest customer lifetime value rating."
          </p>
          <p>
            In both scenarios, the human interface is completely bypassed. The agent queries modern search APIs, scans structured third-party comparisons, audits brand citation indexes, and processes model weights to execute the transaction. To remain relevant, brands must achieve absolute clarity inside these automated <strong>AI recommendation systems</strong>.
          </p>

          <h4 className="font-serif text-[22px] text-black">Structuring for Agentic Verification</h4>
          <p>
            To make products discoverable to AI agents, companies must evolve their digital representations:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>API Legibility:</strong> Public specifications and product features must be formatted for seamless parsing by cognitive discovery tools.</li>
            <li><strong>Neutral Third-Party Verification:</strong> Agents compare reviews and third-party data clusters. Authentic citations and verified credentials act as primary trust signals.</li>
            <li><strong>Conversational Presence:</strong> Product datasets must align with conversational dialogue queries, ensuring organic attribution in real-time recommendation flows.</li>
          </ul>

          <h4 className="font-serif text-[22px] text-black">Looking Ahead</h4>
          <p>
            As <strong>AI-native discovery</strong> matures, advertising budgets will pivot from banner placements to agentic legibility optimization. The companies that prepare their telemetry to be parsed by autonomous agents will capture the conversational commerce market first.
          </p>
        </div>

        <div className="pt-8 border-t border-black/5 mt-12">
          <p className="text-[13px] font-mono text-black/40">Published February 18, 2026 // Research Series // Vorantir Intelligence</p>
        </div>
      </div>
    </PageWrapper>
  );
}

// 10.3 Press Article 3
function PressArticle3Page({ onNavigate }) {
  return (
    <PageWrapper
      tag="Analysis — Model Visibility"
      title={<>The new battleground is AI visibility,<br /><span className="italic text-black/50">not traditional search rankings.</span></>}
      subtitle="Modern AI systems build answers by aggregating entities, sources, citations, and semantic trust signals. Understanding how models interpret your brand is key to shaping market perception."
    >
      <div className="border-t border-black/5 pt-16 max-w-3xl text-left">
        <button
          onClick={() => onNavigate("press")}
          className="text-[12px] tracking-[0.15em] uppercase text-black/45 hover:text-black transition-colors font-mono mb-8 block"
        >
          ← Back to insights
        </button>

        <div className="space-y-8 text-[15px] sm:text-[16px] leading-8 text-black/60">
          <p className="font-serif text-[20px] sm:text-[24px] leading-9 text-black tracking-[-0.02em] italic">
            "Models don't just sort websites; they assign attribution. Reputation is now an algorithmic equation."
          </p>

          <p>
            In a classic search landscape, a company's main goal was to appear at the top of a search page. But in a generative era, a search engine ranks, while a cognitive model synthesizes. This fundamental difference creates a new arena of competition: <strong>AI Visibility</strong>.
          </p>

          <h4 className="font-serif text-[22px] text-black">How Models Construct Brand Perception</h4>
          <p>
            Generative engines build responses by weaving together disparate sources, brand citations, entity metrics, and semantic signals. When a user asks ChatGPT, Gemini, or Perplexity about your company's capabilities, the model constructs a description on the fly.
          </p>
          <p>
            If the model's training weights, semantic databases, or active web search caches contain contradictory, outdated, or absent data, your brand risks being misrepresented or omitted entirely. <strong>AI Search Optimization</strong> is about proactively ensuring that models have the most accurate, high-fidelity context to synthesize your narrative.
          </p>

          <h4 className="font-serif text-[22px] text-black">Strategic Elements of AI Visibility</h4>
          <p>
            To manage perception inside model responses, enterprise leaders must focus on:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Telemetry Audits:</strong> Conducting live audits to see how frontier models currently perceive, categorize, and rank your brand compared to competitors.</li>
            <li><strong>Semantic Signal Reinforcement:</strong> Publishing high-density factual documents, authoritative schema mappings, and verified reference layers.</li>
            <li><strong>Attribution Preservation:</strong> Designing citation architectures that prompt conversational layers to link back directly to primary source material.</li>
          </ul>

          <h4 className="font-serif text-[22px] text-black">A Mandate for Forward-Looking Brands</h4>
          <p>
            The shift from index pages to cognitive answers represents a permanent change in how enterprise data is evaluated. Organizations that proactively align their unstructured assets for AI discovery will establish structural advantages that traditional keyword optimization cannot replicate.
          </p>
        </div>

        <div className="pt-8 border-t border-black/5 mt-12">
          <p className="text-[13px] font-mono text-black/40">Published October 05, 2025 // Analysis Series // Vorantir Research</p>
        </div>
      </div>
    </PageWrapper>
  );
}

// 10. Press / Media Page
function PressPage({ onNavigate }) {
  const releases = [
    {
      category: "INSIGHT",
      title: "Why Generative Engine Optimisation is replacing traditional SEO",
      date: "May 12, 2026",
      desc: "Search behavior is shifting from links to synthesized answers. As ChatGPT, Gemini, Claude, and Perplexity become discovery layers, brands must optimize not just for rankings — but for interpretation, citation, and recommendation inside AI-generated responses.",
      target: "press-article-1"
    },
    {
      category: "RESEARCH",
      title: "AI agents will become the next shopping interface",
      date: "February 18, 2026",
      desc: "Consumers are beginning to delegate product discovery and purchase decisions to AI systems. Visibility inside recommendation engines, conversational agents, and autonomous shopping workflows may soon matter more than traditional advertising placement.",
      target: "press-article-2"
    },
    {
      category: "ANALYSIS",
      title: "The new battleground is AI visibility, not search rankings",
      date: "October 05, 2025",
      desc: "Modern AI systems build answers by aggregating entities, sources, citations, and semantic trust signals. Companies that understand how frontier models interpret their brand will shape market perception long before competitors recognize the shift.",
      target: "press-article-3"
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
              onClick={() => onNavigate(rel.target)}
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

// 11. Visibility Intelligence Page
function VisibilityIntelligencePage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities I"
      title={<>Ecosystem visibility<br /><span className="italic text-black/50">auditing.</span></>}
      subtitle="We track corporate presence and claim representation across the frontier AI model space, mapping how large language models characterize your organization."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">The Representation Index</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Algorithmic Representation</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Modern AI systems do not simply retrieve links; they synthesize claims. Our platform audits the representation patterns of your corporate identity, cataloging how your key competencies, capabilities, and executive announcements are stored within neural network weights.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Semantic Consistency</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Mitigating Narrative Decay</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Without active auditing, brand narratives decay when generated recursively. Vorantir ensures that model outputs maintain high alignment fidelity with your primary public announcements, identifying drifted characterizations.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Audit Parameters</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Neural weight representation mapping</li>
              <li>Recursive claim consistency monitoring</li>
              <li>LLM ecosystem search trajectory evaluations</li>
              <li>Enterprise search engine presence audits</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 12. Source Mapping Page
function SourceMappingPage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities II"
      title={<>Attribution node<br /><span className="italic text-black/50">optimization.</span></>}
      subtitle="Map and reinforce the authoritative source nodes that frontier models parse during retrieval augmentation pipelines."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Retrieval Authority</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Document Fragment Prioritization</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Retrieval-augmented generation selects document fragments based on semantic density and mathematical cosine similarity. We structure your primary domain nodes so neural indexes ingestion programs easily map and digest the key data.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Citation Fidelity</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Attribution Accuracy</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensure synthesized output tokens link directly back to your secure, primary corporate nodes, protecting your domain from representation hijack or attribution leakage by third-party scraping aggregators.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Ingestion Benchmarks</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Semantic density data formatting</li>
              <li>Retrieval vector priority audits</li>
              <li>Dynamic source-node linking graphs</li>
              <li>Entity authority preservation indices</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 13. Entity Monitoring Page
function EntityMonitoringPage() {
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

// 14. Competitive Analysis Page
function CompetitiveAnalysisPage() {
  return (
    <PageWrapper
      tag="Platform — Capabilities IV"
      title={<>Competitive semantic<br /><span className="italic text-black/50">mapping.</span></>}
      subtitle="Audit competitor share of voice, presence index, and representation authority within the generative engine space."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Share of Generative Voice</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Ecosystem Dominance</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Identify which brand entities are consistently referenced inside core industry query streams. Vorantir maps the presence share of your competitors, allowing you to discover narrative gaps and prioritize optimization.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Attribution Domination</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Citation Mapping</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Understand which authoritative websites, journals, or data pools competitors utilize to bolster their neural presence, mapping their strategic data integration vectors.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">SGV Analysis Indicators</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Competitor query-flow mapping</li>
              <li>Semantic gap diagnostic graphs</li>
              <li>Citation dominance evaluations</li>
              <li>Category share of voice indicators</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 15. Enterprise AI Page
function EnterpriseAIPage() {
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

// 16. Brand Visibility Page
function BrandVisibilityPage() {
  return (
    <PageWrapper
      tag="Solutions — Brands"
      title={<>Preserving narrative integrity in<br /><span className="italic text-black/50">search transition.</span></>}
      subtitle="We advise premium brands and forward-thinking companies on safeguarding their narrative reputation as keyword search transitions into synthesized answers."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Narrative Custody</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Maintaining Definition Rights</h4>
            <p className="text-[15px] leading-7 text-black/55">
              As AI engines curate responses, standard corporate marketing copy fades. We define, map, and secure the baseline metadata, technical specifications, and key publications to preserve absolute authority over how you are described.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Generative Strategy</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">GEO Optimization Frameworks</h4>
            <p className="text-[15px] leading-7 text-black/55">
              We apply advanced mathematical frameworks, optimizing primary domain nodes to ensure high-priority ranking, dynamic keyword associations, and zero attribution losses within modern AI synthesis clusters.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Brand Strategy Pillars</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Primary description optimization</li>
              <li>GEO attribution frameworks</li>
              <li>Category presence optimization</li>
              <li>Recursive citation auditing</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 17. Strategic Intelligence Page
function StrategicIntelligencePage() {
  return (
    <PageWrapper
      tag="Solutions — Advisory"
      title={<>Systemic intelligence for the<br /><span className="italic text-black/50">executive suite.</span></>}
      subtitle="Strategic advisory partnerships and bespoke threat evaluations for Chief Risk Officers, C-Suite leaders, and corporate boards."
    >
      <div className="grid lg:grid-cols-2 gap-16 border-t border-black/5 pt-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Advisory Briefs</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Executive Briefings & Analytics</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Bespoke, human-reviewed diagnostic metrics for executive boards. We translate high-dimensional model perceptions and drift anomalies into concise strategic risks, preparing executives for algorithmically driven public evaluations.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-black/40 mb-4">Algorithmic Risk Governance</h3>
            <h4 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Compliance & Security Alignment</h4>
            <p className="text-[15px] leading-7 text-black/55">
              Ensure that your corporate representation patterns align strictly with regional data privacy parameters, operational risk mitigation rules, and regional commercial standards.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[28px] border border-black/5 bg-[#faf8f4] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <h4 className="font-serif text-[22px] mb-4">Board Level Advisory</h4>
            <ul className="space-y-3 text-[14px] text-black/60 list-disc pl-5">
              <li>Board-level risk reports</li>
              <li>Algorithmic bias threat maps</li>
              <li>Corporate governance alignments</li>
              <li>Strategic risk assessments</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default function VorantirIntelligencePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "company" | "research" | "careers" | "contact" | "resources" | "trust" | "privacy" | "terms" | "status" | "press" | "visibility_intelligence" | "source_mapping" | "entity_monitoring" | "competitive_analysis" | "enterprise_ai" | "brand_visibility" | "strategic_intelligence" | "group_home"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/signal") {
        setCurrentPage("signal");
      } else if (path === "/vorantir_enterprise_landing_page" || path === "/") {
        setCurrentPage("home");
      } else if (hash) {
        setCurrentPage(hash.replace("#", ""));
      } else {
        setCurrentPage("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (page === "home") {
      window.history.pushState({}, "", "/");
    } else if (page === "signal") {
      window.history.pushState({}, "", "/signal");
    } else {
      window.history.pushState({}, "", `#${page}`);
    }
  };

  const isLightPage = currentPage !== "intelligence" && currentPage !== "signal";
  const isDarkTheme = currentPage === "signal";

  // Render the appropriate content depending on currentPage state
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <VorantirLandingPage onNavigate={navigateTo} />;
      case "philosophy":
        return <PhilosophyPage />;
      case "signal":
        return <SignalPage />;
      case "media":
        return <MediaPage />;
      case "strategy":
        return <StrategyPage />;
      case "company":
        return <CompanyPage />;
      case "research":
        return <ResearchPage />;
      case "careers":
        return <CareersPage />;
      case "contact":
        return <ContactPage />;
      case "resources":
        return <ResourcesPage />;
      case "trust":
        return <TrustCenterPage />;
      case "privacy":
        return <PrivacyPolicyPage />;
      case "terms":
        return <TermsPage />;
      case "status":
        return <StatusPage />;
      case "press":
        return <PressPage onNavigate={navigateTo} />;
      case "press-article-1":
        return <PressArticle1Page onNavigate={navigateTo} />;
      case "press-article-2":
        return <PressArticle2Page onNavigate={navigateTo} />;
      case "press-article-3":
        return <PressArticle3Page onNavigate={navigateTo} />;
      case "visibility_intelligence":
        return <VisibilityIntelligencePage />;
      case "source_mapping":
        return <SourceMappingPage />;
      case "entity_monitoring":
        return <EntityMonitoringPage />;
      case "competitive_analysis":
        return <CompetitiveAnalysisPage />;
      case "enterprise_ai":
        return <EnterpriseAIPage />;
      case "brand_visibility":
        return <BrandVisibilityPage />;
      case "strategic_intelligence":
        return <StrategicIntelligencePage />;
      case "intelligence":
        return (
          <>
            {/* Cinematic Yosemite Hero */}
            <section className="relative min-h-screen overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
                  alt="Landscape"
                  className="w-full h-full object-cover scale-[1.01]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(247,243,236,0)_65%,rgba(247,243,236,0.25)_82%,rgba(247,243,236,0.85)_95%,#f7f3ec_100%)]" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-14 md:bottom-20 z-10 flex flex-col items-center text-center w-full max-w-7xl px-4 sm:px-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-black/45 backdrop-blur-md text-white px-5 py-2 text-[12px] mb-6 md:mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  Vorantir Intelligence Platform
                </div>

                <h1 className="font-serif text-[28px] sm:text-[44px] md:text-[62px] leading-[1.1] md:leading-[1.05] tracking-[-0.03em] md:tracking-[-0.05em] max-w-[1080px] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.28)]">
                  The intelligence layer
                  <br />
                  for
                  <span className="italic ml-2 sm:ml-4 text-white">
                    AI discovery
                  </span>
                </h1>

                <button
                  onClick={() => navigateTo("contact")}
                  className="mt-10 sm:mt-14 md:mt-16 rounded-full bg-black text-white px-8 py-3.5 sm:px-10 sm:py-4 text-[13px] sm:text-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 transition-all duration-500"
                >
                  Get started
                </button>
              </div>
            </section>

            {/* Built for modern AI marquee */}
            <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-[#f7f3ec] overflow-hidden border-y border-black/5">
              <div className="max-w-7xl mx-auto mb-8 sm:mb-10 text-center">
                <div className="text-[13px] sm:text-[15px] text-black/45 font-medium px-4">
                  Built for enterprises operating across modern AI ecosystems
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-[#f7f3ec] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-[#f7f3ec] to-transparent" />

                <div className="flex w-max animate-marquee items-center gap-16 sm:gap-24 opacity-45">
                  {[...llmLogos, ...llmLogos].map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex items-center gap-4 sm:gap-5 shrink-0 text-black/40"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale opacity-70"
                      />

                      <div className="text-[28px] sm:text-[42px] font-semibold tracking-[-0.05em] whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What Vorantir understands */}
            <section className="bg-[#f7f3ec] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                <div>
                  <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-black/35 mb-6 sm:mb-8">
                    What Vorantir understands
                  </div>

                  <h2 className="font-serif text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] lg:tracking-[-0.05em] max-w-xl mb-8 sm:mb-12">
                    AI systems are becoming the interface layer of enterprise discovery.
                  </h2>

                  <div className="space-y-6 sm:space-y-10 text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/68 max-w-2xl">
                    <p>
                      Organizations are increasingly interpreted through generated answers rather than traditional search results. Vorantir continuously maps how large language models reference, prioritize, and synthesize enterprise entities.
                    </p>

                    <p>
                      By evaluating representation, narrative alignment, and source authority across the broader LLM ecosystem, we help you understand how cognitive architectures structure public perception of your enterprise.
                    </p>

                    <p>
                      Discovery is transitioning from user-initiated web navigation to dynamic, model-driven synthesized intelligence systems. Vorantir decodes this transition to keep your enterprise visible.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:shadow-[0_30px_120px_rgba(0,0,0,0.08)] mt-8 lg:mt-0">
                  <img
                    src="/Landing.png"
                    alt="Vorantir Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Visibility Intelligence */}
            <section className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-12 sm:mb-20">
                  <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-black/35 mb-6 sm:mb-8">
                    Visibility Intelligence
                  </div>

                  <h2 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10">
                    How AI systems synthesize enterprise information.
                  </h2>

                  <p className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.7] sm:leading-[1.8] text-black/65">
                    Frontier models do not simply index web pages. They parse authoritative citation networks, evaluate entity relationships, and compile structural summaries. Active tracking inside these cognitive pipelines is the new baseline for brand presence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("visibility_intelligence")}>
                    <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                      Entity visibility monitoring
                    </div>

                    <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                      92%
                    </div>

                    <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                      Of enterprise discovery queries now route through synthesized answer engines. Proactive entity tracking ensures your capabilities are represented accurately and consistently.
                    </p>
                  </div>

                  <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("source_mapping")}>
                    <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                      Source mapping & attribution
                    </div>

                    <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                      14.5x
                    </div>

                    <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                      Higher citation fidelity for brands that actively map and reinforce their primary source nodes, ensuring that LLM synthesized responses attribute information to authoritative domains.
                    </p>
                  </div>

                  <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("competitive_analysis")}>
                    <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                      Competitive perception
                    </div>

                    <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                      2.8x
                    </div>

                    <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                      Reduction in narrative drift across LLMs. Vorantir monitors competitor representation, providing strategic intelligence on where others dominate visibility within key prompt vectors.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic cards section */}
            <section className="bg-[#f7f3ec] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-black/5 p-8 sm:p-12 lg:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_80px_rgba(0,0,0,0.05)] cursor-pointer" onClick={() => navigateTo("brand_visibility")}>
                  <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                    Why this transition matters now
                  </div>

                  <h3 className="font-serif text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.1] lg:leading-[1] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10">
                    Why enterprises are becoming AI-native entities.
                  </h3>

                  <div className="space-y-6 sm:space-y-8 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/65">
                    <p>
                      The fundamental unit of discovery has shifted. Traditional search engine optimization designed for human clicks is giving way to Generative Engine Optimization designed for model-synthesized responses.
                    </p>

                    <p>
                      As artificial intelligence platforms become infrastructure, narrative consistency and source mapping are the defining competitive battlegrounds. The brands who shape their representation today will define market perception tomorrow.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] sm:rounded-[36px] bg-[#f5f1ea] border border-black/5 p-8 sm:p-12 lg:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_80px_rgba(0,0,0,0.05)] text-black cursor-pointer" onClick={() => navigateTo("strategic_intelligence")}>
                  <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                    Strategic intelligence layer
                  </div>

                  <h3 className="font-serif text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.1] lg:leading-[1] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10 text-black">
                    A permanent diagnostic system for AI ecosystems.
                  </h3>

                  <div className="space-y-6 sm:space-y-7 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/65">
                    <p>
                      Vorantir provides the unified diagnostic console needed to trace entity reference pathways, analyze competitor positioning, and maintain authority across frontier models.
                    </p>

                    <p>
                      Engineered specifically for institutional leaders, software platforms, and global brands, our solution provides real-time enterprise AI presence tracking and continuous ecosystem auditing at scale.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      default:
        return <VorantirLandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      <div className={`overflow-x-hidden min-h-screen transition-colors duration-700 ${isDarkTheme ? "bg-[#0c0c0b] text-[#f7f3ec]" : isLightPage ? "bg-[#f3efe8] text-[#11110f]" : "bg-[#f7f3ec] text-[#11110f]"}`}>

        {/* Navigation Bar */}
        <nav
          className={`fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[94%] transition-all duration-700 ease-out border ${scrolled
            ? isDarkTheme
              ? "max-w-5xl h-[68px] rounded-[24px] bg-[#0c0c0b]/80 backdrop-blur-xl border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              : isLightPage
                ? "max-w-5xl h-[68px] rounded-[24px] bg-[#f3efe8]/80 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                : "max-w-5xl h-[68px] rounded-[24px] bg-[#f7f3ec]/85 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            : isDarkTheme
              ? "max-w-6xl h-20 rounded-[28px] bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              : isLightPage
                ? "max-w-6xl h-20 rounded-[28px] bg-[#f3efe8]/75 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
                : "max-w-6xl h-20 rounded-[28px] bg-black/25 backdrop-blur-xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            }`}
        >
          <div
            className="mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 h-full"
          >
            <div
              onClick={() => navigateTo("home")}
              className={`font-medium tracking-[0.28em] text-[11px] sm:text-[13px] uppercase cursor-pointer transition-colors duration-700 ${isDarkTheme ? "text-white" : isLightPage ? "text-[#11110f]" : scrolled ? "text-[#11110f]" : "text-white"
                }`}
            >
              Vorantir
            </div>

            <div
              className={`hidden md:flex items-center gap-8 lg:gap-10 text-[13px] sm:text-[14px] transition-colors duration-700 ${isDarkTheme ? "text-white/70" : isLightPage ? "text-[#11110f]/60" : scrolled ? "text-black/60" : "text-white/70"
                }`}
            >
              <div className="relative group py-2">
                <span className={`cursor-pointer transition-colors flex items-center gap-1 ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
                  } ${["intelligence", "signal", "media", "strategy"].includes(currentPage) ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
                  }`}>
                  Divisions <span className="text-[8px]">▼</span>
                </span>
                {/* Luxury Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#faf8f4] border border-black/5 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-black flex flex-col gap-1 text-[13px] uppercase tracking-wider font-medium">
                  <span onClick={() => navigateTo("intelligence")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "intelligence" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Intelligence</span>
                  <span onClick={() => navigateTo("signal")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "signal" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Signal</span>
                  <span onClick={() => navigateTo("media")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "media" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Media</span>
                  <span onClick={() => navigateTo("strategy")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "strategy" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Strategy</span>
                </div>
              </div>

              <span onClick={() => navigateTo("philosophy")} className={`cursor-pointer transition-colors ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
                } ${currentPage === "philosophy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
                }`}>
                Philosophy
              </span>

              <span onClick={() => navigateTo("contact")} className={`cursor-pointer transition-colors ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
                } ${currentPage === "contact" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
                }`}>
                Contact
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo("contact")}
                className={`hidden sm:inline-block rounded-full px-6 py-3 text-[13px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${isDarkTheme
                  ? "bg-white text-black hover:opacity-90"
                  : isLightPage
                    ? "bg-black text-white hover:opacity-90"
                    : scrolled
                      ? "bg-black text-white hover:opacity-90"
                      : "bg-white text-black hover:opacity-90"
                  }`}
              >
                Start a conversation
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden text-[11px] sm:text-[13px] uppercase tracking-[0.2em] font-medium focus:outline-none flex items-center gap-2 transition-colors duration-700 ${isDarkTheme ? "text-white/70" : isLightPage ? "text-[#11110f]/60" : scrolled ? "text-black/60" : "text-white/70"
                  }`}
              >
                <span>{menuOpen ? "Close" : "Menu"}</span>
                <span className="text-[10px]">{menuOpen ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>

          {/* Minimal Mobile Dropdown */}
          {menuOpen && (
            <div
              className={`md:hidden border-t px-8 py-6 flex flex-col gap-4 text-[13px] sm:text-[14px] tracking-wider uppercase font-medium backdrop-blur-xl rounded-b-[24px] transition-all duration-700 max-h-[85vh] overflow-y-auto ${isDarkTheme ? "bg-[#0c0c0b]/95 text-white/75 border-white/5" : isLightPage ? "bg-[#f3efe8]/95 text-[#11110f]/75 border-black/5" : "bg-[#f7f3ec]/95 text-black/75 border-black/5"
                }`}
            >
              <div className={`font-bold text-[10px] tracking-[0.2em] mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Divisions</div>
              <span className={`cursor-pointer transition-colors ${currentPage === "intelligence" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("intelligence")}>Intelligence</span>
              <span className={`cursor-pointer transition-colors ${currentPage === "signal" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("signal")}>Signal</span>
              <span className={`cursor-pointer transition-colors ${currentPage === "media" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("media")}>Media</span>
              <span className={`cursor-pointer transition-colors ${currentPage === "strategy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("strategy")}>Strategy</span>

              <div className={`font-bold text-[10px] tracking-[0.2em] mt-3 mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Philosophy</div>
              <span className={`cursor-pointer transition-colors ${currentPage === "philosophy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("philosophy")}>Philosophy</span>

              <div className={`font-bold text-[10px] tracking-[0.2em] mt-3 mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Contact</div>
              <span className={`cursor-pointer transition-colors ${currentPage === "contact" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("contact")}>Contact</span>

              <button
                onClick={() => navigateTo("contact")}
                className={`block w-full rounded-full px-6 py-3 text-[13px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:opacity-90 transition-all mt-4 text-center uppercase tracking-wider ${isDarkTheme ? "bg-white text-black font-semibold" : "bg-black text-white"
                  }`}
              >
                Start a conversation
              </button>
            </div>
          )}
        </nav>

        {/* Dynamic Page Render */}
        {renderPageContent()}

        {/* Unified Standardized Footer */}
        <footer className={`relative overflow-hidden border-t transition-all duration-700 mt-12 sm:mt-20 ${isDarkTheme ? "bg-[#070707] text-[#f7f3ec] border-white/5" : "bg-[#f3efe8] text-[#11110f] border-black/5"
          }`}>
          {/* Cinematic Background Layer for Dark Theme (Signal Page) */}
          {isDarkTheme && (
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
              <img
                src={mossyHills}
                alt="Mossy hills night terrain"
                className="w-full h-full object-cover object-center scale-[1.03] brightness-[0.70] contrast-[1.05] saturate-[0.95]"
              />
              {/* Soft top gradient: from #070707 to transparent */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070707] to-transparent" />

              {/* Gentle radial vignette around edges */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,7,7,0.15)_20%,rgba(7,7,7,0.65)_100%)]" />

              {/* Very subtle bottom fade only near copyright area */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070707]/90 to-transparent" />
            </div>
          )}

          {/* Cinematic Background Layer for Intelligence Page */}
          {currentPage === "intelligence" && (
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
                alt="Yosemite valley landscape footer background"
                className="w-full h-full object-cover object-[center_bottom] scale-[1.02] brightness-[0.95] contrast-[1.08] saturate-[0.95] opacity-[0.48]"
              />
              {/* Soft warm ivory gradient ONLY near the top transition */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#f3efe8] to-transparent" />

              {/* A subtle transparent cream haze over the image */}
              <div className="absolute inset-0 bg-[#f3efe8]/20" />

              {/* A very light bottom fade behind copyright links */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f3efe8]/45 to-transparent" />
            </div>
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-14">
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <div
                  onClick={() => navigateTo("home")}
                  className="text-[28px] font-serif mb-6 sm:mb-8 tracking-[-0.04em] cursor-pointer"
                >
                  Vorantir
                </div>
              </div>

              <div>
                <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
                  Divisions
                </div>

                <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
                  <div onClick={() => navigateTo("intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Intelligence</div>
                  <div onClick={() => navigateTo("signal")} className="hover:opacity-80 cursor-pointer transition-opacity">Signal</div>
                  <div onClick={() => navigateTo("media")} className="hover:opacity-80 cursor-pointer transition-opacity">Media</div>
                  <div onClick={() => navigateTo("strategy")} className="hover:opacity-80 cursor-pointer transition-opacity">Strategy</div>
                </div>
              </div>

              <div>
                <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
                  Platform
                </div>

                <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
                  <div onClick={() => navigateTo("visibility_intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Visibility Intelligence</div>
                  <div onClick={() => navigateTo("source_mapping")} className="hover:opacity-80 cursor-pointer transition-opacity">Source Mapping</div>
                  <div onClick={() => navigateTo("entity_monitoring")} className="hover:opacity-80 cursor-pointer transition-opacity">Entity Monitoring</div>
                  <div onClick={() => navigateTo("competitive_analysis")} className="hover:opacity-80 cursor-pointer transition-opacity">Competitive Analysis</div>
                </div>
              </div>

              <div>
                <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
                  Solutions
                </div>

                <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
                  <div onClick={() => navigateTo("enterprise_ai")} className="hover:opacity-80 cursor-pointer transition-opacity">Enterprise AI</div>
                  <div onClick={() => navigateTo("brand_visibility")} className="hover:opacity-80 cursor-pointer transition-opacity">Brand Visibility</div>
                  <div onClick={() => navigateTo("strategic_intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Strategic Intelligence</div>
                </div>
              </div>

              <div>
                <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
                  Company
                </div>

                <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
                  <div onClick={() => navigateTo("philosophy")} className="hover:opacity-80 cursor-pointer transition-opacity">Philosophy</div>
                  <div onClick={() => navigateTo("company")} className="hover:opacity-80 cursor-pointer transition-opacity">About</div>
                  <div onClick={() => navigateTo("careers")} className="hover:opacity-80 cursor-pointer transition-opacity">Careers</div>
                  <div onClick={() => navigateTo("contact")} className="hover:opacity-80 cursor-pointer transition-opacity">Contact</div>
                </div>
              </div>

              <div>
                <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
                  Resources
                </div>

                <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
                  <div onClick={() => navigateTo("resources")} className="hover:opacity-80 cursor-pointer transition-opacity">Documentation</div>
                  <div onClick={() => navigateTo("trust")} className="hover:opacity-80 cursor-pointer transition-opacity">Trust Center</div>
                  <div onClick={() => navigateTo("status")} className="hover:opacity-80 cursor-pointer transition-opacity">Status</div>
                  <div onClick={() => navigateTo("press")} className="hover:opacity-80 cursor-pointer transition-opacity">Press</div>
                </div>
              </div>
            </div>

            <div className={`mt-16 sm:mt-24 pt-8 sm:pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[13px] sm:text-[14px] ${isDarkTheme ? "border-white/10 text-white/60" : "border-black/10 text-black/60"
              }`}>
              <div>© Vorantir 2026</div>

              <div className="flex items-center gap-6 sm:gap-8">
                <div onClick={() => navigateTo("privacy")} className="hover:opacity-80 cursor-pointer transition-opacity">Privacy Policy</div>
                <div onClick={() => navigateTo("trust")} className="hover:opacity-80 cursor-pointer transition-opacity">Security</div>
                <div onClick={() => navigateTo("terms")} className="hover:opacity-80 cursor-pointer transition-opacity">Terms</div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) translate(0px, 0px);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.08) translate(15px, -15px);
          }
        }
        .animate-pulseGlow {
          animation: pulseGlow 15s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
