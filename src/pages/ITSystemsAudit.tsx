import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
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
      <HeaderUtilityBar />
      <Header />

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
              <nav className="flex items-center gap-2 mb-8 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/40 overflow-x-auto no-scrollbar whitespace-nowrap">
                <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-white/20 shrink-0">Services</span>
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
                <span className="text-aaa-primary uppercase tracking-widest shrink-0">IT System Audit</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">IT Systems</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-aaa-primary opacity-70 font-bold tracking-[0.2em] transition-all">Audit</span>
                  </h1>
                  <p className="mt-4 text-white/40 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                    Safeguarding assets and maintaining data integrity through
                    strict management controls and infrastructure assessment.
                  </p>
                </div>

                {/* The "Sundar" Magnetic Shield Emblem - Absolute Positioned */}
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-aaa-primary/10 blur-[120px] rounded-full animate-pulse" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[400px] h-[400px] border border-white/[0.03] rounded-full"
                    />
                  </div>

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotateX: [5, -5, 5],
                      rotateY: [10, -10, 10]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <div className="relative p-12 bg-white/[0.02] backdrop-blur-3xl rounded-[50px] border border-white/10 shadow-[0_0_80px_rgba(252,43,42,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                      <div className="relative">
                        <div className="absolute inset-0 blur-3xl bg-aaa-primary opacity-20" />
                        <ShieldCheck className="w-32 h-32 text-aaa-primary relative z-10 drop-shadow-[0_0_15px_rgba(252,43,42,0.6)]" />
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
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-aaa-primary">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-slate-50/80 border border-slate-100 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/5 blur-3xl" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-tighter">Objective Assessment</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Providing independent assurance that systems are operating effectively and safeguarding assets through comprehensive management control examination.
                  </p>
                </div>
              </motion.div>

              {/* Text Detailed Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-10 sm:mb-12">
                  <div className="flex items-center gap-2 font-bold text-[10px] sm:text-xs text-aaa-secondary uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-aaa-secondary" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                    IT Systems <span className="text-aaa-primary">Audit</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[17px] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 mb-8 sm:mb-10 text-sm sm:text-base border-l-4 border-aaa-primary/10 pl-4 sm:pl-6 py-2 bg-slate-50/30 rounded-r-xl leading-relaxed italic shadow-sm">
                    "It is an examination of the checks and balances or controls within an Information technology (IT) infrastructure. The examination of an information system (IS) allows an organization to evaluate the system's ability to protect its assets and maintain data integrity and to find out if these activities are aligned with the enterprise's goals or objectives."
                  </p>

                  <p className="mb-8 sm:mb-10 text-sm sm:text-base">
                    AAA Technologies Limited provides a comprehensive IT Systems audit to ensure that your IT infrastructure is secure, compliant, and operating at peak performance.
                  </p>

                  <div className="space-y-8 mt-12 sm:mt-16">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Audit Portfolio</h3>
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
                          className="flex items-center gap-4 p-4 sm:p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-aaa-neutral/30 group-hover:bg-white transition-all" />
                          <span className="text-[11px] sm:text-[13px] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-snug">{type}</span>
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

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
