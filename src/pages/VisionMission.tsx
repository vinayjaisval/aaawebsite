import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Target, Rocket, Heart } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

export default function VisionMission() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <main>
        {/* --- SECTION: INSTITUTIONAL PAGE HEADER (HERO) - MATCHING MANAGEMENT PATTERN --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                {/* NAVIGATION: INSTITUTIONAL HIERARCHY PATHWAY */}
                <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Vision & Mission</span>
                </nav>
                <h1 className="text-slate-900 font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Vision & <span className="text-aaa-primary not-italic">Mission</span>
                </h1>
                <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  Defining our purpose and charting the course for global leadership in Cyber Security and IT assurance.
                </p>
              </div>
              <div
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0"
              >
                <img src="/images/it-audit-hero.png" className="w-full h-full object-cover" alt="Vision & Mission" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[40px] bg-slate-50 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-aaa-secondary/5 blur-3xl -mr-20 -mt-20 group-hover:bg-aaa-secondary/10 transition-colors" />
                <Rocket className="w-16 h-16 text-aaa-secondary mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-8">Our Vision</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  To be the global leader in providing innovative and reliable Information Security, Audit, and Governance services, empowering organizations to thrive in the digital age with absolute confidence.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[40px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-aaa-primary/5 blur-3xl -mr-20 -mt-20 group-hover:bg-aaa-primary/10 transition-colors" />
                <Target className="w-16 h-16 text-aaa-primary mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight uppercase italic underline decoration-white/10 decoration-8 underline-offset-4 mb-8">Our Mission</h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  We are committed to delivering excellence through specialized professional services that safeguard assets, ensure compliance, and mitigate risks. Our mission is to build trust through integrity, expertise, and continuous innovation.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="mt-32">
              <div className="text-center mb-20">
                <div className="flex items-center justify-center gap-3 font-bold text-xs text-aaa-primary uppercase tracking-[0.3em] mb-4">
                  Core Values
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 uppercase italic">What Defines <span className="text-aaa-primary">Us</span></h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Integrity", desc: "Upholding the highest moral and ethical standards in everything we do.", color: "red" },
                  { title: "Excellence", desc: "Striving for perfection and delivering superior quality consistently.", color: "green" },
                  { title: "Innovation", desc: "Continuously evolving our methodologies to counter emerging threats.", color: "red" }
                ].map((val, i) => (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all"
                  >
                    <Heart className={`w-8 h-8 mb-6 ${val.color === 'red' ? 'text-aaa-primary' : 'text-aaa-secondary'}`} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{val.desc}</p>
                  </motion.div>
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
