import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Scale, BookOpen, ClipboardCheck } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const investigationDetails = [
  "Analysing computer system crimes.",
  "Recovering data that was either destroyed or damaged.",
  "Gathering evidence.",
  "Gathering computer system information.",
  "Maximizing optimal computer system performance levels.",
  "Reconstructing damaged computer systems.",
  "Preparing expert reports on highly complex technical matters.",
  "Testifying in court.",
  "Training law enforcement on computer related issues.",
  "Draft expert testimony, affidavits, and reports.",
  "Consult with clients, supervisors, and managers.",
  "Continually develop forensic skills through outside research and training.",
  "Recover password protected/encrypted files and hidden information.",
  "Convert recovered files and information into a format that is compatible with a corporation’s needs.",
  "Assess software applications for design flaws.",
  "Identify and recommend methods for preservation and presentation of computer evidence.",
  "An ability to work and collaborate well with a team."
];

export default function ITAssuranceCompliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <HeaderUtilityBar />
      <Header />

      <main>
        {/* Banner Section (Standard Master Format) */}
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
                <span className="text-aaa-primary font-black">IT Assurance & Compliance</span>
              </nav>

              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight uppercase italic">
                  IT Assurance & <br /><span className="text-aaa-primary underline decoration-aaa-secondary decoration-4 underline-offset-8 transition-all">Compliance</span>
                </h1>
                <p className="mt-4 text-white/40 text-base md:text-lg max-w-2xl leading-relaxed">
                  Optimizing IT-enabled investments and ensuring strict adherence to IS policies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section (Side-by-Side) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* Sidebar Image */}
              <motion.div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl relative border border-slate-100 bg-white">
                    <img 
                      src="/images/it-assurance-hero.png" 
                      alt="IT Assurance & Compliance" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl rounded-xl border border-slate-50 hidden md:block text-aaa-primary">
                     <Scale className="w-10 h-10" />
                  </div>
                </div>

                <div className="mt-16 p-8 bg-slate-50/80 border border-slate-100 rounded-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/5 blur-3xl opacity-50" />
                   <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tighter italic">Regulatory Excellence</h3>
                   <p className="text-sm text-slate-600 leading-relaxed font-medium">
                     Meeting regulatory mandates through specialized IS adherence protocols.
                   </p>
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-7/12">
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-4 font-black text-[10px] text-aaa-secondary uppercase tracking-[0.4em]">
                    <div className="h-[1px] w-8 bg-aaa-secondary" /> Detailed Services
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                    Broad <span className="text-aaa-primary">Assurance Scope</span>
                  </h2>
                </div>
                
                <div className="text-slate-600 text-[17px] leading-relaxed mb-12">
                  <div className="space-y-16">
                     {/* a) BCP */}
                     <div className="space-y-8">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-aaa-primary/10 flex items-center justify-center text-aaa-primary font-bold text-lg">A</div>
                           <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter italic">Business Continuity Planning</h3>
                        </div>
                        <p className="font-medium text-slate-800 border-l-4 border-aaa-primary/20 pl-6 py-2 mb-8 bg-slate-50/50 pr-4 rounded-r-lg italic shadow-sm leading-relaxed">
                           "Creating a prevention and recovery system from potential threats such as natural disasters."
                        </p>
                        
                        <div className="mt-8 p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-48 h-48 bg-aaa-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                           <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 text-center italic">BCP Life Cycle Procedure</h4>
                           <img src="/images/bcp-lifecycle-original.png" alt="BCP Life Cycle" className="max-w-full h-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                     </div>

                     {/* b) Crime Investigations */}
                     <div className="space-y-12 pt-16 border-t border-slate-100">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-aaa-primary/10 flex items-center justify-center text-aaa-primary font-bold text-lg">B</div>
                           <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter italic">Computer Crime Investigations</h3>
                        </div>

                        <div className="space-y-12">
                          <div className="flex items-center gap-6">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Investigation details</h3>
                            <div className="h-px w-full bg-slate-100" />
                          </div>

                          <motion.div 
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                            initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="grid sm:grid-cols-2 gap-4"
                          >
                            {investigationDetails.map((detail, i) => (
                              <motion.div 
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-aaa-neutral/30 group-hover:bg-white transition-all" />
                                <span className="text-[13px] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-snug">{detail}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                     </div>

                     {/* c & d */}
                     <div className="grid sm:grid-cols-2 gap-6 pt-16 border-t border-slate-100">
                        <div className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] group hover:bg-slate-50 transition-all">
                           <div className="flex items-center gap-4 mb-4">
                              <BookOpen className="w-8 h-8 text-aaa-primary" />
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 italic">C) IT Training</h3>
                           </div>
                           <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-relaxed">Regular specialized training in IT frameworks.</p>
                        </div>
                        <div className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] group hover:bg-slate-50 transition-all">
                           <div className="flex items-center gap-4 mb-4">
                              <ClipboardCheck className="w-8 h-8 text-aaa-primary" />
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 italic">D) IS Compliance</h3>
                           </div>
                           <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-relaxed">Strict adherence to IS policies.</p>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-[#0a0a0a] relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10 text-center">
             <h3 className="text-3xl md:text-5xl font-black text-white mb-8 italic uppercase tracking-tighter">Ensure Your <span className="text-aaa-primary">Continuity.</span></h3>
             <button className="bg-aaa-primary hover:bg-aaa-primary/90 text-white px-12 py-4.5 font-bold uppercase tracking-widest rounded-sm text-sm transition-all shadow-xl">Consult Our Experts</button>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
