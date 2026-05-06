import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, ShieldCheck } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const valueOptimization = [
  "Establishing the governance, monitoring and control framework",
  "Providing strategic direction for aligning projects with strategic goals and objectives (Enterprise Portfolio management)",
  "Facilitating system selection to align objectives with solutions",
  "Reviewing quality assurance and organizational readiness capabilities people and tools"
];

const frameworks = [
  {
    t: "a) COBIT",
    d: "Control Objectives for Information and Related Technology. It is a framework created by the ISACA (Information Systems Audit and Control Association) for IT governance and management."
  },
  {
    t: "b) Val IT",
    d: "is a governance framework that can be used to create business value from IT investments. It consists of a set of guiding principles and a number of processes and best practices that are further defined as a set of key management practices to support and help executive management and boards at an enterprise level"
  },
  {
    t: "c) Balanced Scorecard",
    d: "Balanced scorecard is a strategy performance management tool – a semistandard structured report, that can be used by managers to keep track of the execution of activities by the staff within their control and to monitor the consequences arising from these actions."
  },
  {
    t: "d) IT & Business Maturity Models",
    d: "Assessment models to evaluate the effectiveness and maturity of IT processes across the enterprise."
  }
];

const governanceInputs = [
  "External Mandates",
  "Strategic Plans",
  "Campus Needs"
];

const governancePillars = [
  "Principles",
  "Policies",
  "Standards",
  "Guidelines",
  "Procedures"
];

export default function ITGovernance() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <main>
        {/* Banner Section (Strictly Matching Master Format) */}
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
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">IT Governance</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">IT</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Governance</span>
                  </h1>
                  <p className="mt-4 text-white/40 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed italic">
                    IT Governance is the system by which IT activities in a Company or enterprise are directed and controlled to achieve business objectives.
                  </p>
                </div>

                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#35268F]/10 blur-[120px] rounded-full animate-pulse" />
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
                    <div className="relative p-12 bg-white/[0.02] backdrop-blur-3xl rounded-[50px] border border-white/10 shadow-[0_0_80px_rgba(53,38,143,0.1)] overflow-hidden">
                      <ShieldCheck className="w-32 h-32 text-[#35268F] relative z-10 drop-shadow-[0_0_15px_rgba(53,38,143,0.6)]" />
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
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
                <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                  <img src="/images/it-governance-hero.png" alt="IT Governance" className="w-full h-[200px] sm:h-[300px] lg:h-[340px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-[#008253]">
                    <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 relative">
                  <div className="p-4 sm:p-6 bg-white border border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-slate-200/50 relative overflow-hidden text-left group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#35268F]/5 blur-3xl opacity-50" />
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#35268F] animate-pulse" />
                      <h3 className="text-xs sm:text-xs font-bold text-slate-400 uppercase tracking-[0.3em] italic">Governance Division</h3>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-50 shadow-inner bg-[#f8fafc] p-1 sm:p-2">
                      <img
                        src="https://www.aaatechnologies.co.in/img/governace.png"
                        alt="IT Governance Division Chart"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Detailed Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-10 sm:mb-12">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-xs text-[#008253] uppercase tracking-widest">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#008253]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    Analytical <span className="text-[#35268F]">Objectives</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[1.05rem] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 border-l-4 border-[#35268F]/10 pl-4 sm:pl-6 py-2 mb-8 sm:mb-10 bg-slate-50/50 pr-4 rounded-r-lg italic shadow-sm leading-relaxed text-sm sm:text-base">
                    "IT governance emphasizes Information Technology Systems, their risk management, and its performance. It ensures that the investments made on IT yield fruitful results, which mitigate IT-associated risks and threats."
                  </p>

                  <div className="mb-12 sm:mb-16">
                    <h3 className="text-xs sm:text-xs font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap mb-6 sm:mb-8 italic">Value Optimization Objectives:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {valueOptimization.map((p, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#35268F] transition-all duration-300 group cursor-default shadow-sm italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#35268F] mt-2 group-hover:bg-white transition-all" />
                          <span className="text-[0.75rem] sm:text-[0.85rem] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-relaxed">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12 sm:mb-20 p-6 sm:p-10 md:p-14 bg-gradient-to-br from-[#0f172a] to-[#0a0a0a] rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#35268F]/10 blur-[130px]" />
                    <div className="relative z-10 text-left">
                      <div className="flex items-center gap-5 mb-8 sm:mb-12">
                        <div className="h-[2px] w-12 sm:w-16 bg-[#35268F]/40 rounded-full" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white italic uppercase tracking-tighter leading-tight font-outfit">
                          Why do you need <br /> <span className="text-[#35268F]">IT Governance?</span>
                        </h3>
                      </div>

                      <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-white p-4 sm:p-8 md:p-10 border border-white/5">
                        <img
                          src="https://www.aaatechnologies.co.in/img/12.png"
                          alt="IT Governance Rationale"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 sm:mb-20">
                    <h3 className="text-xs sm:text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-6 sm:mb-8 italic text-center">Five Core Pillars</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3">
                      {governancePillars.map((pillar, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#35268F] transition-all group cursor-default shadow-sm">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#35268F] transition-colors border border-[#35268F]/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#35268F] group-hover:bg-white" />
                          </div>
                          <span className="text-xs sm:text-xs font-bold uppercase tracking-widest text-slate-800 group-hover:text-white text-center">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 sm:space-y-12">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs sm:text-xs font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap italic">Audit Standards</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {frameworks.map((f, i) => (
                        <div key={i} className="p-6 sm:p-8 bg-white border border-slate-100 rounded-[2rem] hover:bg-[#35268F] transition-all duration-300 group shadow-sm italic">
                          <h5 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg group-hover:text-white transition-colors uppercase tracking-tighter">{f.t}</h5>
                          <p className="text-[0.85rem] sm:text-[0.95rem] font-medium text-slate-500 group-hover:text-white/70 leading-relaxed">{f.d}</p>
                        </div>
                      ))}
                    </div>
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
