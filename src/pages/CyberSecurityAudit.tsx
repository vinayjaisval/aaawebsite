import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

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
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">Cyber Security Audit</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">Cyber Security</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Audit</span>
                  </h1>
                  <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-medium">
                    The objective is to provide Management with an assessment of an organization's cyber security Policies and procedures and identify Regulatory deficiencies.
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

              {/* Sidebar Column (5/12 to fix left space) */}
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
                <div className="relative group mb-10">
                  <div className="overflow-hidden rounded-[32px] shadow-2xl relative border border-slate-100 bg-white h-[250px] sm:h-[350px] lg:h-[450px]">
                    <img src="/images/cyber-security-official.png" alt="Cyber Security Audit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl border border-slate-50 hidden md:block text-aaa-primary text-center">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
                  </div>
                </div>

                {/* Scope of Audit (Moved to Sidebar to fill space) */}
                <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-3 font-bold text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-6">
                    <div className="h-[2px] w-8 bg-aaa-primary/20" /> Scope of Audit
                  </div>
                  <ul className="space-y-4">
                    {["Data security policies", "Data loss prevention", "Network access controls", "Detection/prevention systems", "Physical & logical controls", "Incident response program"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#60697B] text-[0.85rem] font-bold uppercase tracking-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Text Detailed Column (7/12) */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#35268F] uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    Cyber Security <span className="text-[#35268F]">Audit</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[1.05rem] leading-relaxed mb-8">
                  <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-8">
                    The objective of a cyber security audit is to provide Management with an assessment of an organization’s cyber security Policies and procedures and their operating effectiveness. Additionally, cyber security audits identify internal control and Regulatory deficiencies that could put the organization at risk.
                  </p>

                  {/* Primary Security Issues List */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3 font-bold text-[11px] text-slate-400 uppercase tracking-[0.3em] mb-4">
                      <div className="h-[2px] w-10 bg-slate-200" /> Primary security and control issues
                    </div>
                    <ul className="space-y-3 mb-8">
                      {["Protection of sensitive data and intellectual property", "Protection of networks to which multiple information resource are connected", "Responsibility and accountability for the device and information contained in it"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#60697B] text-[0.95rem] font-medium leading-[1.8]">
                          <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* NIST Paragraph */}
                  <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-10 border-l-4 border-slate-100 pl-6 italic">
                    There are many approaches available for specifying cyber security control environments, such as NIST Special Publication (SP)800-53 Revision 4. SP 800-53 provides guidelines for selecting and specifying security controls for information systems supporting executive agencies of the federal government.
                  </p>

                  <h3 className="text-xl font-extrabold text-[#1A1040] mb-6 uppercase tracking-tight">An Audit in Three Parts</h3>
                  
                  {/* Part a) Management */}
                  <div className="mb-8">
                    <h4 className="text-[13px] font-extrabold text-[#35268F] uppercase tracking-wider mb-2">a) Management</h4>
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium">
                      Management ultimately owns the risk decisions made for the organization. Therefore, it has a vested interest in ensuring that cyber security controls exist and are operating effectively. Decisions are typically made based on guidance received during the risk management processes.
                    </p>
                  </div>

                  {/* Part b) Risk Management */}
                  <div className="mb-8">
                    <h4 className="text-[13px] font-extrabold text-[#35268F] uppercase tracking-wider mb-2">b) Risk Management</h4>
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-4">
                      Risk assessments are typically made based on guidance by the security officer at an organization. The objective in any risk assessment is twofold: to communicate the state of the risk clearly and to identify ways in which to address and mitigate that risk.
                    </p>
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium">
                      The risk landscape is ever-changing. It is important to have defined processes, trained resources, and a governance framework to ensure appropriate actions are carried out to address current and emerging threats.
                    </p>
                  </div>

                  {/* Part c) Internal Audit */}
                  <div className="mb-10">
                    <h4 className="text-[13px] font-extrabold text-[#35268F] uppercase tracking-wider mb-2">c) Internal Audit</h4>
                    <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium">
                      Auditing is a critical security measure in today's global digital economy. The internal audit department plays a vital role by providing an objective evaluation of controls and making recommendations to improve them, assisting senior management and the board in understanding cyber risks.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --- SERVICES PROVIDED (Full Width Grid) --- */}
            <div className="mt-8 space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Services Provided</h3>
                <div className="h-px w-full bg-slate-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-white border border-slate-100 rounded-xl hover:shadow-2xl hover:border-aaa-primary/20 transition-all duration-300 group cursor-default shadow-sm text-left">
                    <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary group-hover:scale-150 transition-transform" />
                    <span className="text-[13px] font-bold text-slate-700 uppercase tracking-tight leading-snug">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <BackToTop />
    </div>
  );
}
