import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Trophy } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const boardMembers = [
  {
    name: "Mr. Anjay Agarwal",
    role: "Chairman & Managing Director",
    image: "/images/anjay-agarwal.png",
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
    image: "/images/venugopal-dhoot.png",
    bullets: [
      "Over 36+ years of overall experience and 18+ years of experience in Information Security Audit.",
      "Qualified Chartered Accountant and LLB.",
      "Certification in DISA, DIRM, and CEH."
    ]
  },
  {
    name: "Mrs. Ruchi Agarwal",
    role: "Executive Director (HR & Administration)",
    image: "/images/ruchi-agarwal.png",
    bullets: [
      "Over 16+ years of experience in IT Audit.",
      "Master`s in Arts From Kanpur University and Bachelor in Arts from Lucknow University.",
      "Certification in ISO 27001 Lead Auditor."
    ]
  },
  {
    name: "Mr. Rajesh Chandra Verma",
    role: "Independent Director",
    image: "/images/rajesh-chandra-verma.jpg",
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
    image: "/images/naveen-kumar-srivastava.jpg",
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
    image: "/images/nabankur-sen-photo.jpg",
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
        <section className="relative py-12 lg:py-20 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,38,143,0.02),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 max-w-2xl">
                {/* NAVIGATION: INSTITUTIONAL HIERARCHY PATHWAY */}
                <nav className="flex items-center gap-2 mb-8 text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
                  <Link to="/" className="text-slate-400 hover:text-aaa-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200 shrink-0" />
                  <Link to="/investors/relations" className="text-slate-400 hover:text-aaa-primary transition-colors">Investors</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200 shrink-0" />
                  <span className="text-aaa-primary shrink-0 uppercase tracking-widest font-extrabold">Board of Directors</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[0.9] italic mb-8">
                  Board of <span className="text-aaa-primary not-italic">Directors</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  Governance through wisdom, expertise, and principled leadership.
                </div>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[250px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0 group">
                <img src="/management_hero_visual.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Board of Directors" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: BOARD OF DIRECTORS PORTFOLIO --- */}
        <section className="py-20 bg-slate-50/50 relative overflow-hidden selection:bg-aaa-primary/10">
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="space-y-12 lg:space-y-20">
              {boardMembers.map((member, idx) => (
                <div
                  key={member.name}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center bg-white border border-slate-100 p-8 lg:p-12 shadow-sm rounded-[40px] transition-all duration-500 w-full hover:shadow-[0_40px_80px_rgba(26,16,64,0.08)] group"
                >
                  {/* Portrait Section */}
                  <div className={`md:col-span-4 flex justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative w-full max-w-[330px] aspect-[4/5] overflow-hidden rounded-[30px] border border-slate-100 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={member.image}
                        className="w-full h-full object-cover object-top"
                        alt={member.name}
                      />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className={`md:col-span-8 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1A1040] tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-6 group-hover:text-aaa-primary transition-colors">
                      {member.name}
                    </h2>
                    <p className="text-aaa-primary font-extrabold text-[11px] uppercase tracking-[0.3em] mb-8 border-b border-slate-50 pb-8">
                      {member.role}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 pt-4">
                      {member.bullets.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start group/bullet">
                          <Trophy className="w-4 h-4 text-aaa-primary/40 mt-1 shrink-0 group-hover/bullet:text-aaa-primary transition-colors" />
                          <span className="text-[#60697B] text-[0.95rem] font-medium leading-[1.8] text-justify">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
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
