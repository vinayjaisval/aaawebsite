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
                <span className="text-white shrink-0 uppercase tracking-widest font-extrabold">IT Governance</span>
              </nav>

              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase italic flex flex-col gap-1 md:gap-2">
                    <span className="leading-[0.8] tracking-tighter">IT</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#00a8ff] font-bold tracking-[0.2em] transition-all">Governance</span>
                  </h1>
                  <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-medium">
                    IT Governance is the system by which IT activities in an enterprise are directed and controlled to achieve business objectives.
                  </p>
                </div>

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
                      <ShieldCheck className="w-32 h-32 text-[#FC2B2A] relative z-10 drop-shadow-[0_0_15px_rgba(252,43,42,0.6)]" />
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
                  <div className="overflow-hidden rounded-[32px] shadow-2xl relative border border-slate-100 bg-white h-[250px] sm:h-[400px] lg:h-[450px]">
                    <img src="/images/it-governance-hero.png" alt="IT Governance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl border border-slate-50 hidden md:block text-aaa-primary text-center">
                    <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
                  </div>
                </div>

                {/* Governance Division Chart (Added back to fill space) */}
                <div className="p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm mb-10 group overflow-hidden">
                  <div className="flex items-center gap-3 font-bold text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-6">
                    <div className="h-[2px] w-8 bg-aaa-primary/20" /> Governance Division
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-50 shadow-inner bg-[#f8fafc] p-2">
                    <img src="https://www.aaatechnologies.co.in/img/governace.png" alt="Chart" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                {/* Five Core Pillars (Institutional Style) */}
                <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-3 font-bold text-[11px] text-slate-400 uppercase tracking-[0.3em] mb-6">
                    <div className="h-[2px] w-8 bg-aaa-primary/20" /> Five Core Pillars
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {governancePillars.map((pillar, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-aaa-primary hover:text-white transition-all group cursor-default shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary group-hover:bg-white" />
                        <span className="text-[13px] font-bold uppercase tracking-widest text-slate-800 group-hover:text-white">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Text Detailed Column (7/12) */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 font-bold text-[11px] text-[#35268F] uppercase tracking-[0.3em]">
                    <div className="h-[1px] w-6 sm:w-8 bg-[#35268F]" /> Service Overview
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase underline decoration-[#35268F]/10 decoration-8 underline-offset-4">
                    IT <span className="text-[#35268F]">Governance</span>
                  </h2>
                </div>

                <div className="text-slate-600 sm:text-[1.05rem] leading-relaxed mb-8">
                  <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-6">
                    IT Governance is the system by which IT activities in a Company or enterprise are directed and controlled to achieve business objectives with the ultimate objective to achieve stakeholder needs.
                  </p>
                  
                  <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-10">
                    IT governance emphasizes Information Technology Systems, their risk management, and its performance. It ensures that the investments made on IT yield fruitful results, which mitigate IT-associated risks and threats.
                  </p>

                  <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-10">
                    IT Governance It can be divided in two parts:
                  </p>
                    
                    <h3 className="text-xl font-extrabold text-[#1A1040] uppercase tracking-tighter mb-8 italic">
                      Why do you need <span className="text-aaa-primary">IT Governance?</span>
                    </h3>
                    <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-xl bg-white p-6 group mb-12">
                      <img src="https://www.aaatechnologies.co.in/img/12.png" alt="Lifecycle" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    {/* Value Optimization Objectives */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Value Optimization</h3>
                        <div className="h-px w-full bg-slate-200" />
                      </div>
                      <p className="text-[#60697B] text-justify leading-[1.8] text-[0.95rem] font-medium mb-6">
                        IT Governance helps to optimize the value of an organization’s IT-enabled investments by:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {valueOptimization.map((p, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-xl hover:bg-aaa-primary hover:text-white hover:shadow-2xl transition-all duration-300 group shadow-sm cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary group-hover:bg-white mt-2 shrink-0 transition-colors" />
                            <span className="text-[13px] font-bold text-slate-700 group-hover:text-white uppercase tracking-tight leading-snug">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
            </div>

            {/* --- AUDIT STANDARDS (Institutional Grid) --- */}
            <div className="mt-20 space-y-10">
              <div className="flex items-center gap-6">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Broadly our Company provides IT Governance audits according to following standards / models:</h3>
                <div className="h-px w-full bg-slate-200" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {frameworks.map((f, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-[0_20px_50px_rgba(53,38,143,0.1)] hover:-translate-y-1 transition-all duration-500 group shadow-sm border-l-4 border-l-aaa-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/[0.02] blur-3xl" />
                    <h5 className="font-extrabold text-[#1A1040] mb-4 uppercase tracking-tighter text-[15px] group-hover:text-aaa-primary transition-colors">{f.t}</h5>
                    <p className="text-[0.95rem] font-medium text-[#60697B] leading-[1.8] text-justify relative z-10">{f.d}</p>
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
