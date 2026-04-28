import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  FileText, 
  Folder, 
  Download, 
  TrendingUp, 
  PieChart, 
  ShieldCheck, 
  FileBadge,
  ArrowLeft,
  File,
  Bell,
  Mail,
  Scale,
  Megaphone,
  UserCheck,
  FileSearch,
  BookOpen,
  MoreHorizontal
} from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const investorCategories = [
  { id: "annual-report", title: "Annual Report", icon: FileText },
  { id: "investor-presentation", title: "Investor Presentation", icon: TrendingUp },
  { id: "shareholding-pattern", title: "Shareholding Pattern", icon: PieChart },
  { id: "policies", title: "Policies", icon: ShieldCheck },
  { id: "financial-results", title: "Financial Results", icon: FileBadge },
  { id: "notices", title: "Notices", icon: Bell },
  { id: "annual-return", title: "Annual Return", icon: Mail },
  { id: "notice-board-meeting", title: "Notice of Board Meeting", icon: Scale },
  { id: "scrutinizers-report", title: "Scrutinizers Report", icon: FileSearch },
  { id: "press-release", title: "Press Release", icon: Megaphone },
  { id: "chairman-communication", title: "Chairman's Communication", icon: UserCheck },
  { id: "prospectus", title: "Prospectus", icon: BookOpen },
  { id: "others", title: "Others", icon: MoreHorizontal },
];

const fiscalYears = ["2024-2025", "2023-2024", "2022-2023", "2021-2022", "2020-2021", "2019-2020"];

const reportData: Record<string, Record<string, any[]>> = {
  "annual-report": {
    "2023-2024": [{ title: "Annual Report 2023-2024", size: "4.8 MB", url: "#" }],
    "2022-2023": [{ title: "Annual Report 2022-2023", size: "3.5 MB", url: "#" }],
    "2021-2022": [{ title: "Annual Report 2021-2022", size: "5.2 MB", url: "#" }],
    "2020-2021": [{ title: "Annual Report 2020-2021", size: "4.1 MB", url: "#" }],
    "2019-2020": [{ title: "Annual Report 2019-2020", size: "3.9 MB", url: "#" }],
  },
  "financial-results": {
    "2024-2025": [
      { title: "Unaudited Financial Results Q1 FY 2024-2025", size: "1.1 MB", url: "#" },
    ],
    "2023-2024": [
      { title: "Audited Financial Results Q4 FY 2023-2024", size: "1.4 MB", url: "#" },
      { title: "Unaudited Financial Results Q3 FY 2023-2024", size: "1.2 MB", url: "#" },
      { title: "Unaudited Financial Results Q2 FY 2023-2024", size: "1.1 MB", url: "#" },
      { title: "Unaudited Financial Results Q1 FY 2023-2024", size: "1.3 MB", url: "#" },
    ],
    "2022-2023": [
      { title: "Audited Financial Results FY 2022-2023", size: "1.6 MB", url: "#" },
      { title: "Unaudited Financial Results Q3 FY 2022-2023", size: "1.2 MB", url: "#" },
    ]
  },
  "shareholding-pattern": {
    "2024-2025": [
      { title: "Shareholding Pattern - Quarter Ended June 2024", size: "0.7 MB", url: "#" },
    ],
    "2023-2024": [
      { title: "Shareholding Pattern - Quarter Ended March 2024", size: "0.8 MB", url: "#" },
      { title: "Shareholding Pattern - Quarter Ended Dec 2023", size: "0.8 MB", url: "#" },
      { title: "Shareholding Pattern - Quarter Ended Sep 2023", size: "0.7 MB", url: "#" },
      { title: "Shareholding Pattern - Quarter Ended June 2023", size: "0.8 MB", url: "#" },
    ],
  },
  "notices": {
    "2023-2024": [
      { title: "Notice of 14th Annual General Meeting", size: "0.9 MB", url: "#" },
      { title: "E-voting Instructions for AGM", size: "0.4 MB", url: "#" },
    ],
    "2022-2023": [
      { title: "Notice of 13th Annual General Meeting", size: "0.8 MB", url: "#" },
    ]
  },
  "notice-board-meeting": {
    "2024-2025": [
      { title: "Notice of Board Meeting - July 2024", size: "0.3 MB", url: "#" },
    ],
    "2023-2024": [
      { title: "Notice of Board Meeting - May 2024", size: "0.4 MB", url: "#" },
      { title: "Notice of Board Meeting - Feb 2024", size: "0.3 MB", url: "#" },
      { title: "Notice of Board Meeting - Nov 2023", size: "0.3 MB", url: "#" },
      { title: "Notice of Board Meeting - Aug 2023", size: "0.4 MB", url: "#" },
    ]
  },
  "scrutinizers-report": {
    "2023-2024": [{ title: "Scrutinizers Report - 14th AGM", size: "0.6 MB", url: "#" }],
    "2022-2023": [{ title: "Scrutinizers Report - 13th AGM", size: "0.5 MB", url: "#" }],
  },
  "press-release": {
    "2023-2024": [
      { title: "Press Release - Financial Results Q4 FY24", size: "0.4 MB", url: "#" },
      { title: "Press Release - AAA Technologies Awarded at CISO Forum", size: "0.6 MB", url: "#" },
    ],
  },
  "policies": {
    "2023-2024": [
      { title: "Code of Conduct for Directors and Senior Management", size: "0.5 MB", url: "#" },
      { title: "Whistle Blower Policy", size: "0.4 MB", url: "#" },
      { title: "Policy on Related Party Transactions", size: "0.6 MB", url: "#" },
      { title: "Archival Policy", size: "0.3 MB", url: "#" },
      { title: "Nomination and Remuneration Policy", size: "0.5 MB", url: "#" },
      { title: "Familiarization Programme for Independent Directors", size: "0.4 MB", url: "#" },
    ],
  }
};

export default function InvestorRelations() {
  const [activeCategory, setActiveCategory] = useState("annual-report");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [view, setView] = useState<"folders" | "documents">("folders");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setSelectedYear(null);
    if (reportData[id] && Object.keys(reportData[id]).length > 0) {
      setView("folders");
    } else {
      setView("documents");
    }
  };

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    setView("documents");
  };

  const currentDocs = selectedYear ? (reportData[activeCategory]?.[selectedYear] || []) : [];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-all font-sans">
      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-gray-100">
        <Header />
      </div>

      <main>
        {/* --- HERO SECTION: ELITE INSTITUTIONAL PARITY --- */}
        <section className="relative py-16 lg:py-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1200px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-16">
              <div className="flex-1">
                <nav className="flex items-center gap-2 mb-6 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-[10px]">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Investor Relations</span>
                  {selectedYear && (
                    <>
                      <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                      <span className="text-slate-400 uppercase tracking-[0.4em]">FY {selectedYear}</span>
                    </>
                  )}
                </nav>
                <h1 className="text-slate-900 font-black uppercase tracking-tight text-[32px] sm:text-[45px] lg:text-[55px] leading-[1.1]">
                  Investor <span className="text-aaa-primary italic uppercase">Relations</span>
                </h1>
                <p className="mt-4 text-slate-500 text-[15.5px] font-bold italic leading-relaxed max-w-xl">
                  Ensuring transparency, accountability and corporate excellence through dedicated investor communication.
                </p>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0">
                <img 
                  src="/investor_grievances_hero.png" 
                  className="w-full h-full object-cover" 
                  alt="Investor Relations Visual" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTENT SECTION: ELITE THREE-STEP NAVIGATION --- */}
        <section className="py-20 bg-slate-50 min-h-[800px]">
          <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: "1200px" }}>
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* SIDEBAR: OFFICIAL GRAY INSTITUTIONAL STYLE (13 ITEMS) */}
              <aside className="lg:w-[310px] shrink-0 w-full">
                <div className="sticky top-32 bg-[#f8f9fa] border border-slate-200 overflow-hidden shadow-sm">
                  {investorCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full group flex items-center justify-between pl-10 pr-8 py-[0.85rem] text-[12.5px] font-black uppercase tracking-widest transition-all border-b border-white last:border-b-0 ${
                        activeCategory === cat.id
                          ? "bg-aaa-primary text-white"
                          : "bg-transparent text-slate-500 hover:bg-white hover:text-aaa-primary"
                      }`}
                    >
                      <span className="flex-1 text-left">{cat.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeCategory === cat.id ? "translate-x-1" : "opacity-30"}`} />
                    </button>
                  ))}
                </div>
              </aside>

              {/* MAIN VIEW: FOLDERS OR DOCUMENT CARDS */}
              <div className="flex-1 w-full">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-[26px] font-black text-slate-900 uppercase tracking-tight">
                      {investorCategories.find(c => c.id === activeCategory)?.title}
                      {selectedYear && <span className="text-aaa-primary ml-2">— FY {selectedYear}</span>}
                    </h2>
                    <div className="h-[2px] w-12 bg-aaa-primary mt-4" />
                  </div>
                  
                  {view === "documents" && selectedYear && (
                    <button 
                      onClick={() => setView("folders")}
                      className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-aaa-primary transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Years
                    </button>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {view === "folders" ? (
                    <motion.div
                      key="folders"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                      {Object.keys(reportData[activeCategory] || {}).sort().reverse().map((year) => (
                        <div 
                          key={year}
                          onClick={() => handleYearClick(year)}
                          className="group bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
                        >
                          <div className="w-16 h-16 flex items-center justify-center mb-4 text-slate-300 group-hover:text-aaa-primary transition-colors">
                            <Folder className="w-12 h-12" strokeWidth={1} />
                          </div>
                          <h3 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">
                            FY {year}
                          </h3>
                          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">
                            Fiscal Year
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="documents"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                      {(selectedYear ? currentDocs : (reportData[activeCategory] ? Object.values(reportData[activeCategory])[0] : [])).length > 0 ? (
                        (selectedYear ? currentDocs : Object.values(reportData[activeCategory])[0]).map((doc, idx) => (
                          <a 
                            key={idx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-7 border border-slate-100 flex items-center justify-between group hover:border-aaa-primary/30 transition-all shadow-sm hover:shadow-md relative overflow-hidden block"
                          >
                            <div className="absolute top-0 left-0 w-[3px] h-full bg-aaa-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-aaa-primary/5 group-hover:text-aaa-primary transition-all">
                                <File className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <div className="max-w-[180px] lg:max-w-[280px]">
                                <h4 className="text-[13px] font-bold text-slate-900 leading-tight group-hover:text-aaa-primary transition-colors">{doc.title}</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1.5">PDF Document • {doc.size}</p>
                              </div>
                            </div>
                            <div className="p-3 text-slate-300 group-hover:text-aaa-primary transition-all group-hover:scale-110">
                              <Download className="w-5.5 h-5.5" />
                            </div>
                          </a>
                        ))
                      ) : (
                        <div className="col-span-full py-20 text-center bg-white border border-dashed border-slate-200">
                          <FileText className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">No documents found for this category</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
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
