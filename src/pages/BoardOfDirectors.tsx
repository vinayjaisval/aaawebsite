import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Trophy } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const boardMembers = [
  {
    name: "Mr. Anjay Agarwal",
    role: "Chairman & Managing Director",
    bullets: [
      "Over 29+ years of overall experience and 26+ years of experience in Information Security Audit / Cyber Security Audit.",
      "Eminent Information Security professional who has served both the National and International security community for over 20 years.",
      "Qualified Chartered Accountant, Company Secretary, Cost Accountant and Law from Mumbai University.",
      "Holds 25 prestigious professional certifications",
      "Certifications includes such as CRISC (USA), CGEIT (USA), CISA (USA), CFE (USA), CIA (USA), ABCI (UK), FCA, ACMA, ACS, B. Com, LLB.",
      "55th professional in World to achieve COBIT Certified Assessor Designation.",
      "1st person from Asia to be appointed as the Chairman of Governmental and Regulatory Agencies Board (GRA Board) of ISACA, International.",
      "Involved in 10,000+ Information Technology & Cyber Security Audit assignments till date.",
      "Involved with various Government and professional bodies in various capacities including as Jury Member for the Maharashtra IT Awards; several Committees / Board of ISACA (USA) including Audit Committee / Finance Committee; President of ISACA, Mumbai Chapter in 2006-2007."
    ]
  },
  {
    name: "Mr. Venugopal M. Dhoot",
    role: "Whole Time Director, Director (Finance) & CFO",
    bullets: [
      "Over 36+ years of overall experience and 18+ years of experience in Information Security Audit.",
      "Qualified Chartered Accountant and LLB.",
      "Certification in DISA, DIRM, and CEH."
    ]
  },
  {
    name: "Mrs. Ruchi Agarwal",
    role: "Executive Director (HR & Administration)",
    bullets: [
      "Over 16+ years of experience in IT Audit.",
      "Master`s in Arts From Kanpur University and Bachelor in Arts from Lucknow University.",
      "Certification in ISO 27001 Lead Auditor."
    ]
  },
  {
    name: "Mr. Rajesh Chandra Verma",
    role: "Independent Director",
    bullets: [
      "Qualification includes M. Sc, CAIIB (India) and CAIB (UK).",
      "Has more than 40 years of experience in the Banking and Financing sector.",
      "Held multiple positions during his tenure with SBI and was Head of Treasury (IRM Group).",
      "Worked with DCB Bank Ltd as Executive Vice President / Sr. Vice President & Head Treasury Group from May 2009 till he retired in April 2020."
    ]
  },
  {
    name: "Mr. Naveen Kumar Srivastava",
    role: "Independent Director",
    bullets: [
      "Qualification includes M.A. (Economics), CISA, CISB and ISO 27001 Lead Auditor.",
      "Has more than 40 years of experience in the Banking and Information Technology and Security Sector.",
      "Served State Bank of India for 28+ Years.",
      "Has notable achievements such as being the Founder Member of Information Security Department of State Bank of India.",
      "Has been contributor to Information Security Frameworks for Banks, IDRBT."
    ]
  },
  {
    name: "Mr. Nabankur Sen",
    role: "Independent Director",
    bullets: [
      "Qualifications includes B. Sc (Physics Honors), CISA, CISM, CRISC from ISACA, Illinois, Chicago, USA, and ISO 27001 Lead Auditor and Implementer.",
      "Has more than 45 years of experience in the Banking and Cyber Security and Information Technology and Security sector.",
      "Has served State Bank of India for 30+ Years.",
      "Has been Chief Information Security Officer in Axis Bank between April, 2005 and September, 2013.",
      "Has featured among the Top-100 CISOs across the country repeatedly from 2013 till 2019 from CISO platform, Bangalore."
    ]
  }
];

export default function BoardOfDirectors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL GOVERNANCE HEADER (HERO) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                {/* NAVIGATION: INSTITUTIONAL HIERARCHY PATHWAY */}
                <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <Link to="/investors/relations" className="hover:text-aaa-primary transition-colors text-slate-400">Investors</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Board of Directors</span>
                </nav>
                <h1 className="text-slate-900 font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Board of <span className="text-aaa-primary not-italic">Directors</span>
                </h1>
                <p className="mt-6 text-slate-500 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  Governance through wisdom, expertise, and principled leadership.
                </p>
              </div>
              <div
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0"
              >
                <img src="/management_hero_visual.png" className="w-full h-full object-cover" alt="Board of Directors" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: BOARD OF DIRECTORS PORTFOLIO --- */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1200px" }}>
            <div className="space-y-10 lg:space-y-16">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-slate-100 p-6 lg:p-10 shadow-sm rounded-[40px] transition-all duration-500 w-full hover:shadow-xl group"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4 group-hover:text-aaa-primary transition-colors">
                      {member.name}
                    </h2>
                  <p className="text-aaa-primary font-bold text-[0.8rem] uppercase tracking-widest mb-6 border-b border-slate-50 pb-6">
                    {member.role}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 pt-4">
                    {member.bullets.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Trophy className="w-3.5 h-3.5 text-aaa-primary/60 mt-1 shrink-0" />
                        <span className="text-slate-600 text-[0.85rem] font-bold leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BackToTop />
    </>
  );
}
