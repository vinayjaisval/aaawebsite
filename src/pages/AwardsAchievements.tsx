import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Award, Trophy, Medal, Star } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

export default function AwardsAchievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const awards = [
    { title: "Best Security Consulting Firm", issuer: "IT Excellence Awards", year: "2022", icon: Trophy },
    { title: "Enterprise Security Leadership", issuer: "Cyber Frontier", year: "2021", icon: Award },
    { title: "Fastest Growing Audit Firm", issuer: "Finance Today", year: "2019", icon: Medal },
    { title: "Customer Choice Award", issuer: "Tech Reviews", year: "2018", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <HeaderUtilityBar />
      <Header />

      <main>
        <section className="relative pt-24 pb-12 bg-aaa-primary overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <motion.div 
               animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 right-0 w-[800px] h-[800px] border-[50px] border-white rounded-full -mr-96 -mt-96" 
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest text-white/60">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span>About</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">Awards</span>
              </nav>
              <h1 className="text-5xl sm:text-7xl font-black text-white uppercase italic leading-none mb-4">
                Awards & <span className="block text-aaa-secondary">Achievements</span>
              </h1>
              <p className="text-white/80 text-xl font-medium">Recognizing our commitment to quality and excellence.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {awards.map((award, i) => (
                <motion.div 
                  key={award.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] text-center group hover:bg-[#0a0a0a] transition-all duration-500"
                >
                  <award.icon className="w-16 h-16 text-aaa-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <div className="text-aaa-primary font-black text-xl mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors mb-4">{award.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/40 transition-colors uppercase text-xs font-bold tracking-widest">{award.issuer}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 p-12 lg:p-20 bg-[#0a0a0a] rounded-[48px] text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aaa-primary via-aaa-secondary to-aaa-primary" />
               <h2 className="text-3xl sm:text-5xl font-black text-white mb-8">Our Certifications</h2>
               <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
                  {["ISO 9001:2015", "ISO 27001:2013", "CERT-In Empaneled", "CISA", "CISSP"].map(cert => (
                    <div key={cert} className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 font-bold tracking-widest uppercase text-xs sm:text-sm">
                      {cert}
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
