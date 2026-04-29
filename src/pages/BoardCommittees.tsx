import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const committees = [
  {
    id: "audit",
    title: "Audit Committee",
    members: [
      { name: "Mr. Rajesh Verma", nature: "Independent Director", designation: "Chairman" },
      { name: "Mr. Naveen Srivastava", nature: "Independent Director", designation: "Member" },
      { name: "Mr. Anjay Agarwal", nature: "Chairman & Managing Director", designation: "Member" },
    ]
  },
  {
    id: "stakeholders",
    title: "Stakeholders Relationship Committee",
    members: [
      { name: "Mr. Rajesh Verma", nature: "Independent Director", designation: "Chairman" },
      { name: "Mr. Naveen Srivastava", nature: "Independent Director", designation: "Member" },
      { name: "Mr. Nabankur Sen", nature: "Independent Director", designation: "Member" },
    ]
  },
  {
    id: "nomination",
    title: "Nomination and Remuneration Committee",
    members: [
      { name: "Mr. Naveen Srivastava", nature: "Independent Director", designation: "Chairman" },
      { name: "Mr. Nabankur Sen", nature: "Independent Director", designation: "Member" },
      { name: "Mr. Rajesh Verma", nature: "Independent Director", designation: "Member" },
    ]
  },
  {
    id: "csr",
    title: "Corporate Social Responsibility Committee",
    members: [
      { name: "Mr. Anjay Agarwal", nature: "Chairman & Managing Director", designation: "Chairman" },
      { name: "Mr. Venugopal Dhoot", nature: "Whole Time Director, Director (Finance) & CFO", designation: "Member" },
      { name: "Mr. Naveen Srivastava", nature: "Independent Director", designation: "Member" },
    ]
  }
];

export default function BoardCommittees() {
  const [activeTab, setActiveTab] = useState("audit");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeCommittee = committees.find(c => c.id === activeTab) || committees[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gray-100 transition-all font-sans overflow-x-hidden">
      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-gray-100">
        <Header />
      </div>

      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL PAGE HEADER (HERO SECTION) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                <nav className="flex items-center gap-2 mb-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-[10px]">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Investors</span>
                </nav>
                <h1 className="text-slate-900 font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Committees of <br className="hidden lg:block" />
                  <span className="text-aaa-primary not-italic">the Board</span>
                </h1>
                <p className="mt-6 text-slate-500 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  Ensuring transparency, accountability and corporate excellence through dedicated governance oversight.
                </p>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0">
                <img src="/board_committees_hero.png" className="w-full h-full object-cover" alt="Committees" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GOVERNANCE COMMITTEES MAIN CONTENT --- */}
        <section className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

              {/* COMMITTEE SELECTION SIDEBAR (NAVIGATION) */}
              <aside className="lg:w-[320px] shrink-0">
                <div className="sticky top-32 flex flex-col border border-slate-200 shadow-sm">
                  {committees.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full group flex items-center justify-between px-8 py-[0.75rem] text-[13px] font-bold uppercase tracking-widest transition-all duration-300 border-b border-slate-100 last:border-0 rounded-none ${activeTab === item.id
                        ? "text-white bg-aaa-primary shadow-md"
                        : "text-slate-500 bg-white hover:bg-slate-100"
                        }`}
                    >
                      <span className="text-left leading-tight">{item.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === item.id ? "translate-x-1" : "opacity-30"}`} />
                    </button>
                  ))}
                </div>
              </aside>

              {/* ACTIVE COMMITTEE DETAILS AREA */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-slate-200 p-6 lg:p-8 shadow-sm rounded-none"
                  >
                    <div className="mb-6">
                      <div className="h-[2px] w-10 bg-aaa-primary mb-3" />
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4">
                        {activeCommittee.title}
                      </h2>
                    </div>

                    {/* OFFICIAL GOVERNANCE DATA TABLE */}
                    <div className="border border-[#DEE2E6] overflow-hidden rounded-none">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F1F1F1]">
                              <th className="px-5 py-3 text-[11px] font-black text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.2em]">Name of the Member</th>
                              <th className="px-5 py-3 text-[11px] font-black text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.2em]">Nature of Directorship</th>
                              <th className="px-5 py-3 text-[11px] font-black text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.2em]">Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeCommittee.members.map((member, i) => (
                              <tr key={i} className={`${i % 2 === 0 ? "bg-[#F1F1F1]" : "bg-white"} transition-colors hover:bg-slate-50`}>
                                <td className="px-5 py-3 text-[13px] font-bold text-[#212529] border border-[#DEE2E6]">
                                  {member.name}
                                </td>
                                <td className="px-5 py-3 text-[13px] font-medium text-slate-500 border border-[#DEE2E6]">
                                  {member.nature}
                                </td>
                                <td className="px-5 py-3 text-[13px] font-bold text-[#212529] border border-[#DEE2E6]">
                                  {member.designation}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
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
