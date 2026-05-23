import React, { useState } from "react";
import PageWrapper from "@shared/components/PageWrapper.jsx";

export default function CareersPage() {
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

