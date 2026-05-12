import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

export default function InvestorGrievances() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL HERO (RESTORED TO GLOBAL SCALE) --- */}
        <section className="relative py-12 lg:py-20 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,38,143,0.02),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 max-w-2xl">
                <nav className="flex items-center gap-2 mb-8 text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
                  <Link to="/" className="text-slate-400 hover:text-aaa-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200 shrink-0" />
                  <span className="text-aaa-primary shrink-0 uppercase tracking-widest font-extrabold">Investor Grievances</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[0.9] italic mb-8">
                  Investor <span className="text-aaa-primary not-italic">Grievances</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  Ensuring transparency, accountability and corporate excellence through dedicated governance oversight.
                </div>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[250px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0 group">
                <img src="/investor_grievances_hero.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Investor Support" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GRIEVANCES CONTENT --- */}
        <section className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-slate-50/50 relative min-h-[500px] selection:bg-aaa-primary/10">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="bg-white border border-slate-200 shadow-sm rounded-none overflow-hidden">
              <div className="p-6 lg:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4">
                    Company Secretary and Compliance Officer
                  </h2>
                </div>
                <div className="border border-[#DEE2E6] overflow-hidden rounded-none">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="bg-[#F1F1F1]">
                        <td className="px-5 py-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.3em] border border-[#DEE2E6] w-[250px] lg:w-[350px]">Name</td>
                        <td className="px-5 py-3 text-[0.85rem] font-bold text-[#1A1040] border border-[#DEE2E6]">Mr. Sagar Shah</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-5 py-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.3em] border border-[#DEE2E6]">Address</td>
                        <td className="px-5 py-3 text-[0.95rem] font-medium text-[#60697B] border border-[#DEE2E6] leading-[1.8] text-justify">
                          278-280, F Wing, Solaris 1, Saki Vihar Road, <br />
                          Opp. L&T Gate No. 6, Powai, Andheri (East); <br />
                          Mumbai - 400072, Maharashtra, India.
                        </td>
                      </tr>
                      <tr className="bg-[#F1F1F1]">
                        <td className="px-5 py-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.3em] border border-[#DEE2E6]">Mobile No.</td>
                        <td className="px-5 py-3 text-[0.85rem] font-bold text-[#1A1040] border border-[#DEE2E6]">9920702677</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-5 py-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.3em] border border-[#DEE2E6]">Email Address</td>
                        <td className="px-5 py-3 text-[0.85rem] font-bold text-[#1A1040] border border-[#DEE2E6]">
                          <a href="mailto:cs@aaatechnologies.co.in" className="hover:text-aaa-primary transition-colors decoration-aaa-primary/20 underline underline-offset-4">
                            cs@aaatechnologies.co.in
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackToTop />
    </>
  );
}
