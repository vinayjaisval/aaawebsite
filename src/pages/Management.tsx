import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const leaders = [
  {
    name: "Mr. Santosh Kumar Pandey",
    role: "Whole Time Director",
    image: "/images/santosh-kumar-pandey.jpg",
    experience: "Mr. Santosh Kumar Pandey is a seasoned business leader with over 26 years of experience in corporate management and technology innovation. Founder of a prominent GPS and IoT solutions firm driving geospatial and industrial automation frameworks.",
    qualifications: "Certified in CISA, ISO 27001:22 Certified Lead Auditor, ISO 42001:23, CEH and CHFI.",
    bullets: [
      "Emphasizes strategic IIOT / Drone based software and hardware project management.",
      "Aligns core technical offerings with mission-critical client objectives.",
      "Committed to operational excellence and sustainable business growth.",
      "Successful execution of complex, large-scale digital transformation projects."
    ]
  },
  {
    name: "Mr. Karan Sharma",
    role: "Executive Director",
    image: "/images/karan-sharma.jpg",
    experience: "Over 10 years of professional experience in international trade, business development, and business operations across reputed organisations.",
    qualifications: "Master's degree in International Business Management from IMT Ghaziabad and BBA from Chaudhary Charan Singh University, Meerut.",
    bullets: [
      "Brings a strong blend of strategic leadership, commercial acumen, and global business expertise.",
      "Instrumental in driving business growth and managing client & stakeholder relationships.",
      "Overseeing business operations and identifying new opportunities in international markets.",
      "Committed to building sustainable business relationships and creating long-term value."
    ]
  },
  {
    name: "Ms. Jyoti Torani",
    role: "Independent Director",
    image: "/images/jyoti-trani.jpg",
    experience: "Qualified professional with substantial experience in the fields of audit, internal control systems, tax matters, compliance, and accounting.",
    qualifications: "Professional background across Statutory Audit, GST Compliance, Income Tax Preparation & Financial Analysis.",
    bullets: [
      "Worked across statutory audit and GST compliance functions.",
      "Extensive experience in income tax preparation and accounting.",
      "Spans risk assessment and MIS reporting.",
      "Expertise in financial analysis and internal control systems."
    ]
  },
  {
    name: "Mr. Ashok Kumar Chordia",
    role: "Promoter Non Executive Director",
    image: "/images/ashok-kumar-chordia.jpg",
    experience: "Chartered Accountant and a seasoned corporate finance professional associated with Mentor Capital Services Private Limited.",
    qualifications: "Qualified Chartered Accountant & Seasoned Corporate Finance Professional.",
    bullets: [
      "Experience in corporate advisory and working capital finance.",
      "Expertise in debt and equity structuring.",
      "Involved in finance, taxation, and restructuring over the years.",
      "Holds director-level positions in multiple companies in corporate management."
    ]
  },
  {
    name: "Mr. Premendra Singh Rajput",
    role: "Independent Director",
    image: "/images/premendra-singh-rajput.jpg",
    experience: "Over 24 years of extensive IT industry experience, specializing in global program management, delivery governance, and enterprise digital transformation.",
    qualifications: "Specialist in Global Program Management, Enterprise Digital Transformation & Delivery Governance.",
    bullets: [
      "Deep expertise in managing highly complex, data-intensive IT infrastructures.",
      "Oversees cyber audit and strategic risk management initiatives.",
      "Experienced in global delivery and governance of critical data & marketing platforms.",
      "Proven track record in risk identification, team collaboration & contract management."
    ]
  },
  {
    name: "Mr. Prateek Bhansali",
    role: "Independent Director",
    image: "/images/prateek-bhansali.jpg",
    experience: "Seasoned professional with extensive experience in cyber security, information systems auditing, risk advisory, and IT governance.",
    qualifications: "Expertise across PCI DSS, SOC Compliance, VAPT, ISO standards and various audit frameworks.",
    bullets: [
      "Worked across PCI DSS, SOC Compliance & VAPT domains.",
      "Handles complex technical audits and regulatory assessments.",
      "Strategic advisory assignments in technology assurance.",
      "Proven expertise in IT governance and risk advisory."
    ]
  }
];

export default function Management() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-white">
        {/* --- SECTION: INSTITUTIONAL LEADERSHIP OVERVIEW (HERO) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                {/* NAVIGATION: INSTITUTIONAL HIERARCHY PATHWAY */}
                <nav className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Our Management</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: '1.1' }}>
                  Our <span className="text-aaa-primary">Management</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  People who are doing things the right way and their brief profiles.
                </div>
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

          <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="space-y-10 lg:space-y-16">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center bg-white border border-slate-100 p-6 lg:p-10 shadow-sm rounded-[40px] transition-all duration-500 w-full overflow-hidden group"
                >
                  <div className={`md:col-span-4 flex justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative w-full max-w-[330px] aspect-[4/5] overflow-hidden rounded-[30px] border border-slate-100 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={leader.image}
                        className="w-full h-full object-cover object-top"
                        alt={leader.name}
                      />
                    </div>
                  </div>

                  <div className={`md:col-span-8 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A1040] tracking-tight leading-tight mb-3">
                      {leader.name}
                    </h2>
                    <p className="text-[#008253] font-bold text-[11px] uppercase tracking-wider mb-6">{leader.role}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex gap-4 items-start">
                        <Briefcase className="w-5 h-5 text-aaa-primary/80 shrink-0 mt-1" />
                        <p className="text-slate-600 text-justify leading-[1.8] text-[0.95rem] font-medium">
                          {leader.experience}
                        </p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <GraduationCap className="w-5 h-5 text-aaa-primary/80 shrink-0 mt-1" />
                        <p className="text-slate-600 text-justify leading-[1.8] text-[0.95rem] font-medium">
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
    </>
  );
}
