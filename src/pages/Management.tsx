import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, GraduationCap } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors font-sans overflow-x-hidden">
      <HeaderUtilityBar />
      <div className="sticky top-0 z-[100] bg-white border-b border-gray-100">
        <Header />
      </div>

      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL LEADERSHIP OVERVIEW (TOTAL MATCH HERO) --- */}
        <section className="relative py-12 sm:py-20 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                <nav className="flex items-center gap-2 mb-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-widest">Our Management</span>
                </nav>
                <div className="relative">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase italic flex flex-col gap-2">
                    <span>Our</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-aaa-primary opacity-70 font-bold tracking-[0.2em] transition-all">Management</span>
                  </h1>
                  <p className="mt-8 text-slate-600 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-medium">
                    People who are doing things the right way and their brief profiles
                  </p>
                </div>
              </div>
              <div
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white"
              >
                <img src="/management_hero_visual.png" className="w-full h-full object-cover" alt="Leadership Chronicles" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION: EXECUTIVE BOARD COMPOSITION (TOTAL MATCH SPACING) --- */}
        <section className="py-12 sm:py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="space-y-24 lg:space-y-40">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start transition-all duration-500 w-full overflow-hidden group"
                >
                  {/* Portrait (4 Columns) - Subtly Rounded 30px */}
                  <div className={`md:col-span-4 flex justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"} md:sticky md:top-32`}>
                    <div className="relative w-full max-w-[330px] aspect-[4/5] overflow-hidden rounded-[30px] border border-slate-100 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
                      <img
                        src={leader.image}
                        className="w-full h-full object-cover object-top"
                        alt={leader.name}
                      />
                    </div>
                  </div>

                  {/* Bio (8 Columns) - Professional Hierarchy */}
                  <div className={`md:col-span-8 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <div className="space-y-4 mb-12">
                      <div className="flex items-center gap-2 font-bold text-[11px] text-aaa-secondary uppercase tracking-widest">
                        <div className="h-[1px] w-8 bg-aaa-secondary" /> Service Overview
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">
                        {leader.name}
                      </h2>
                      <p className="text-aaa-primary font-bold text-xs sm:text-sm uppercase tracking-[0.3em] opacity-80">{leader.role}</p>
                    </div>

                    <div className="space-y-8 mb-16">
                      <div className="flex gap-6 items-start">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
                          <Briefcase className="w-6 h-6 text-aaa-primary" />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-[17px] font-medium pt-1">
                          {leader.experience}
                        </p>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
                          <GraduationCap className="w-6 h-6 text-aaa-primary" />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-[17px] font-medium italic pt-1 opacity-90 border-l-4 border-aaa-primary/10 pl-6 bg-slate-50/50 rounded-r-xl">
                          {leader.qualifications}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Professional Timeline</h3>
                        <div className="h-px w-full bg-slate-200/50" />
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        {leader.bullets.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-4 sm:p-5 bg-white border border-slate-100 rounded-2xl hover:bg-[#0f172a] transition-all duration-300 group cursor-default shadow-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary/30 group-hover:bg-white transition-all shrink-0" />
                            <span className="text-[11px] sm:text-[12px] font-bold text-slate-700 uppercase tracking-tight group-hover:text-white transition-colors leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
