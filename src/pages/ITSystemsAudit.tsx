import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const auditTypes = [
  "Operating System Audit",
  "Firewall Audit",
  "Forensic Audit",
  "Web Application Audit",
  "ATM Audit",
  "Internet Banking Audit",
  "Performance Auditing",
  "Data base Audit",
  "IDS Audit",
  "Networking Audit",
  "Data Center Audit",
  "ERP Audit",
  "Core Banking Audit",
  "Application systems – Functional review",
  "Data Migration Audit",
  "Mobile Penetration Testing",
  "Vulnerability Assessment & Penetration Testing",
  "Compliance with IS policies & procedure",
  "Compliance with various Regulatory Requirements such as UIDAI, RBI, SEBI, NPCI"
];

export default function ITSystemsAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">

      <main>
        <section className="relative pt-24 pb-12 sm:pb-16 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
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
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">IT Systems Audit</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">IT Systems</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Audit</span>
                  </h1>
                  <p className="mt-4 text-white/40 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                    Safeguarding assets and maintaining data integrity through
                    strict management controls and infrastructure assessment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-12 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

              {/* Sidebar Image Column */}
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl relative border border-slate-100 bg-white h-[200px] sm:h-[300px] lg:h-[340px]">
                    <img
                      src="/images/system-audit-official.png"
                      alt="IT System Audit"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-[#35268F]">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-slate-50/80 border border-slate-100 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#35268F]/5 blur-3xl" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-tighter">Objective Assessment</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Providing independent assurance that systems are operating effectively and safeguarding assets through comprehensive management control examination.
                  </p>
                </div>
              </motion.div>

              {/* Text Detailed Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-10 sm:mb-12">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-xs text-[#35268F] uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    IT Systems <span className="text-[#35268F]">Audit</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[1.05rem] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 mb-8 sm:mb-10 text-sm sm:text-base border-l-4 border-[#35268F]/10 pl-4 sm:pl-6 py-2 bg-slate-50/30 rounded-r-xl leading-relaxed italic shadow-sm">
                    "It is an examination of the checks and balances or controls within an Information technology (IT) infrastructure. The examination of an information system (IS) allows an organization to evaluate the system's ability to protect its assets and maintain data integrity and to find out if these activities are aligned with the enterprise's goals or objectives."
                  </p>

                  <p className="mb-8 sm:mb-10 text-sm sm:text-base">
                    AAA Technologies Limited provides a comprehensive IT Systems audit to ensure that your IT infrastructure is secure, compliant, and operating at peak performance.
                  </p>

                  <div className="space-y-8 mt-12 sm:mt-16">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Audit Portfolio</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.05 } }
                      }}
                      initial="hidden" whileInView="show" viewport={{ once: true }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    >
                      {auditTypes.map((type, i) => (
                        <motion.div
                          key={i}
                          variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                          className="flex items-center gap-4 p-4 sm:p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#35268F] transition-all duration-300 group cursor-default shadow-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#35268F]/30 group-hover:bg-white transition-all" />
                          <span className="text-[0.75rem] sm:text-[0.85rem] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-snug">{type}</span>
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

    </div>
  );
}
