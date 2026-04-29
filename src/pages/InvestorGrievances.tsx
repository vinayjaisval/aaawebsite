import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

export default function InvestorGrievances() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gray-100 transition-all font-sans overflow-x-hidden">
      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-gray-100">
        <Header />
      </div>

      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL HERO (RESTORED TO GLOBAL SCALE) --- */}
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
                  Investor <span className="text-aaa-primary not-italic">Grievances</span>
                </h1>
                <p className="mt-6 text-slate-500 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  Ensuring transparency, accountability and corporate excellence through dedicated governance oversight.
                </p>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0">
                <img src="/investor_grievances_hero.png" className="w-full h-full object-cover" alt="Investor Support" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: GRIEVANCES CONTENT (TIGHT SPACING PARITY) --- */}
        <section className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-slate-50 relative min-h-[500px]">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>

            {/* THE ONLY OFFICIAL BLOCK: COMPANY SECRETARY AND COMPLIANCE OFFICER */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-none overflow-hidden">
              <div className="p-6 lg:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4">
                    Company Secretary and Compliance Officer
                  </h2>
                </div>

                <div className="border border-[#DEE2E6] overflow-hidden rounded-none">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="bg-[#F1F1F1]">
                        <td className="px-5 py-3 text-[11px] font-black text-slate-400 uppercase tracking-widest border border-[#DEE2E6] w-[250px] lg:w-[350px]">Name</td>
                        <td className="px-5 py-3 text-[13px] font-bold text-[#212529] border border-[#DEE2E6]">Mr. Sagar Shah</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-5 py-3 text-[11px] font-black text-slate-400 uppercase tracking-widest border border-[#DEE2E6]">Address</td>
                        <td className="px-5 py-3 text-[13px] font-medium text-slate-500 border border-[#DEE2E6] leading-relaxed">
                          278-280, F Wing, Solaris 1, Saki Vihar Road, <br />
                          Opp. L&T Gate No. 6, Powai, Andheri (East); <br />
                          Mumbai - 400072, Maharashtra, India.
                        </td>
                      </tr>
                      <tr className="bg-[#F1F1F1]">
                        <td className="px-5 py-3 text-[11px] font-black text-slate-400 uppercase tracking-widest border border-[#DEE2E6]">Mobile No.</td>
                        <td className="px-5 py-3 text-[13px] font-bold text-[#212529] border border-[#DEE2E6]">9920702677</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-5 py-3 text-[11px] font-black text-slate-400 uppercase tracking-widest border border-[#DEE2E6]">Email Address</td>
                        <td className="px-5 py-3 text-[13px] font-bold text-[#212529] border border-[#DEE2E6]">
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

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
