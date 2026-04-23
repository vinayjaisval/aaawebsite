import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Calendar, Flag, Award, Star, TrendingUp, Building2, ShieldCheck, Landmark, Globe2, Newspaper } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const milestones = [
  { 
    year: "2000", 
    title: "The Genesis", 
    desc: "AAA Technologies laid its foundation stone in Mumbai, India, beginning a legacy of IT security excellence.",
    icon: Building2
  },
  { 
    year: "2006", 
    title: "Financial Sector Milestone", 
    desc: "Successfully audited Internet Banking for a major Public Sector Bank (PSB) in India, establishing early trust in critical infrastructure.",
    icon: Landmark
  },
  { 
    year: "2008", 
    title: "National Trust", 
    desc: "Secured a major contract from the Government of India, solidifying our position as a preferred security auditor.",
    icon: Flag
  },
  { 
    year: "2009", 
    title: "Quality Benchmarks", 
    desc: "Achievement of ISO 9001 and ISO 27001 Certifications, aligning our internal processes with international quality and security standards.",
    icon: ShieldCheck
  },
  { 
    year: "2010", 
    title: "Policy Leadership", 
    desc: "Formulated the Information Security Policy for a key Regulatory Agency in India, contributing to national cybersecurity frameworks.",
    icon: Newspaper
  },
  { 
    year: "2011", 
    title: "Energy & Energy Security", 
    desc: "Executed a major contract for a leading Oil and Petroleum PSU, protecting critical national energy infrastructure.",
    icon: TrendingUp
  },
  { 
    year: "2013", 
    title: "Scaling New Heights", 
    desc: "Conducted comprehensive security audits for over 200+ websites for various State Government departments.",
    icon: Globe2
  },
  { 
    year: "2014", 
    title: "Urban Security", 
    desc: "Entrusted with the security audit of one of the largest Municipal Corporations in India.",
    icon: Building2
  },
  { 
    year: "2018", 
    title: "Commercial Growth", 
    desc: "Achieved a significant milestone with a single order value exceeding 4+ Crores.",
    icon: TrendingUp
  },
  { 
    year: "2019", 
    title: "Strategic Expansion", 
    desc: "Opened our strategic branch office in New Delhi to better serve national-level assignments.",
    icon: Globe2
  },
  { 
    year: "2020", 
    title: "Public Listing", 
    desc: "September: Successful Initial Public Offering (IPO). October: Official listing on the NSE Emerge platform.",
    icon: TrendingUp
  },
  { 
    year: "2021", 
    title: "GST Compliance Excellence", 
    desc: "One of the 54,439 organizations in India to receive a certificate of appreciation to honour GST Tax payers.",
    icon: Award
  },
  { 
    year: "2022", 
    title: "Major Infrastructure Project", 
    desc: "Rendered specialized security services for the City And Industrial Development Corporation Of Maharashtra Limited (CIDCO) for an order value of Rs. 4+ Crores.",
    icon: Building2
  }
];

const MilestoneItem = ({ ms, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-32 relative`}
    >
      {/* Circle on line */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-white border-4 border-slate-50 rounded-full shadow-2xl z-20">
        <ms.icon className="w-6 h-6 text-aaa-primary" />
        <div className="absolute inset-0 rounded-full border border-aaa-primary/20 animate-ping opacity-30" />
      </div>

      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} group/ms`}>
        <div className="mb-2 inline-block">
          <span className="text-4xl sm:text-5xl font-black text-slate-100 transition-colors group-hover/ms:text-aaa-primary/20 tracking-tighter italic">
            {ms.year}
          </span>
        </div>
        <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-black text-slate-900 mb-3 group-hover/ms:text-aaa-primary transition-colors tracking-tight uppercase">
          {ms.title}
        </h3>
        <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed text-justify md:text-inherit">
          {ms.desc}
        </p>
      </div>
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default function Milestone() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors font-sans overflow-x-hidden">
      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-slate-100">
        <Header />
      </div>

      <main className="bg-white selection:bg-aaa-primary/10 overflow-hidden">
        {/* --- STANDARDIZED HERO --- */}
        <section className="relative pt-16 pb-12 bg-[#0c0c0c] overflow-hidden group/hero">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(252,43,42,0.1),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aaa-primary/20 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <nav className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
                <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-white/10" />
                <span className="text-aaa-primary">Company Journey</span>
              </nav>
              
              <h1 className="text-white font-black uppercase tracking-tight transition-colors duration-500">
                <span className="text-[28px] sm:text-[36px] lg:text-[45px] leading-[1.1] block">
                  A Legacy Of <span className="text-aaa-primary italic uppercase tracking-tighter">Excellence</span>
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* --- DYNAMIC IMPACT TIMELINE --- */}
        <section className="relative py-20 bg-white">
          {/* Parallax Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/4 left-10 w-64 h-64 bg-slate-50 rounded-full blur-[100px] opacity-60" />
             <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-aaa-primary/5 rounded-full blur-[120px] opacity-30" />
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="relative">
              {/* Central Progress Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 md:-translate-x-1/2 overflow-hidden">
                <motion.div 
                   initial={{ height: 0 }}
                   whileInView={{ height: "100%" }}
                   viewport={{ once: false, margin: "-10% 0% -40% 0%" }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="w-full bg-aaa-primary origin-top relative"
                >
                   <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-20 bg-white shadow-[0_0_15px_#fc2b2a]"
                   />
                </motion.div>
              </div>

              {/* Milestone Blocks */}
              <div className="space-y-6 sm:space-y-8">
                {milestones.map((ms, i) => (
                  <div key={ms.year} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-14 py-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group/ms-item`}>
                    
                    {/* Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30">
                       <motion.div 
                         whileInView={{ scale: [1, 1.2, 1], backgroundColor: "#fc2b2a" }}
                         viewport={{ margin: "-20% 0% -20% 0%" }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-3 h-3 bg-slate-200 border-2 border-white rounded-full transition-all duration-500"
                       />
                    </div>

                    {/* Background Year */}
                    <motion.div 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 0.05 }}
                       className={`absolute hidden lg:block text-[120px] font-black text-slate-900 pointer-events-none tracking-tighter ${i % 2 === 0 ? 'left-[22%]' : 'right-[22%]'}`}
                    >
                        {ms.year}
                    </motion.div>
                    
                    {/* Content Card (Standardized Sizes) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full md:w-[46%] group/card"
                    >
                      <div className="relative p-6 sm:p-8 rounded-[24px] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(252,43,42,0.06)] hover:border-aaa-primary/20 transition-all duration-700 overflow-hidden">
                         <div className="absolute right-0 top-0 w-32 h-32 bg-slate-50/50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110" />

                         <div className="flex items-center justify-between mb-5 relative z-10">
                            <span className="text-3xl sm:text-4xl font-black text-slate-100 italic tracking-tighter group-hover:text-aaa-primary/20 transition-all duration-700">
                                {ms.year}
                            </span>
                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-aaa-primary group-hover:text-white transition-all duration-700">
                              <ms.icon className="w-5 h-5" />
                            </div>
                         </div>

                         <h3 className="text-[18px] lg:text-[20px] font-black text-[#111] uppercase tracking-wide mb-3 leading-tight group-hover:text-aaa-primary transition-colors duration-500 relative z-10">
                           {ms.title}
                         </h3>
                         <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed relative z-10 font-medium text-justify">
                           {ms.desc}
                         </p>
                      </div>
                    </motion.div>
                    
                    <div className="hidden md:block w-[46%]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
