import { useEffect, useState } from "react";

export default function VorantirLandingPage({ onNavigate = () => { } }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-[#f3efe8] text-[#11110f] min-h-screen overflow-x-hidden pt-12">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-10 overflow-hidden [perspective:1800px]">
        {/* BACKGROUND ATMOSPHERE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%)]" />

          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-black/5 opacity-40 animate-[spin_80s_linear_infinite]" />
          <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[1500px] h-[1500px] rounded-full border border-black/[0.03] animate-[spin_120s_linear_infinite_reverse]" />

          <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#ded8cf] to-transparent" />

          {/* FLOATING 3D ORBS */}
          <div className="absolute top-[22%] left-[12%] w-32 h-32 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 shadow-[inset_0_1px_10px_rgba(255,255,255,0.6),0_20px_60px_rgba(0,0,0,0.08)] [transform:translateZ(120px)] animate-[float_9s_ease-in-out_infinite]" />

          <div className="absolute bottom-[18%] right-[10%] w-44 h-44 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[inset_0_1px_10px_rgba(255,255,255,0.5),0_20px_80px_rgba(0,0,0,0.1)] [transform:translateZ(200px)] animate-[float_12s_ease-in-out_infinite]" />

          <div className="absolute top-[30%] right-[24%] w-20 h-20 rounded-full bg-[#ffffff]/30 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] [transform:translateZ(160px)] animate-[float_7s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 [transform-style:preserve-3d]">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl text-[12px] tracking-[0.15em] uppercase text-black/60 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            AI-Native Strategy & Intelligence Group
          </div>

          <h1 className="font-serif text-[58px] md:text-[88px] leading-[0.95] tracking-[-0.04em] max-w-5xl mx-auto [transform:translateZ(120px)]">
            Architecting <span className="italic text-black/60">systems</span> for an
            intelligence-native century.
          </h1>

          <p className="max-w-2xl mx-auto mt-10 text-[17px] leading-8 text-black/55">
            Vorantir is a privately held group operating across artificial intelligence, strategic implementation, and emerging research initiatives built for the next generation of enterprise systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button
              onClick={() => {
                const element = document.getElementById("explore-group");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-full bg-black text-white px-7 py-3 text-[13px] tracking-wide shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500"
            >
              Explore the group
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("divisions");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-full border border-black/10 px-7 py-3 text-[13px] tracking-wide hover:bg-black hover:text-[#11110f] transition-all duration-300"
            >
              Our divisions
            </button>
          </div>
        </div>
      </section>

      {/* ATMOSPHERIC BREAK */}
      <section id="explore-group" style={{ scrollMarginTop: "96px" }} className="px-6 lg:px-10 pb-28 relative z-20 -mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[42px] border border-black/5 bg-[#ddd7ce]/80 backdrop-blur-2xl shadow-[0_30px_120px_rgba\(0,0,0,0.06\)] h-[540px] before:absolute before:inset-0 before:bg-[linear-gradient\(135deg,rgba\(255,255,255,0.22\),transparent_45%\)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_35%)]" />

            <div className="absolute inset-0 opacity-40 [transform:perspective(1200px)_rotateX(12deg)]">
              <div className="absolute top-20 left-24 w-[500px] h-[500px] rounded-full border border-black/10" />
              <div className="absolute top-10 left-10 w-[700px] h-[700px] rounded-full border border-black/[0.05]" />
              <div className="absolute -bottom-32 right-10 w-[400px] h-[400px] rounded-full border border-black/10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-10 lg:p-16">
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-5">
                  Vorantir
                </div>

                <h2 className="font-serif text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.04em] max-w-2xl">
                  The future of enterprise will
                  <span className="italic text-black/50 ml-4"> become computationally native.</span>
                </h2>
              </div>

              <div className="hidden lg:block max-w-sm text-[15px] leading-7 text-black/50">
                Built around long-horizon thinking, institutional design principles, and the belief that artificial intelligence will fundamentally reshape enterprise architecture over the coming decades.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" style={{ scrollMarginTop: "96px" }} className="px-6 lg:px-10 py-28 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-black/35 mb-5">
                Capabilities
              </div>

              <h2 className="font-serif text-[42px] md:text-[64px] leading-[1.02] tracking-[-0.04em] max-w-3xl">
                Three <span className="italic text-black/60">distinct</span> divisions.
                <br />
                One enduring philosophy.
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-black/50">
              Each division operates independently while contributing toward a unified long-term vision centered around technology, intelligence, and enterprise transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-[2000px]">
            <div
              onClick={() => onNavigate("intelligence")}
              className="group relative rounded-[34px] bg-[rgba(255,255,255,0.55)] backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.04)] p-10 hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-[-2deg] hover:shadow-[0_30px_90px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl border border-black/10 flex items-center justify-center text-lg mb-8">
                ◈
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-black/35 mb-5">
                Intelligence
              </div>

              <h3 className="font-serif text-[36px] leading-[1.05] tracking-[-0.04em] mb-6">
                Vorantir <span className="italic text-black/45 ml-2">Intelligence</span>
              </h3>

              <p className="text-[15px] leading-7 text-black/55 mb-10">
                Advanced artificial intelligence systems, enterprise-grade analytical platforms, and next-generation computational infrastructure initiatives.
              </p>

              <div className="text-[12px] tracking-[0.15em] uppercase text-black/40 group-hover:text-black transition-colors">
                Explore division →
              </div>
            </div>

            <div
              onClick={() => onNavigate("signal")}
              className="group relative rounded-[34px] bg-[rgba(255,255,255,0.48)] backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.04)] p-10 hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-[2deg] hover:shadow-[0_30px_90px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-lg mb-8 text-[#11110f]/80">
                △
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-black/35 mb-5">
                Signal
              </div>

              <h3 className="font-serif text-[36px] leading-[1.05] tracking-[-0.04em] mb-6">
                Vorantir <span className="italic text-black/45 ml-2">Signal</span>
              </h3>

              <p className="text-[15px] leading-7 text-black/55 mb-10">
                Advanced analytical telemetry, algorithmic signal optimization, and model-driven perception management.
              </p>

              <div className="text-[12px] tracking-[0.15em] uppercase text-black/40 group-hover:text-black transition-colors">
                Explore division →
              </div>
            </div>

            <div
              onClick={() => onNavigate("research")}
              className="group relative rounded-[34px] bg-[rgba(255,255,255,0.52)] backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.04)] p-10 hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-[2deg] hover:shadow-[0_30px_90px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl border border-black/10 flex items-center justify-center text-lg mb-8">
                ◎
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-black/35 mb-5">
                Research
              </div>

              <h3 className="font-serif text-[36px] leading-[1.05] tracking-[-0.04em] mb-6">
                Vorantir <span className="italic text-black/45 ml-2">Research</span>
              </h3>

              <p className="text-[15px] leading-7 text-black/55 mb-10">
                Long-horizon research initiatives focused on artificial intelligence, enterprise systems, and technological transition.
              </p>

              <div className="text-[12px] tracking-[0.15em] uppercase text-black/40 group-hover:text-black transition-colors">
                Explore division →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        id="philosophy"
        className="px-6 lg:px-10 py-36 overflow-hidden relative bg-[#ece6dc]"
      >
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full border border-white" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#11110f]/30 mb-5">
              Philosophy
            </div>

            <h2 className="font-serif text-[44px] md:text-[68px] leading-[1] tracking-[-0.04em] max-w-2xl">
              Artificial intelligence will redefine the structure of enterprise itself.
            </h2>
          </div>

          <div className="space-y-10 text-[#11110f]/55 text-[16px] leading-8 max-w-xl">
            <p>
              Artificial intelligence is evolving beyond software tooling into foundational enterprise infrastructure shaping communication, decision-making, operations, and strategic execution.
            </p>

            <p>
              The coming decade will reward organizations capable of integrating computational systems deeply into their operational and strategic foundations.
            </p>

            <p>
              Vorantir was established with a long-term orientation toward this transition — operating at the intersection of intelligence, enterprise architecture, and technological evolution.
            </p>
          </div>
        </div>
      </section>

      {/* AI SHIFT SECTION */}
      <section className="px-6 lg:px-10 py-36 overflow-hidden relative bg-[#f5f1ea]">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full border border-white" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#11110f]/30 mb-5">
              The Shift
            </div>

            <h2 className="font-serif text-[44px] md:text-[68px] leading-[1] tracking-[-0.04em] max-w-2xl">
              The next generation of institutions will be
              <span className="italic text-[#11110f]/60"> AI-native.</span>
            </h2>
          </div>

          <div className="space-y-10 text-[#11110f]/55 text-[16px] leading-8 max-w-xl">
            <p>
              Modern enterprises are entering a structural transition in which artificial intelligence will become embedded into every meaningful operational layer — from communication and analysis to infrastructure and execution.
            </p>

            <p>
              The organizations that adapt earliest will not merely adopt artificial intelligence as software; they will restructure themselves around computational leverage entirely.
            </p>

            <p>
              Vorantir exists to participate in and help shape this transformation across multiple strategic domains.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 lg:px-10 pb-32">
        <div className="max-w-5xl mx-auto text-center border-t border-black/5 pt-28">
          <div className="text-[11px] tracking-[0.3em] uppercase text-black/35 mb-5">
            Contact
          </div>

          <h2 className="font-serif text-[48px] md:text-[78px] leading-[0.98] tracking-[-0.05em]">
            Built with a
            <span className="italic text-black/45 ml-4">long-horizon</span> perspective.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-[17px] leading-8 text-black/55">
            Vorantir is focused on building enduring systems and enterprises positioned for the next era of artificial intelligence and computational transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-full bg-black text-white px-8 py-3 text-[13px] tracking-wide shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500"
            >
              hello@vorantir.com
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="rounded-full border border-black/10 px-8 py-3 text-[13px] tracking-wide hover:bg-black hover:text-[#11110f] transition-all duration-300"
            >
              Start a conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

