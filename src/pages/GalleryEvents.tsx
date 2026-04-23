import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Camera, Image as ImageIcon, Play, Calendar } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

export default function GalleryEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const items = [
    { title: "Global Security Summit", date: "Jan 2024", category: "Conference" },
    { title: "Industry Excellence Award Ceremony", date: "Nov 2023", category: "Awards" },
    { title: "20 Years Celebration", date: "Oct 2023", category: "Corporate" },
    { title: "Blockchain Security Workshop", date: "Aug 2023", category: "Seminar" },
    { title: "Annual Technical Retreat", date: "June 2023", category: "Events" },
    { title: "Cyber Policy Roundtable", date: "May 2023", category: "Meetup" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors">
      <HeaderUtilityBar />
      <Header />

      <main>
        <section className="relative pt-24 pb-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-aaa-primary text-xs font-bold uppercase tracking-widest mb-8">
                  <Camera className="w-4 h-4" /> Visual Journey
               </div>
               <h1 className="text-5xl sm:text-7xl font-black text-slate-900 uppercase italic mb-8">
                 Gallery & <span className="text-aaa-secondary">Events</span>
               </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-[400px] rounded-[32px] overflow-hidden border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                     <div className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <ImageIcon className="w-8 h-8 text-white" />
                     </div>
                  </div>
                  
                  {/* Background Pattern instead of missing image */}
                  <div className="absolute inset-0 bg-slate-900 group-hover:scale-110 transition-transform duration-700">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-10 z-30">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-aaa-primary rounded-full text-[10px] font-black text-white uppercase tracking-widest">{item.category}</div>
                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> {item.date}
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
               <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-aaa-primary hover:text-white transition-all transform hover:-translate-y-1">
                 Load More Moments
               </button>
            </div>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
