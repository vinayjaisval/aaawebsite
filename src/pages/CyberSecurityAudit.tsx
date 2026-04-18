import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const controls = [
  "Data security policies relating to the network, database and applications in place",
  "Data loss prevention measures deployed",
  "Effective network access controls implemented",
  "Detection/prevention systems deployed",
  "Security controls established (physical and logical)",
  "Incident response program implemented"
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <HeaderUtilityBar />
      <Header />

      <main>
        {/* Banner Section */}
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
                <span className="text-aaa-primary uppercase tracking-widest font-black">Cyber Security Audit</span>
              </nav>

              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight uppercase italic">
                  Cyber Security <span className="text-aaa-primary underline decoration-aaa-secondary decoration-4 underline-offset-8 transition-all">Audit</span>
                </h1>
                <p className="mt-4 text-white/40 text-base md:text-lg max-w-2xl leading-relaxed">
                  Holistic assessment of security frameworks to identify control deficiencies 
                  within your digital infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl relative border border-slate-100 bg-white">
                    <img src="/images/cyber-security-official.png" alt="Cyber Security Audit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-aaa-primary">
                     <ShieldCheck className="w-10 h-10" />
                  </div>
                </div>

                <div className="mt-16 p-8 bg-slate-50/80 border border-slate-100 rounded-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/5 blur-3xl" />
                   <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tighter">Strategic Review</h3>
                   <p className="text-sm text-slate-600 leading-relaxed font-medium">Strategic contribution of risk management and internal audit to cyber security success.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-2 font-bold text-xs text-aaa-secondary uppercase tracking-widest">
                    <div className="h-[1px] w-8 bg-aaa-secondary" /> Service Overview
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                    Control <span className="text-aaa-primary">Environments</span>
                  </h2>
                </div>
                
                <div className="text-slate-600 text-[17px] leading-relaxed mb-12">
                  <p className="font-medium text-slate-800 border-l-4 border-aaa-primary/20 pl-6 py-2 mb-10 bg-slate-50/50 pr-4 rounded-r-lg italic shadow-sm">"Protecting the digital frontier through objective appraisal of the control environment."</p>

                  <h3 className="text-xl font-bold text-slate-900 mt-12 mb-8 uppercase tracking-tighter italic underline decoration-aaa-primary/10 decoration-4 underline-offset-4">Audit Parts</h3>
                  <div className="space-y-6 mb-16">
                    {[
                      { t: "A) Management", d: "Owns risk decisions and ensures controls operate effectively." },
                      { t: "B) Risk Management", d: "Communicates the state of risk and addresses the threat landscape." },
                      { t: "C) Internal Audit", d: "Provides independent appraisal and reports to the board." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-[#0f172a] transition-all group cursor-default shadow-sm hover:shadow-xl">
                        <h4 className="font-bold mb-2 uppercase text-[11px] tracking-widest text-aaa-primary transition-all">{item.t}</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed group-hover:text-white transition-all">{item.d}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Specific Controls</h3>
                      <div className="h-px w-full bg-slate-100" />
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
                      {controls.map((type, i) => (
                        <motion.div key={i} variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-aaa-neutral/30 group-hover:bg-white transition-all" />
                          <span className="text-[13px] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-snug">{type}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section className="py-28 bg-[#0a0a0a] relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10 text-center">
             <h3 className="text-3xl md:text-5xl font-black text-white mb-8 italic uppercase tracking-tighter">Secure Your <span className="text-aaa-primary">Infrastructure.</span></h3>
             <button className="bg-aaa-primary hover:bg-aaa-primary/90 text-white px-12 py-4.5 font-bold uppercase tracking-widest rounded-sm text-sm transition-all shadow-xl">Consult Our Experts</button>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
