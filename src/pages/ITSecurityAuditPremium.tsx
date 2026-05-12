import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Lock, ShieldCheck } from "lucide-react";

const auditTypes = [
  "Vulnerability and Penetration Testing",
  "Mobile Penetration Testing",
  "Application systems – Security review",
  "Review of IS Controls",
  "BS 7799/ ISO 27001 Implementation",
  "Formation of IS Security Policy",
  "Compliance with IS policies and procedures"
];

export default function ITSecurityAuditPremium() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#35268F]/10 overflow-x-hidden">

      <main>
        {/* Banner Section (Matched with IT Systems Audit) */}
        <section className="relative pt-20 pb-10 sm:pb-12 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aaa-primary/5 blur-[120px] rounded-full" />
            <motion.div
              initial={{ backgroundPosition: "0 0" }} animate={{ backgroundPosition: "0 40px" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: `linear-gradient(to bottom, white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav className="flex items-center gap-2 mb-8 text-xs sm:text-[0.75rem] font-bold uppercase tracking-widest text-white/50 overflow-x-auto no-scrollbar whitespace-nowrap">
                <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white shrink-0 uppercase tracking-widest">Services</span>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">IT Security Audit</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">IT Security</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Audit</span>
                  </h1>
                  <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-medium">
                    It is an audit on the level of information security in an organization. Most commonly the controls being audited can be categorized to technical, physical and administrative.
                  </p>
                </div>

                {/* The "Sundar" Magnetic Shield Emblem */}
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-aaa-primary/10 blur-[120px] rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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

        <section className="py-8 sm:py-12 bg-slate-50 relative overflow-hidden">
          {/* Subtle Institutional Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1040 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Sidebar Column (Standard 5/12) */}
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
                <div className="relative group">
                  <div className="overflow-hidden rounded-[32px] shadow-2xl relative border border-slate-100 bg-white h-[200px] sm:h-[300px] lg:h-[340px]">
                    <img
                      src="/images/it-security-914.jpg"
                      alt="IT Security Audit"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl border border-slate-50 hidden md:block text-aaa-primary text-center">
                    <Lock className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
                  </div>
                </div>
              </motion.div>

              {/* Text Column (Standard 7/12) */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#35268F] uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    Security <span className="text-[#35268F]">Assessment</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[1.05rem] leading-relaxed mb-8">
                  <div className="space-y-4 mb-8">
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium">
                      Auditing information security covers topics from auditing the physical security of data centers to auditing the logical security of databases and highlights key components to look for and different methods for auditing these areas. When centered on the IT aspects, it encompasses much more than just Information Technology.
                    </p>
                  </div>

                  {/* Audit Principles (Clean Style, No Box) */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 font-bold text-xs text-slate-400 uppercase tracking-[0.3em] mb-4">
                      <div className="h-[2px] w-10 bg-slate-200" /> Audit Principles
                    </div>
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-6">
                      Conducted on the following basic Principles of audit:
                    </p>
                    <div className="flex justify-center p-4 sm:p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                      <img src="/images/it-security-11.png" alt="Principles Diagram" className="max-w-full h-auto opacity-95" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --- COMPACT AUDIT PORTFOLIO --- */}
            <div className="mt-8 sm:mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Audit Portfolio</h3>
                <div className="h-px w-full bg-slate-200" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {auditTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-xl hover:shadow-2xl hover:border-aaa-primary/20 transition-all duration-300 group cursor-default shadow-sm text-left">
                    <div className="w-1 h-1 rounded-full bg-aaa-primary group-hover:scale-150 transition-transform" />
                    <span className="text-[13px] font-bold text-slate-700 uppercase tracking-tight leading-snug">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
