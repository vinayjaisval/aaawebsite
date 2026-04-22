import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, ShieldCheck } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
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
      <HeaderUtilityBar />
      <Header />

      <main>
        {/* Banner Section (Strictly Matching Master Format) */}
        <section className="relative pt-24 pb-16 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aaa-primary/5 blur-[120px] rounded-full" />
            <motion.div
              initial={{ backgroundPosition: "0 0" }} animate={{ backgroundPosition: "0 40px" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: `linear-gradient(to bottom, white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav className="flex items-center gap-2 mb-8 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span className="text-white/20">Services</span>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span className="text-aaa-primary uppercase tracking-widest font-black">IT Governance</span>
              </nav>              <div className="relative">
                <div className="max-w-4xl relative z-10">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase italic whitespace-nowrap">
                    IT <span className="text-2xl md:text-4xl text-aaa-primary opacity-70 font-bold ml-6 tracking-widest transition-all">Governance</span>
                  </h1>
                  <p className="mt-4 text-white/40 text-base md:text-lg max-w-2xl leading-relaxed line-clamp-2">
                    IT Governance is the system by which IT activities in a Company or enterprise are directed and controlled to achieve business objectives with the ultimate objective to achieve stakeholder needs.
                  </p>
                </div>

                {/* The "Sundar" Magnetic Shield Emblem - Absolute Positioned to preserve layout */}
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:flex items-center justify-center w-[500px] h-[500px] pointer-events-none">
                  {/* Atmospheric Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-aaa-primary/10 blur-[120px] rounded-full animate-pulse" />

                  {/* Multi-Layered Tech Rings */}
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
                    {/* The Main Shield Card */}
                    <div className="relative p-12 bg-white/[0.02] backdrop-blur-3xl rounded-[50px] border border-white/10 shadow-[0_0_80px_rgba(252,43,42,0.1)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                      <div className="relative">
                        <div className="absolute inset-0 blur-3xl bg-aaa-primary opacity-20" />
                        <ShieldCheck className="w-32 h-32 text-aaa-primary relative z-10 drop-shadow-[0_0_15px_rgba(252,43,42,0.6)]" />
                      </div>

                      {/* Light Sweep */}
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
                    <img src="/images/it-governance-hero.png" alt="IT Governance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-aaa-secondary">
                    <TrendingUp className="w-10 h-10" />
                  </div>
                </div>                <div className="mt-16 relative">
                  <div className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 relative overflow-hidden text-left group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/5 blur-3xl opacity-50" />
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary animate-pulse" />
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] italic">Governance Division</h3>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-slate-50 shadow-inner bg-[#f8fafc] p-2">
                      <img
                        src="https://www.aaatechnologies.co.in/img/governace.png"
                        alt="IT Governance Division Chart"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-center px-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Framework</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="w-1 h-1 rounded-full bg-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Detailed Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-2 font-bold text-xs text-aaa-secondary uppercase tracking-widest">
                    <div className="h-[1px] w-8 bg-aaa-secondary" /> Service Overview
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                    Analytical <span className="text-aaa-primary">Objectives</span>
                  </h2>
                </div>

                <div className="text-slate-600 text-[17px] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 border-l-4 border-aaa-primary/20 pl-6 py-2 mb-10 bg-slate-50/50 pr-4 rounded-r-lg italic shadow-sm leading-relaxed">
                    "IT governance emphasizes Information Technology Systems, their risk management, and its performance. It ensures that the investments made on IT yield fruitful results, which mitigate IT-associated risks and threats."
                  </p>

                  <div className="mb-20">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap mb-8 italic">Value Optimization Objectives:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {valueOptimization.map((p, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary mt-2 group-hover:bg-white transition-all" />
                          <span className="text-[13px] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-relaxed">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-24 p-8 md:p-14 bg-gradient-to-br from-[#0f172a] to-[#0a0a0a] rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-aaa-primary/10 blur-[130px] group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-aaa-secondary/5 blur-[100px]" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-12">
                        <div className="h-[2px] w-16 bg-aaa-primary/40 rounded-full" />
                        <h3 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-none font-outfit">
                          Why do you need <br className="md:hidden" /><span className="text-aaa-primary">IT Governance?</span>
                        </h3>
                      </div>

                      <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-[0_40px_80px_rgba(0,0,0,0.5)] p-6 md:p-12 border border-white/5 transform transition-all duration-1000 group-hover:scale-[1.01] group-hover:rotate-[0.5deg]">
                        <img
                          src="https://www.aaatechnologies.co.in/img/12.png"
                          alt="IT Governance Rationale Chart"
                          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                        />
                        {/* Decorative framing */}
                        <div className="absolute inset-0 border-[16px] border-white pointer-events-none rounded-[2rem]" />
                        <div className="absolute inset-[16px] border border-slate-100 pointer-events-none rounded-[1.2rem]" />
                      </div>

                      <div className="mt-10 flex items-center justify-center gap-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em] italic">Institutional Excellence Framework</p>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-20">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8 italic text-center">Five Core Pillars of IT Governance</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                      {governancePillars.map((pillar, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#0f172a] hover:border-[#0f172a] transition-all group cursor-default shadow-sm">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-aaa-primary transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary group-hover:bg-white transition-colors" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 group-hover:text-white transition-colors text-center">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap italic">Audit Standards & Models</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <div className="space-y-6">
                      {frameworks.map((f, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm hover:shadow-2xl">
                          <h5 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-aaa-primary transition-colors italic uppercase tracking-tighter border-b border-transparent group-hover:border-aaa-primary/20 pb-2 inline-block leading-none">{f.t}</h5>
                          <p className="text-[15px] font-medium text-slate-500 group-hover:text-white/70 leading-relaxed italic">{f.d}</p>
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

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
