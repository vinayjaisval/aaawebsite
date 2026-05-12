import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Flag, Award, TrendingUp, Building2, ShieldCheck, Landmark, Globe2, Newspaper } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const milestones = [
  {
    year: "2000",
    desc: "AAA Technologies laid its foundation stone in Mumbai, India.",
    icon: Building2
  },
  {
    year: "2006",
    desc: "Audited Internet Banking for major PSB in India",
    icon: Landmark
  },
  {
    year: "2008",
    desc: "Major Contract from Government of India",
    icon: Flag
  },
  {
    year: "2009",
    desc: "ISO 9001 and 27001 Certification for Company",
    icon: ShieldCheck
  },
  {
    year: "2010",
    desc: "Formation of Information Security Policy for Regulatory Agency in India",
    icon: Newspaper
  },
  {
    year: "2011",
    desc: "Major Contract in Oil and Petroleum PSU",
    icon: TrendingUp
  },
  {
    year: "2013",
    desc: "Audited 200+ websites for State Government",
    icon: Globe2
  },
  {
    year: "2014",
    desc: "Audited one of the largest Municipal Corporation in India.",
    icon: Building2
  },
  {
    year: "2018",
    desc: "Single order of 4+ Crores",
    icon: TrendingUp
  },
  {
    year: "2019",
    desc: "Opened branch office in Delhi",
    icon: Globe2
  },
  {
    year: "2020",
    desc: "September: Initial Public Offering. October: Listing on NSE Emerge",
    icon: TrendingUp
  },
  {
    year: "2021",
    desc: "One of the 54,439 organizations in India to receive certificate of appreciation to honour GST Tax payers",
    icon: Award
  },
  {
    year: "2022",
    desc: "Conducted work/ rendered services to City And Industrial Development Corporation Of Maharashtra Limited (CIDCO) of Rs. 4+ Crore. Migration to Main Board of NSE & BSE.",
    icon: Building2
  }
];

export default function Milestone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pairs for the dual-column grid
  const milestonePairs = [];
  for (let i = 0; i < milestones.length; i += 2) {
    milestonePairs.push(milestones.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#35268F]/10 overflow-x-hidden">
      <div className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
      </div>

      <main className="bg-slate-50 overflow-hidden relative">


        {/* --- ELITE INSTITUTIONAL HERO --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.015),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <nav className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Our Milestone</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: '1.1' }}>
                  Our <span className="text-aaa-primary">Milestone</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  A legacy represented by two decades of uncompromising trust and digital resilience since 2000.
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                className="hidden md:block relative h-[180px] sm:h-[200px] lg:h-[230px] w-[450px] lg:w-[480px] rounded-[40px] overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.3)] border border-white"
              >
                <img src="/milestone-success.png" className="w-full h-full object-cover" alt="Heritage" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- HIGH-AUTHORITY 4-PHASE GRID (Absolute-Dark Hover Shadows) --- */}
        <section className="relative px-4 pt-4 pb-20 bg-slate-50 z-10">
          <div className="container mx-auto relative z-10" style={{ maxWidth: "1150px" }}>

            {/* INSTITUTIONAL CENTRAL SPINE */}
            <div className="absolute left-1/2 top-0 bottom-[120px] w-px bg-slate-200 -translate-x-1/2 z-0 hidden md:block" />

            <div className="space-y-6 md:space-y-6 lg:space-y-8 relative">
              {milestonePairs.map((pair, rowIdx) => {
                const isSingle = pair.length === 1;

                return (
                  <div key={rowIdx} className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative`}>

                    {/* CENTER LEVEL ANCHOR */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40 hidden md:block">
                      <div className="w-4 h-4 rounded-full bg-aaa-primary border-4 border-white shadow-[0_0_15px_rgba(252,43,42,0.3)]" />
                    </div>

                    {/* ABSOLUTE DARK HOVER SHADOW RECTANGLE (Max Depth Shadow) */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                      className={`group relative bg-white border border-slate-100/60 rounded-[20px] p-8 lg:p-9 shadow-sm hover:shadow-[0_60px_150px_-35px_rgba(0,0,0,0.65)] transition-all duration-700 hover:border-aaa-primary/20 flex items-start gap-8 hover:-translate-y-6 cursor-default`}
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-aaa-primary group-hover:text-white transition-all duration-500 shadow-sm z-10">
                        {(() => { const Icon = pair[0].icon; return <Icon className="w-7 h-7" />; })()}
                      </div>
                      <div className="flex-1 z-10">
                        <div className="text-[36px] sm:text-[42px] font-bold text-[#1A1040] tracking-tighter leading-none group-hover:text-aaa-primary transition-all duration-500 mb-3 select-none">
                          {pair[0].year}
                        </div>
                        <p className="text-[#60697B] text-[0.95rem] text-justify leading-[1.8] font-medium group-hover:text-slate-900 transition-colors duration-500">
                          {pair[0].desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* ABSOLUTE DARK HOVER SHADOW RECTANGLE */}
                    {!isSingle && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
                        className={`group relative bg-white border border-slate-100/60 rounded-[20px] p-8 lg:p-9 shadow-sm hover:shadow-[0_60px_150px_-35px_rgba(0,0,0,0.65)] transition-all duration-700 hover:border-aaa-primary/20 flex items-start gap-8 hover:-translate-y-6 cursor-default`}
                      >
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-aaa-primary group-hover:text-white transition-all duration-500 shadow-sm z-10">
                          {(() => { const Icon = pair[1].icon; return <Icon className="w-7 h-7" />; })()}
                        </div>
                        <div className="flex-1 z-10">
                          <div className="text-[36px] sm:text-[42px] font-bold text-[#1A1040] tracking-tighter leading-none group-hover:text-aaa-primary transition-all duration-500 mb-3 select-none">
                            {pair[1].year}
                          </div>
                          <p className="text-[#60697B] text-[0.95rem] text-justify leading-[1.8] font-medium group-hover:text-slate-900 transition-colors duration-500">
                            {pair[1].desc}
                          </p>
                        </div>
                      </motion.div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  );
}