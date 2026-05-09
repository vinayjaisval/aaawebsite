import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { BarChart3, ShieldCheck, Globe2, Layers, Briefcase, Cpu, Landmark, HeartPulse, ShieldAlert, Target, Award, ChevronRight, ChevronLeft } from "lucide-react";

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

const clientLogos = [
  "sbi.png", "bank of baroda.png", "bank of india.png", "bank of maharashtra.png",
  "union bank.png", "central bank of india.png", "canra bank.png", "federal bank.png",
  "lic.png", "nic.png", "CCA.png", "eesl.png", "chips.png", "ggem.png", "tnega.png"
];

const AnimatedModule = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#35268F]/10">


      <main>

        <section id="hero">
          {/* --- 1. BALANCED HERO (Mobile Optimized) --- */}
          <section className="relative min-h-[40vh] sm:min-h-[50vh] py-12 sm:py-16 flex items-center bg-white border-b border-slate-50 overflow-hidden group/hero">
            <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col space-y-6 sm:space-y-8">
                    {/* INSTITUTIONAL BREADCRUMB */}
                    <nav className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                      <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                      <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                      <span className="text-aaa-primary uppercase tracking-[0.4em]">Overview</span>
                    </nav>
                    <h1 className="text-[#1A1040] tracking-tight font-extrabold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: '1.1' }}>
                      Enabling <br /> <span className="text-aaa-primary">Organizations</span>
                    </h1>
                    <div className="text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-4xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                      To Identify Issues Of Cyber Security & IT Corporate Governance And Providing.
                      <span className="text-aaa-primary font-bold uppercase tracking-widest text-[14px] md:text-[16px] block mt-4 tracking-[0.2em]">Accurate | Reliable | Innovative Services</span>
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

                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl sm:rounded-2xl border border-slate-100 flex items-center justify-center z-30">
                      <Target className="w-6 h-6 sm:w-9 sm:h-9 text-aaa-primary animate-pulse" />
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-14 h-14 sm:w-20 sm:h-20 bg-[#1A1040] shadow-2xl rounded-xl sm:rounded-2xl flex items-center justify-center z-30">
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
                      <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1A1040] tracking-tight leading-tight underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
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
                          <p className="text-[#60697B] text-[16px] md:text-[18px] text-justify leading-[1.8] font-medium">
                            AAA Technologies Private Limited was incorporated at Mumbai as a Private Limited Company in October 2000 with a vision of a world where each day is safer and more secure than the one before.
                          </p>
                        </div>

                        {/* BROAD IMMERSIVE IMAGE (No Box) */}
                        <div className="mt-auto relative w-full h-[320px] sm:h-[400px] group/img overflow-hidden rounded-[20px]">
                          <img
                            src="/images/it-audit-hero.png"
                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/p:scale-110 grayscale-[0.2] contrast-[1.05]"
                            alt="AAA IT Audit Infrastructure"
                          />
                          {/* Integration Overlay (Strictly Neutral) */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                          <div className="absolute bottom-6 left-8 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/80">Established October 2000</span>
                          </div>
                        </div>
                      </motion.div>

                      <div className="space-y-5 sm:space-y-6 relative z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="p-6 sm:p-8 rounded-[16px] sm:rounded-[20px] bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-500 group/point relative">
                          <p className="text-[#60697B] text-[0.95rem] text-justify leading-[1.8] font-medium">
                            Subsequently, the company was converted into a Public Limited Company and consequently the name of the Company was changed to <strong className="text-aaa-primary font-bold">"AAA Technologies Limited"</strong> w.e.f. 03-08-2020.
                          </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="p-6 sm:p-8 rounded-[16px] sm:rounded-[20px] bg-white border border-slate-200 shadow-sm hover:bg-[#1A1040] hover:shadow-xl transition-all duration-500 group/milestone flex flex-col sm:flex-row gap-5">
                          <div className="shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md group-hover/milestone:bg-white group-hover/milestone:text-[#0f172a] transition-all duration-500">
                            <BarChart3 className="w-5 h-5 text-[#0f172a]" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.4em] text-slate-400 mb-1.5 group-hover/milestone:text-white transition-colors">Exchange Listing</h4>
                            <p className="text-[#60697B] text-[0.95rem] text-justify leading-relaxed font-bold group-hover/milestone:text-white transition-colors">
                              AAA Technologies Limited was listed on National Stock Exchange Limited - Emerge Platform (NSE Emerge Platform) on 13th October, 2020. The company Migrated from NSE Emerge to NSE Main Board and also simultaneously got listed on BSE Main Board on 28th Novmber, 2022.
                            </p>
                          </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} className="p-6 sm:p-8 rounded-[16px] sm:rounded-[20px] bg-white border border-slate-200 shadow-sm hover:bg-[#1A1040] hover:shadow-xl transition-all duration-500 group/cert flex flex-col sm:flex-row gap-5">
                          <div className="shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md group-hover/cert:bg-white group-hover/cert:text-[#0f172a] transition-all duration-500">
                            <ShieldCheck className="w-5 h-5 text-[#0f172a]" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.4em] text-slate-400 mb-1.5 group-hover/cert:text-white transition-colors">Quality Standard</h4>
                            <p className="text-[#60697B] text-[0.95rem] text-justify leading-relaxed font-bold group-hover/cert:text-white transition-colors">
                              The Company is an ISO 9001:2015 and ISO 27001:2013 Certified Company.
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
                <p className="text-[#60697B] text-[0.95rem] text-justify md:text-center leading-[1.8] font-bold mb-10 sm:mb-12 opacity-80 decoration-aaa-primary/10 underline underline-offset-8">
                  The Company has kept its focus exclusively on IT Systems Audit, Cyber Security Audit, IT Security Audit, IT Assurance & Compliance, IT Governance since incorporation and has been rendering these services for 22+ Years with cumulative expertise of more than 1000+ man years.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  <div className="text-center group/stat relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-bold text-aaa-primary block mb-2 tracking-tighter transition-all group-hover/stat:scale-110 uppercase">22+</span>
                    <span className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Years Depth</span>
                  </div>
                  <div className="text-center group/stat relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-bold text-aaa-primary block mb-2 tracking-tighter transition-all group-hover/stat:scale-110 uppercase">1000+</span>
                    <span className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Man Years</span>
                  </div>
                  <div className="text-center group/stat p-4 sm:p-6 border-l border-slate-100 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm group-hover/stat:shadow-lg transition-all duration-500">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-aaa-primary" />
                    </div>
                    <span className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">ISO Standards</span>
                  </div>
                  <div className="text-center group/stat p-4 sm:p-6 border-l border-slate-100 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm group-hover/stat:shadow-lg transition-all duration-500">
                      <Globe2 className="w-6 h-6 sm:w-7 sm:h-7 text-aaa-primary" />
                    </div>
                    <span className="text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 group-hover/stat:text-black transition-colors">Global Mastery</span>
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
              <div className="text-center mb-16">
                <span className="text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] mb-4 block">Industries We Serve</span>
                <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1040] leading-tight">We Work Across 25+ Industries</h2>
                <p className="text-[#60697b] mt-4 font-medium leading-relaxed max-w-4xl mx-auto">
                  The Company is agnostic and consequently it has no dependency on any single industry for procuring business. The Company has successfully completed assignments of Companies/ Institutions across various industries like banking, insurance, Financial Institutions, NBFCs, Regulatory Bodies, Government, Municipalities Corporations, Payment Gateways, Stock Brokers, Education, Travel and Transport, Hospitality, Manufacturing and Engineering, Infrastructure, Healthcare, Information Technology, IT Enabled Services (ITeS), Ports, Power, Trading Corporations, Entertainment, E-Tendering, Defense and refineries and many more.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {industriesRecap.map((tag, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.02 }}
                    className="bg-white p-6 sm:p-8 rounded-[12px] shadow-sm hover:shadow-2xl transition-all text-center flex flex-col items-center border border-slate-100 group/ind"
                  >
                    <div className="w-12 h-12 bg-[#F4F3FB] rounded-full flex items-center justify-center mb-4 group-hover/ind:scale-110 transition-transform duration-300">
                      <tag.icon className="h-6 w-6 text-[#35268F]" />
                    </div>
                    <span className="font-bold text-[#1A1040] text-sm tracking-tight">{tag.name}</span>
                  </motion.div>
                ))}
              </div>
              </div>
            </div>
          </section>
        </section>
        <section id="empanelment" className="py-16 bg-[#F4F3FB] border-t border-slate-100 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#1A1040] mb-4">Current Empanelment</h2>
              <p className="text-[#60697B] font-medium leading-relaxed text-[17px] md:text-[19px] max-w-2xl mx-auto">
                As a testimonial to our expertise, regulatory bodies and prominent organizations have chosen to confer unto us empanelment
              </p>
            </div>
          </div>
          
          <div className="relative group/carousel px-4 md:px-12">
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1A1040] hover:bg-[#35268F] hover:text-white transition-all border border-slate-100"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1A1040] hover:bg-[#35268F] hover:text-white transition-all border border-slate-100"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-6 items-center overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-2 no-scrollbar"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {clientLogos.map((img, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 min-w-[200px] h-[100px] flex items-center justify-center shrink-0 scroll-snap-align-center">
                  <img
                    src={`/assets/img/clients/${img}`}
                    alt="Client Logo"
                    className="max-h-12 w-auto transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
