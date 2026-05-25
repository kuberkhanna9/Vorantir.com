import React, { useEffect } from "react";

export default function PageWrapper({ title, tag, subtitle, children }) {
  useEffect(() => {
    if (tag) {
      document.title = `${tag} — Vorantir`;
    }
    
    if (subtitle) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", subtitle);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", subtitle);
      
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", subtitle);
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", window.location.href);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
  }, [tag, subtitle]);
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
