import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { BarChart3, ShieldCheck, Globe2, Layers, Briefcase, Cpu, Landmark, HeartPulse, ShieldAlert, ArrowRight, Target, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const industriesRecap = [
  { name: "Banking", icon: Landmark },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Financial Institutions", icon: BarChart3 },
  { name: "NBFCs", icon: Layers },
  { name: "Regulatory Bodies", icon: Globe2 },
  { name: "Government", icon: Briefcase },
  { name: "Municipalities", icon: Landmark },
  { name: "Corporations", icon: Cpu },
  { name: "Payment Gateways", icon: ShieldAlert },
  { name: "Stock Brokers", icon: BarChart3 },
  { name: "Education", icon: Briefcase },
  { name: "Travel and Transport", icon: Globe2 },
  { name: "Hospitality", icon: HeartPulse },
  { name: "Manufacturing", icon: Cpu },
  { name: "Infrastructure", icon: Layers },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Information Technology", icon: Cpu },
  { name: "ITeS", icon: Cpu },
  { name: "Ports", icon: Globe2 },
  { name: "Power", icon: Cpu },
  { name: "Trading Corporations", icon: Briefcase },
  { name: "Entertainment", icon: Globe2 },
  { name: "E-Tendering", icon: ShieldCheck },
  { name: "Defense", icon: ShieldAlert },
  { name: "Refineries", icon: Cpu }
];

const AnimatedModule = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black transition-colors overflow-x-hidden font-sans selection:bg-aaa-primary/10 relative">
      {/* --- INSTITUTIONAL ARCHITECTURAL WATERMARK --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02] sm:opacity-[0.03] select-none grayscale font-black text-black">
        <div className="absolute top-[10%] left-[-15%] sm:left-[-5%] text-[50vw] sm:text-[30vw] leading-none rotate-[-10deg]">AAA</div>
        <div className="absolute bottom-[20%] right-[-15%] sm:right-[-5%] text-[30vw] sm:text-[20vw] leading-none rotate-[15deg]">TECH</div>
      </div>

      {/* --- FLOATING INSTITUTIONAL SIDE-INDEX --- */}
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6 items-end group/nav text-black">
        {[
          { label: "Overview", id: "hero" },
          { label: "History", id: "chronicle" },
          { label: "Expertise", id: "stats" },
          { label: "Ecosystem", id: "ecosystem" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group/item cursor-pointer">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-0 group-hover/item:opacity-100 group-hover/nav:opacity-40 transition-all text-slate-400">
              {item.label}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-aaa-primary group-hover/item:scale-150 transition-all duration-300" />
          </div>
        ))}
      </div>

      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-slate-100 transition-all duration-300">
        <Header />
      </div>

      <main className="relative z-10">

        <section id="hero">
          {/* --- 1. BALANCED HERO (Mobile Optimized) --- */}
          <section className="relative min-h-[40vh] sm:min-h-[50vh] py-12 sm:py-16 flex items-center bg-white border-b border-slate-50 overflow-hidden group/hero text-black">
            <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex flex-col space-y-6 sm:space-y-8">
                      {/* INSTITUTIONAL BREADCRUMB */}
                      <nav className="flex items-center gap-2 mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                        <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-[10px]">Home</Link>
                        <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                        <span className="text-aaa-primary uppercase tracking-[0.4em]">Overview</span>
                      </nav>
                      <h1 className="text-black uppercase tracking-tight font-black text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                        Enabling <br /> <span className="text-aaa-primary not-italic">Organizations</span>
                      </h1>
                      <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-slate-600 leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-4xl italic font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                        To Identify Issues Of Cyber Security & IT Corporate Governance And Providing
                        <span className="not-italic text-aaa-primary font-black uppercase tracking-widest text-[12px] sm:text-[14px] block mt-4 tracking-[0.2em]">Accurate | Reliable | Innovative Services</span>
                      </div>
                    </div>
                </motion.div>

                {/* THE REVERTED STABLE LOGO GRAPHIC (SVG version) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex justify-center relative scale-75 sm:scale-90 lg:scale-100"
                >
                  <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
                    <div className="absolute inset-[-30px] sm:inset-[-40px] bg-aaa-primary/5 blur-[80px] sm:blur-[100px] rounded-full animate-pulse-slow" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-slate-100 rounded-[50px] opacity-40 shadow-[0_0_20px_rgba(0,0,0,0.05)]" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute inset-[25px] sm:inset-[30px] border border-aaa-primary/10 rounded-[50px] shadow-[0_0_40px_rgba(252,43,42,0.05)]" />

                    <div className="absolute inset-[40px] sm:inset-[50px] bg-[#080808] border border-white/5 rounded-[35px] sm:rounded-[45px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group/seal">
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:12px_12px] sm:bg-[size:15px_15px]" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black" />
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 scale-90 sm:scale-100">
                         <ShieldCheck className="w-24 h-24 sm:w-32 sm:h-32 text-white drop-shadow-[0_0_35px_rgba(252,43,42,0.45)]" />
                         <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                      </motion.div>
                      <motion.div animate={{ top: ["-100%", "200%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-aaa-primary/60 to-transparent blur-[6px] z-20" />
                    </div>

                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl sm:rounded-3xl border border-slate-100 flex items-center justify-center z-30">
                      <Target className="w-6 h-6 sm:w-9 sm:h-9 text-aaa-primary animate-pulse" />
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-14 h-14 sm:w-20 sm:h-20 bg-[#0f172a] shadow-2xl rounded-2xl sm:rounded-3xl flex items-center justify-center z-30">
                      <Award className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </section>

        <section id="chronicle">
          {/* --- 2. THE CHRONICLE (Fully Responsive Grid) --- */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: "1150px" }}>
              <div className="grid grid-cols-1 gap-10 sm:gap-12 align-items-center mb-6">
                <div className="w-full">
                  <AnimatedModule>
                    <div className="space-y-4 mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                        Corporate <span className="text-aaa-primary">Origins</span>
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 relative group/chronicle">
                      {/* Blueprint Logic Line (Hide on mobile) */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-50 hidden md:block overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-aaa-primary/60 via-aaa-primary/20 to-transparent animate-shimmer-slow" />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group/p flex flex-col h-full overflow-hidden relative z-10"
                      >
                        <div className="pb-8 pr-8">
                          <p className="text-black text-[15px] sm:text-[16px] text-justify leading-[1.8] font-medium">
                            AAA Technologies Private Limited was incorporated at Mumbai as a Private Limited Company in October 2000 with a vision of a world where each day is safer and more secure than the one before.
                          </p>
                        </div>
                        
                        {/* BROAD IMMERSIVE IMAGE (No Box) */}
                        <div className="mt-auto relative w-full h-[320px] sm:h-[400px] group/img overflow-hidden rounded-[32px]">
                          <img
                            src="/images/it-audit-hero.png"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/p:scale-110 grayscale-[0.2] contrast-[1.05]"
                            alt="AAA IT Audit Infrastructure"
                          />
                          {/* Integration Overlay (Strictly Neutral) */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                          <div className="absolute bottom-6 left-8 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Est. Oct 2000</span>
                          </div>
                        </div>
                      </motion.div>

                      <div className="space-y-5 sm:space-y-6 relative z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-500 group/point relative">
                          <p className="text-black text-[14.5px] sm:text-[15.5px] text-justify leading-[1.7] sm:leading-[1.8] font-medium italic">
                            Subsequently, the company was converted into a Public Limited Company and consequently the name was changed to <strong className="text-aaa-primary uppercase underline underline-offset-8 decoration-aaa-primary/30 group-hover/point:decoration-aaa-primary transition-all duration-500 font-black">“AAA Technologies Limited”</strong> w.e.f. 03-08-2020.
                          </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200 shadow-sm hover:bg-[#0f172a] hover:shadow-xl transition-all duration-500 group/milestone flex flex-col sm:flex-row gap-5">
                          <div className="shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md group-hover/milestone:bg-white group-hover/milestone:text-[#0f172a] transition-all duration-500">
                            <BarChart3 className="w-5 h-5 text-[#0f172a]" />
                          </div>
                          <div>
                            <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1.5 group-hover/milestone:text-white transition-colors">Exchange Listing</h4>
                            <p className="text-black text-[13.5px] sm:text-[14.5px] text-justify leading-relaxed font-bold group-hover/milestone:text-white/80 transition-colors italic">
                              AAA Technologies Limited was listed on National Stock Exchange Limited - Emerge Platform on 13th October, 2020. Migrated to NSE & BSE Main Board on 28th Novmber, 2022.
                            </p>
                          </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200 shadow-sm hover:bg-[#0f172a] hover:shadow-xl transition-all duration-500 group/cert flex flex-col sm:flex-row gap-5">
                          <div className="shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md group-hover/cert:bg-white group-hover/cert:text-[#0f172a] transition-all duration-500">
                            <ShieldCheck className="w-5 h-5 text-[#0f172a]" />
                          </div>
                          <div>
                            <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1.5 group-hover/cert:text-white transition-colors">Quality Standard</h4>
                            <p className="text-black text-[13.5px] sm:text-[14.5px] text-justify leading-relaxed font-bold group-hover/cert:text-white/80 transition-colors italic">
                              The Company is a world-class ISO 9001:2015 and ISO 27001:2013 Certified Company.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedModule>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="stats">
          {/* --- 3. THE EXPERTISE DASHBOARD (Responsive) --- */}
          <section className="py-10 bg-white relative border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: "1150px" }}>
              <div className="max-w-5xl mx-auto py-8 sm:py-10">
                <p className="text-black text-[14.5px] sm:text-[15.5px] text-justify md:text-center leading-[1.7] sm:leading-[1.8] font-bold italic mb-10 sm:mb-12 opacity-80 decoration-aaa-primary/10 underline underline-offset-8">
                  Focusing exclusively on IT Systems Audit and Cyber Security since incorporation, rendering specialized services for 22+ Years with 1000+ man years of expertise.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  <div className="text-center group/stat relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-black text-aaa-primary block mb-2 tracking-tighter transition-all group-hover/stat:scale-110 uppercase">22+</span>
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Years Depth</span>
                  </div>
                  <div className="text-center group/stat relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-black text-aaa-primary block mb-2 tracking-tighter transition-all group-hover/stat:scale-110 uppercase">1000+</span>
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Man Years</span>
                  </div>
                  <div className="text-center group/stat p-4 sm:p-6 border-l border-slate-100 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm group-hover/stat:shadow-lg transition-all duration-500">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-aaa-primary" />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">ISO Standards</span>
                  </div>
                  <div className="text-center group/stat p-4 sm:p-6 border-l border-slate-100 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm group-hover/stat:shadow-lg transition-all duration-500">
                      <Globe2 className="w-6 h-6 sm:w-7 sm:h-7 text-aaa-primary" />
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Global Mastery</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="ecosystem">
          {/* --- 4. AGNOSTIC SECTION (Responsive Grid) --- */}
          <section className="relative py-12 bg-white overflow-hidden group/section">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                    Market <span className="text-aaa-primary">Ecosystem</span>
                  </h2>
                </div>
                <div className="max-w-4xl mb-12">
                  <p className="text-black text-[15px] sm:text-[17px] text-justify leading-relaxed font-bold uppercase tracking-tight italic border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                    The Company is agnostic and has no dependency on any single industry for business.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {industriesRecap.map((tag, i) => (
                    <AnimatedModule key={i} delay={i * 0.04}>
                      <div className="relative group/card h-full">
                        <div className="p-4 sm:p-5 bg-white border border-slate-100 rounded-xl sm:rounded-2xl transition-all duration-500 hover:border-[#0f172a] hover:bg-[#0f172a] hover:shadow-2xl h-full flex items-center gap-4 cursor-default overflow-hidden italic text-black">
                          <div className="relative z-10 shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover/card:bg-white transition-all duration-500">
                            <tag.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f172a]" />
                          </div>
                          <span className="relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.05em] text-black group-hover/card:text-white leading-tight transition-colors duration-300">
                            {tag.name}
                          </span>
                        </div>
                      </div>
                    </AnimatedModule>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
