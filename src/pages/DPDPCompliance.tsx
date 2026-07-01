import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, ArrowRight, Lock } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const dpdpServices = [
  {
    title: "DPDP Readiness Assessment",
    desc: "A structured gap analysis of your data practices against DPDP Act obligations — delivered as a prioritised remediation roadmap your teams can act on immediately."
  },
  {
    title: "Data Mapping & Inventory",
    desc: "We identify and document all personal data across your organisation — how it's collected, where it's stored, who it's shared with — giving you the visibility regulators expect."
  },
  {
    title: "Consent Management Framework",
    desc: "End-to-end design and implementation of consent capture, tracking, and withdrawal — including integration with consent managers recognised under the Act."
  },
  {
    title: "Data Protection Officer (DPO) as a Service",
    desc: "Our practitioners serve as your outsourced DPO — managing grievance redressal, acting as your regulatory liaison, and keeping your compliance posture current."
  },
  {
    title: "Data Protection Impact Assessment (DPIA)",
    desc: "A structured DPIA process for high-risk processing activities — identifying and mitigating privacy risks before new products or processes go live."
  },
  {
    title: "Data Processing Agreements (DPA)",
    desc: "Drafting and reviewing contracts between Data Fiduciaries and Data Processors to ensure downstream compliance obligations are adequately covered."
  },
  {
    title: "Employee Awareness & Training",
    desc: "Customised DPDP training across legal, IT, HR, and marketing — building a privacy-first culture where compliance is understood, not just documented."
  },
  {
    title: "Significant Data Fiduciary (SDF) Compliance",
    desc: "For organisations likely to be designated as SDFs — we guide you through annual audits, DPIA requirements, mandatory DPO appointment, and the full scope of enhanced regulatory obligations."
  },
  {
    title: "Ongoing Compliance Monitoring",
    desc: "Periodic audits, compliance health checks, and proactive regulatory alerts — so your organisation remains aligned as DPDP Rules move toward full enforcement."
  }
];

export default function DPDPCompliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <main>
        {/* Banner Section (Premium Responsive Layout) */}
        <section className="relative pt-20 pb-10 sm:pb-12 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aaa-primary/5 blur-[120px] rounded-full" />
            <motion.div
              initial={{ backgroundPosition: "0 0" }}
              animate={{ backgroundPosition: "0 40px" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(to bottom, white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Breadcrumb tracking synced to standard format */}
              <nav className="flex items-center gap-2 mb-8 text-xs sm:text-[0.75rem] font-bold uppercase tracking-widest text-white/50 overflow-x-auto no-scrollbar whitespace-nowrap">
                <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white shrink-0 uppercase tracking-widest">Services</span>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">DPDP Compliance</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">DPDP</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Compliance</span>
                  </h1>
                  <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-medium">
                    End-to-end services to help your organization meet India's Digital Personal Data Protection obligations.
                  </p>
                </div>

                {/* Sundar Magnetic Shield Emblem */}
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-aaa-primary/10 blur-[120px] rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[400px] h-[400px] border border-white/[0.03] rounded-full"
                    />
                  </div>
                  <motion.div
                    animate={{ y: [0, -20, 0], rotateX: [5, -5, 5], rotateY: [10, -10, 10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <div className="relative p-12 bg-white/[0.02] backdrop-blur-3xl rounded-[50px] border border-white/10 shadow-[0_0_80px_rgba(252,43,42,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                      <div className="relative">
                        <div className="absolute inset-0 blur-3xl bg-[#FC2B2A] opacity-20" />
                        <ShieldCheck className="w-32 h-32 text-[#FC2B2A] relative z-10 drop-shadow-[0_0_15px_rgba(252,43,42,0.6)]" />
                      </div>
                      <motion.div
                        animate={{ x: ["-150%", "150%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent skew-x-35 translate-x-[-150%]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 pb-8 sm:pt-8 sm:pb-12 bg-slate-50 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#1A1040 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />

          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            
            {/* 1. Overview Section (Balanced 2-Column Layout) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-16">
              {/* Left Column - Image Card */}
              <motion.div className="w-full lg:w-5/12 shrink-0 lg:mt-6">
                <div className="relative group">
                  <div className="overflow-hidden rounded-[32px] shadow-2xl relative border border-slate-100 bg-white h-[250px] sm:h-[350px] lg:h-[400px]">
                    <img
                      src="/images/dpdpaaa.avif"
                      alt="DPDP Compliance"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl border border-slate-50 hidden md:block text-aaa-primary text-center">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Service Overview Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-7/12 lg:mt-6"
              >
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#35268F] uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    DPDP <span className="text-[#35268F]">Compliance</span>
                  </h2>
                </div>
                <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium">
                  Achieving DPDP compliance is essential for any organization processing personal data in India under the Digital Personal Data Protection Act, 2023. Compliance requires implementing robust frameworks for lawfulness, valid consent, purpose limitation, data minimization, accuracy, storage limitation, and absolute accountability. Our comprehensive DPDP compliance services enable organizations to seamlessly deploy these safety controls, manage regulatory risks, and establish a privacy-first operational posture.
                </p>
              </motion.div>
            </div>

            {/* 2. Detailed Services Portfolio (Full-Width Symmetrical Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">
                  Compliance Portfolio
                </h3>
                <div className="h-px w-full bg-slate-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dpdpServices.map((service, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:border-aaa-primary/20 transition-all duration-300 group cursor-default shadow-sm text-left items-start"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary group-hover:scale-150 transition-transform shrink-0 mt-2" />
                    <div>
                      <h4 className="text-[17px] font-bold text-[#1A1040] mb-2 uppercase tracking-tight group-hover:text-aaa-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[#60697B] text-[0.95rem] leading-[1.8] font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Consultation Banner / CTA (Full Width baseline) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#35268F]/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-aaa-primary" />
                  <h4 className="text-[#1A1040] font-extrabold uppercase tracking-widest text-[11px]">
                    Secure Readiness
                  </h4>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1040] mb-3 tracking-tight">
                  Not sure where your organisation stands?
                </h3>
                <p className="text-[#60697B] text-[14px] leading-relaxed mb-6 font-medium">
                  Start with a readiness assessment — we'll map your obligations and hand you a clear path forward.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-aaa-primary hover:bg-[#2b1f7a] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all uppercase tracking-wider text-[12px]"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  );
}
