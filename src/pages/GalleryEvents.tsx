import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Image as ImageIcon,
  Calendar,
  X,
  Maximize2,
  ChevronLeft
} from "lucide-react";
import { BackToTop } from "../components/back-to-top";

// Categories based on the official AAA Technologies website
const categories = [
  "All Moments",
  "General Body Meeting",
  "Birthday Celebrations",
  "Picnic",
  "Stock Exchange Listing",
  "Festival Celebrations",
  "Corporate Events"
];

const galleryItems = [
  { id: 1, title: "Annual General Meeting 2024", category: "General Body Meeting", date: "Jan 2024", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Team Birthday Bash", category: "Birthday Celebrations", date: "Feb 2024", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Lonavala Corporate Picnic", category: "Picnic", date: "Dec 2023", image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "NSE Listing Ceremony", category: "Stock Exchange Listing", date: "Oct 2023", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Diwali Celebration 2023", category: "Festival Celebrations", date: "Nov 2023", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Cyber Security Summit", category: "Corporate Events", date: "Aug 2023", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Executive Board Meeting", category: "General Body Meeting", date: "March 2024", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Office Anniversary", category: "Corporate Events", date: "Sept 2023", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Holi Festivities", category: "Festival Celebrations", date: "March 2023", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
];

export default function GalleryEvents() {
  const [activeCategory, setActiveCategory] = useState("All Moments");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const filteredItems = activeCategory === "All Moments"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gray-100 transition-all font-sans overflow-x-hidden">
      <main className="bg-white">
        {/* --- SECTION: GALLERY HERO - MATCHING MANAGEMENT PATTERN --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                {/* NAVIGATION: BREADCRUMBS */}
                <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Gallery & Events</span>
                </nav>
                <h1 className="text-slate-900 font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Gallery & <span className="text-aaa-primary not-italic">Events</span>
                </h1>
                <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  Capturing moments of professional excellence and corporate culture.
                </p>
              </div>
              <div
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0"
              >
                <img src="/images/about-overview-hero.png" className="w-full h-full object-cover" alt="Gallery & Events" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GALLERY CONTENT --- */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Sidebar Navigation (redBus pattern) */}
              <aside className="lg:w-[300px] shrink-0 w-full sticky top-32 z-10">
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded-lg">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-red-600" />
                      Moments Gallery
                    </h3>
                  </div>
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex-shrink-0 lg:w-full flex items-center justify-between px-6 py-4 text-[14px] font-medium transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeCategory === cat
                          ? "bg-red-50/50 border-red-600 text-red-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-red-600 border-transparent"
                          }`}
                      >
                        <span className="whitespace-nowrap">{cat}</span>
                        <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform duration-300 ${activeCategory === cat ? "translate-x-1" : "opacity-0"}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Image Grid */}
              <div className="lg:w-3/4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredItems.map((item) => (
                      <motion.div
                        layout
                        key={item.id}
                        whileHover={{ y: -8 }}
                        className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                              <Calendar className="w-3 h-3" /> {item.date}
                            </div>
                            <h3 className="text-white font-bold text-base leading-tight mb-2 uppercase tracking-tight">{item.title}</h3>
                            <div className="w-8 h-8 rounded-full bg-aaa-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg">
                              <Maximize2 className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-full text-xs font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                            {item.category}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {filteredItems.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-slate-200">
                    <ImageIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase text-[0.8rem] tracking-widest">No images found for this category yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/98 backdrop-blur-xl p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-aaa-primary text-white rounded-full transition-all z-[210] border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute top-8 left-8 text-white z-[210] max-w-md hidden md:block">
              <div className="flex items-center gap-2 text-aaa-primary font-bold text-xs uppercase tracking-[0.3em] mb-2">
                {selectedImage.category}
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight leading-tight">{selectedImage.title}</h2>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> {selectedImage.date}
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto md:h-[80vh] flex items-center justify-center"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
              />

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <button className="p-4 bg-white/5 hover:bg-aaa-primary text-white rounded-full transition-all border border-white/10 group">
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="text-white/40 font-bold text-[0.8rem] uppercase tracking-[0.4em]">
                  {galleryItems.findIndex(i => i.id === selectedImage.id) + 1} <span className="text-white/10 mx-2">/</span> {galleryItems.length}
                </div>
                <button className="p-4 bg-white/5 hover:bg-aaa-primary text-white rounded-full transition-all border border-white/10 group">
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}


