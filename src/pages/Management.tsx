import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Linkedin, Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const leaders = [
  {
    name: "Mr. Anjay Agarwal",
    role: "Chairman & Managing Director",
    image: "https://www.aaatechnologies.co.in/img/Team/4764%20(1)%20(2).png",
    experience: "Over 29+ years of overall experience and 26+ years of experience in Information Security Audit / Cyber Security Audit.",
    qualifications: "Qualified Chartered Accountant, Company Secretary, Cost Accountant and Law from Mumbai University. Holds 25 prestigious professional certification",
    bullets: [
      "Eminent Information Security professional who has served both the National and International security community for over 20 years.",
      "Certifications includes such as CRISC(USA), CGEIT(USA), CISA(USA), CFE(USA), CIA(USA), ABCI(UK) FCA, ACMA, ACS, B. Com, LLB.",
      "55th professional in World to achieve COBIT Certified Assessor Designation",
      "1st person from Asia to be appointed as the Chairman of Governmental and Regulatory Agencies Board (GRA Board) of ISACA, International",
      "Involved in 10,000+ Information Technology and Cyber Security Audit assignments till date.",
      "Involved with various Government and professional bodies in various capacities including as Jury Member for the Maharashtra IT Awards; several Committees / Board of ISACA (USA) including Audit Committee / Finance Committee; President of ISACA, Mumbai Chapter in 2006-2007"
    ]
  },
  {
    name: "Mr. Venugopal M. Dhoot",
    role: "Whole Time Director, Director (Finance) & CFO",
    image: "https://www.aaatechnologies.co.in/img/Team/4767%20(1)%20(2).png",
    experience: "Over 36+ years of overall experience and 18+ years of experience in Information Security Audit",
    qualifications: "Qualified Chartered Accountant and LLB",
    bullets: [
      "Certification in DISA, DIRM, and CEH"
    ]
  },
  {
    name: "Mrs. Ruchi Agarwal",
    role: "Executive Director (HR & Administration)",
    image: "https://www.aaatechnologies.co.in/img/Team/4761%20(1)%20(1).png",
    experience: "Over 16+ years of experience in IT Audit",
    qualifications: "Master`s in Arts From Kanpur University and Bachelor in Arts from Lucknow University.",
    bullets: [
      "Certification in ISO 27001 Lead Auditor"
    ]
  },
  {
    name: "Mr. Rajesh Chandra Verma",
    role: "Independent Director",
    image: "https://www.aaatechnologies.co.in/img/Team/Rajesh%20Pic.jpg",
    experience: "Has more than 40 years of experience in the Banking and Financing sector.",
    qualifications: "Qualification includes M. Sc, CAIIB (India) and CAIB (UK)",
    bullets: [
      "Held multiple positions during his tenure with SBI and was Head of Treasury (IRM Group)",
      "Worked with DCB Bank Ltd as Executive Vice President/Sr. Vice President& Head Treasury Group from May 2009 till he retired in April 2020"
    ]
  },
  {
    name: "Mr. Naveen Kumar Srivastava",
    role: "Independent Director",
    image: "https://www.aaatechnologies.co.in/img/Team/Naveen%20Srivastava.jpg",
    experience: "Has more than 40 years of experience in the Banking and Information Technology and Security Sector.",
    qualifications: "Qualification includes M.A. (Economics), CISA, CISB and ISO 27001 Lead Auditor",
    bullets: [
      "Served State Bank of India for 28+ Years",
      "Has notable achievements such as being the Founder Member of Information Security Department of State Bank of India.",
      "Has been contributor to Information Security Frameworks for Banks, IDRBT."
    ]
  },
  {
    name: "Mr. Nabankur Sen",
    role: "Independent Director",
    image: "https://www.aaatechnologies.co.in/img/Team/Nabankur%20Sen-photo.jpg",
    experience: "Has more than 45 years of experience in the Banking and Cyber Security and Information Technology and Security sector.",
    qualifications: "Qualifications includes B. Sc (Physics Honors) , CISA, CISM, CRISC from ISACA, Illinois, Chicago, USA, and ISO 27001 Lead Auditor and Implementer.",
    bullets: [
      "Has served State Bank of India for 30+ Years",
      "Has been Chief Information Security Officer in Axis Bank between April, 2005 and September, 2013.",
      "Has featured among the Top-100 CISOs across the country repeatedly from 2013 till 2019 from CISO platform, Bangalore."
    ]
  }
];

export default function Management() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gray-100 transition-all font-sans overflow-x-hidden">
      <div className="sticky top-0 z-[100] bg-white border-b border-gray-100">
        </div>

      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL LEADERSHIP OVERVIEW (HERO) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                {/* NAVIGATION: INSTITUTIONAL HIERARCHY PATHWAY */}
                <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Our Management</span>
                </nav>
                <h1 className="text-slate-900 font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Our <span className="text-aaa-primary not-italic">Management</span>
                </h1>
                <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  People who are doing things the right way and their brief profiles.
                </p>
              </div>
              <div
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white"
              >
                <img src="/management_hero_visual.png" className="w-full h-full object-cover" alt="Leadership Chronicles" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: EXECUTIVE LEADERSHIP PROFILES --- */}
        <section className="pt-4 pb-20 bg-slate-50 relative overflow-hidden">
          {/* VISUAL ELEMENT: INSTITUTIONAL CONTINUITY AXIS */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-200 hidden lg:block z-0 opacity-40" />

          <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: "1200px" }}>
            <div className="space-y-10 lg:space-y-16">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center bg-white border border-slate-100 p-6 lg:p-10 shadow-sm rounded-[40px] transition-all duration-500 w-full overflow-hidden group"
                >
                  {/* LEADERSHIP PORTRAIT AND VISUAL CARD */}
                  <div className={`md:col-span-4 flex justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative w-full max-w-[330px] aspect-[4/5] overflow-hidden rounded-[30px] border border-slate-100 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={leader.image}
                        className="w-full h-full object-cover object-top"
                        alt={leader.name}
                      />
                    </div>
                  </div>

                  {/* LEADERSHIP BIOGRAPHY AND PROFESSIONAL CREDENTIALS */}
                  <div className={`md:col-span-8 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4 mb-4">
                      {leader.name}
                    </h2>
                    <p className="text-aaa-primary font-bold text-[0.85rem] uppercase tracking-[0.2em] mb-8 italic">{leader.role}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex gap-4 items-start">
                        <Briefcase className="w-5 h-5 text-aaa-primary/80 shrink-0 mt-1" />
                        <p className="text-slate-600 leading-relaxed text-[0.95rem] font-medium">
                          {leader.experience}
                        </p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <GraduationCap className="w-5 h-5 text-aaa-primary/80 shrink-0 mt-1" />
                        <p className="text-slate-600 leading-relaxed text-[0.95rem] font-medium">
                          {leader.qualifications}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 pt-4 border-t border-slate-100">
                      {leader.bullets.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <Trophy className="w-3.5 h-3.5 text-aaa-primary/60 mt-1 shrink-0" />
                          <span className="text-slate-600 text-[0.85rem] font-bold leading-snug">{item}</span>
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
    </div>
  );
}
