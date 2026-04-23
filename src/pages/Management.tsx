import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Users, Linkedin, Mail } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

export default function Management() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const leaders = [
    { name: "Mr. Anish Jhaveri", role: "Chairman & Managing Director", bio: "A visionary leader with 25+ years of experience in Information Security and Corporate Governance." },
    { name: "Ms. Priyanka Jhaveri", role: "Wholetime Director", bio: "Expert in IT Assurance and strategic planning, driving organizational growth." },
    { name: "Technical Advisory Board", role: "Experts Panel", bio: "Comprising of industry veterans specializing in Cyber Security and Regulatory Compliance." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <HeaderUtilityBar />
      <Header />

      <main>
        <section className="relative pt-32 pb-24 bg-slate-50 overflow-hidden border-b border-slate-100">
           <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
             <motion.div initial={{ opacity: 0, scale: 0.9 }}>
                <Users className="w-16 h-16 text-aaa-primary mx-auto mb-8" />
                <h1 className="text-5xl sm:text-8xl font-black text-slate-900 uppercase italic leading-none mb-6">
                  Our <span className="text-aaa-primary">Management</span>
                </h1>
                <p className="text-slate-500 text-xl max-w-2xl mx-auto">The driving force behind our commitment to excellence and innovation.</p>
             </motion.div>
           </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {leaders.map((leader, i) => (
                <motion.div 
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group lg:pt-12"
                >
                  <div className="bg-slate-50 rounded-[40px] p-10 pt-24 border border-slate-100 hover:border-aaa-primary/20 transition-all duration-500 group-hover:shadow-2xl">
                    <div className="absolute -top-12 left-10 w-24 h-24 bg-white rounded-3xl border border-slate-100 shadow-xl flex items-center justify-center p-4">
                       <Users className="w-full h-full text-aaa-primary/20" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                    <div className="text-aaa-primary font-bold text-xs uppercase tracking-widest mb-6">{leader.role}</div>
                    <p className="text-slate-500 leading-relaxed mb-8">{leader.bio}</p>
                    <div className="flex gap-4">
                      <div className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-aaa-primary transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-aaa-primary transition-colors cursor-pointer">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
