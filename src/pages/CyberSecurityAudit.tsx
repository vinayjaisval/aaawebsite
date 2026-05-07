import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const securityIssues = [
  "Protection of sensitive data and intellectual property",
  "Compliance with applicable laws and regulations",
  "Integrity of business processes",
  "Availability of critical business processes"
];

const auditParts = [
  {
    t: "a) Management",
    d: "Management ultimately owns the risk decisions made for the organization. Therefore, it has a vested interest in ensuring that cyber security controls exist and are operating effectively. Decisions are typically made based on guidance received during the risk management processes, on the appropriate direction to take."
  },
  {
    t: "b) Risk Management",
    d: "The objective in any risk assessment is twofold. First, it is critical to communicate the state of the risk so that it is easy to understand and be clear on the level of risk involved. Secondly, and just as significantly the ways in which to address that risk must be identified as well. This provides both problem and solution, and mitigates the negative impact of that risk to an enterprise. The risk landscape is ever-changing. It is important to have defined processes, trained and competent cyber security resources, and a governance framework to ensure that appropriate actions are carried out by enterprise leadership and managed effectively to address current and emerging threats."
  },
  {
    t: "c) Internal Audit",
    d: "Auditing is a security measure. It is critical to protecting an enterprise in today's global digital economy. The internal audit department plays a vital role in cyber security auditing in many organizations, and often has a dotted-line reporting relationship to the audit committee to ensure an independent view is being communicated at the board level of the enterprise."
  }
];

const services = [
  "Formation of Cyber Security Policies",
  "Formation of Cyber Security Procedures",
  "Formation of Crisis Management Plan (CCMP)",
  "Compliance to Regulatory Guidance for Cyber security"
];

export default function CyberSecurityAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#35268F]/10 transition-colors">
      <main>
        {/* Banner Section (Premium Responsive Layout) */}
        <section className="relative pt-20 pb-10 sm:pb-12 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#35268F]/5 blur-[120px] rounded-full" />
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
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">Cyber Security Audit</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">Cyber Security</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Audit</span>
                  </h1>
                  <p className="mt-4 text-white/40 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                    The objective is to provide Management with an assessment of an organization’s cyber security Policies and procedures and their operating effectiveness.
                  </p>
                </div>

                {/* The "Sundar" Magnetic Shield Emblem */}
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FC2B2A]/10 blur-[120px] rounded-full animate-pulse" />
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

        {/* Content Section (Side-by-Side Layout) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Sidebar Image Column */}
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl relative border border-slate-100 bg-white h-[250px] sm:h-[300px] lg:h-[340px]">
                    <img src="/images/cyber-security-official.png" alt="Cyber Security Audit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-[#35268F]">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                </div>

                <div className="mt-16 p-8 bg-slate-50/80 border border-slate-100 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#35268F]/5 blur-3xl opacity-50" />
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tighter italic">Objective</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium transition-colors">Cyber security audits identify internal control and Regulatory deficiencies that could put the organization at risk.</p>
                </div>
              </motion.div>

              {/* Text Detailed Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#35268F] uppercase tracking-widest">
                    <div className="h-[1px] w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    Security <span className="text-[#35268F]">& Control</span>
                  </h2>
                </div>

                <div className="text-slate-600 text-[1.05rem] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 border-l-4 border-[#35268F]/20 pl-6 py-2 mb-10 bg-slate-50/50 pr-4 rounded-r-lg italic shadow-sm leading-relaxed">"Auditing is a critical security measure to protecting an enterprise in today’s global digital economy."</p>

                  <h3 className="text-xl font-bold text-slate-900 mt-12 mb-8 uppercase tracking-tighter italic underline decoration-[#35268F]/10 decoration-4 underline-offset-4">An Audit in Three Parts</h3>
                  <div className="space-y-6 mb-16">
                    {auditParts.map((item, idx) => (
                      <div key={idx} className="p-8 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-[#35268F] transition-all group cursor-default shadow-sm hover:shadow-xl">
                        <h4 className="font-bold mb-3 uppercase text-[0.75rem] tracking-widest text-[#35268F] group-hover:text-white transition-all">{item.t}</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed group-hover:text-white transition-all italic">{item.d}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-12 mb-16">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap italic">Primary Security Issues</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
                      {securityIssues.map((type, i) => (
                        <motion.div key={i} variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#35268F] transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-white transition-all" />
                          <span className="text-[0.85rem] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-relaxed">{type}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap italic">Services Provided</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
                      {services.map((type, i) => (
                        <motion.div key={i} variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#35268F] transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-white transition-all" />
                          <span className="text-[0.85rem] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-relaxed">{type}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <BackToTop />
    </div>
  );
}
