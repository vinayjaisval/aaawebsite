import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
    <>
      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL PAGE HEADER (HERO SECTION) --- */}
        <section className="relative py-12 lg:py-20 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,38,143,0.02),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 max-w-2xl">
                <nav className="flex items-center gap-2 mb-8 text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
                  <Link to="/" className="text-slate-400 hover:text-aaa-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200 shrink-0" />
                  <span className="text-aaa-primary shrink-0 uppercase tracking-widest font-extrabold">Board Committees</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[0.9] italic mb-8">
                  Committees of <br className="hidden lg:block" />
                  <span className="text-aaa-primary not-italic">the Board</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  Ensuring transparency, accountability and corporate excellence through dedicated governance oversight.
                </div>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[250px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0 group">
                <img src="/board_committees_hero.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Committees" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GOVERNANCE COMMITTEES MAIN CONTENT --- */}
        <section className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-slate-50/50 relative selection:bg-aaa-primary/10">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

              {/* COMMITTEE SELECTION SIDEBAR (redBus pattern) */}
              <aside className="lg:w-[320px] shrink-0 w-full sticky top-32 z-10">
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded-lg">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.3em] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-aaa-primary" />
                      Governance Committees
                    </h3>
                  </div>
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar">
                    {committees.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex-shrink-0 lg:w-full flex items-center justify-between px-6 py-4 text-[13px] font-bold transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeTab === item.id
                          ? "bg-red-50/50 border-aaa-primary text-aaa-primary"
                          : "text-[#60697B] hover:bg-slate-50 hover:text-aaa-primary border-transparent"
                          }`}
                      >
                        <span className="whitespace-nowrap uppercase tracking-tight">{item.title}</span>
                        <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform duration-300 ${activeTab === item.id ? "translate-x-1" : "opacity-0"}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* ACTIVE COMMITTEE DETAILS AREA */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-slate-200 p-6 lg:p-10 shadow-sm rounded-none"
                  >
                    <div className="mb-8">
                      <div className="h-[3px] w-12 bg-aaa-primary mb-4" />
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4">
                        {activeCommittee.title}
                      </h2>
                    </div>

                    {/* OFFICIAL GOVERNANCE DATA TABLE */}
                    <div className="border border-[#DEE2E6] overflow-hidden rounded-none">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F1F1F1]">
                              <th className="px-5 py-4 text-[11px] font-extrabold text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.3em]">Name of the Member</th>
                              <th className="px-5 py-4 text-[11px] font-extrabold text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.3em]">Nature of Directorship</th>
                              <th className="px-5 py-4 text-[11px] font-extrabold text-slate-400 border border-[#DEE2E6] uppercase tracking-[0.3em]">Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeCommittee.members.map((member, i) => (
                              <tr key={i} className={`${i % 2 === 0 ? "bg-[#F1F1F1]" : "bg-white"} transition-colors hover:bg-slate-50`}>
                                <td className="px-5 py-4 text-[0.95rem] font-bold text-[#1A1040] border border-[#DEE2E6]">
                                  {member.name}
                                </td>
                                <td className="px-5 py-4 text-[0.95rem] font-medium text-[#60697B] border border-[#DEE2E6] leading-relaxed">
                                  {member.nature}
                                </td>
                                <td className="px-5 py-4 text-[0.95rem] font-bold text-[#1A1040] border border-[#DEE2E6]">
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

      <BackToTop />
    </>
  );
}
