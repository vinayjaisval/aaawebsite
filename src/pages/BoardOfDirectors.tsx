import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const boardMembers = [
  {
    name: "Mr. Santosh Kumar Pandey",
    role: "Whole Time Director",
    image: "/images/santosh-kumar-pandey.jpg",
    bullets: [
      "Mr. Santosh Kumar Pandey is a seasoned business leader with over 26 years of experience in corporate management and technology innovation. As the Founder of a prominent GPS and IoT solutions firm, he has spent the last 16 years driving the development and deployment of advanced geospatial and industrial automation frameworks.",
      "His leadership approach emphasizes strategic IIOT / Drone based rigorous software and hardware based project management, and the alignment of core technical offerings with mission-critical client objectives.",
      "Mr. Pandey's career is defined by a commitment to operational excellence, sustainable business growth, and the successful execution of complex, large-scale digital transformation projects.",
      "He has rich experience in Information Security protocols with certification in CISA, ISO 27001:22 Certified Lead Auditor, ISO 42001:23, CEH and CHFI."
    ]
  },
  {
    name: "Mr. Karan Sharma",
    role: "Executive Director",
    image: "/images/karan-sharma.jpg",
    bullets: [
      "Mr. Karan Sharma holds a Master's degree in International Business Management from the Institute of Management Technology (IMT), Ghaziabad, and a Bachelor's degree in Business Administration (BBA) from Chaudhary Charan Singh University, Meerut.",
      "With over 10 years of professional experience in international trade, business development, and business operations across reputed organisations, he brings a strong blend of strategic leadership, commercial acumen, and global business expertise.",
      "Throughout his career, he has been instrumental in driving business growth, developing and managing client and stakeholder relationships, overseeing business operations, and identifying new opportunities in international markets. His experience reflects a strong understanding of global business practices, strategic management, operational excellence, and relationship management.",
      "A results-oriented professional with proven leadership capabilities, Mr. Sharma is committed to building sustainable business relationships, delivering operational excellence, and creating long-term value for organisations and their stakeholders."
    ]
  },
  {
    name: "Ms. Jyoti Torani",
    role: "Independent Director",
    image: "/images/jyoti-trani.jpg",
    bullets: [
      "Ms. Jyoti Torani is a qualified professional with substantial experience in the fields of audit, internal control systems, tax matters, compliance, and accounting.",
      "She has worked across statutory audit, GST compliance, income tax preparation, and accounting functions.",
      "Her background spans risk assessment, MIS reporting, and financial analysis."
    ]
  },
  {
    name: "Mr. Ashok Kumar Chordia",
    role: "Promoter Non Executive Director",
    image: "/images/ashok-kumar-chordia.jpg",
    bullets: [
      "Mr. Ashok Kumar Chordia is a Chartered Accountant and a seasoned corporate finance professional.",
      "He is associated with Mentor Capital Services Private Limited and has experience in corporate advisory, working capital finance, and debt and equity structuring.",
      "He has been involved in finance, taxation, restructuring and business advisory functions over the years.",
      "He also holds director-level positions in multiple companies, reflecting his long-standing exposure to corporate management and governance."
    ]
  },
  {
    name: "Mr. Premendra Singh Rajput",
    role: "Independent Director",
    image: "/images/premendra-singh-rajput.jpg",
    bullets: [
      "Mr. Premendra Singh Rajput joins the Board of Directors bringing over 24 years of extensive IT industry experience, specializing in global program management, delivery governance, and enterprise digital transformation.",
      "His deep expertise in managing highly complex, data-intensive IT infrastructures helps the Company for overseeing its cyber audit and strategic risk management initiatives.",
      "He is also experienced in the global delivery and governance of critical data and marketing platforms.",
      "His comprehensive understanding of enterprise IT architectures, combined with his proven track record in risk identification, cross-functional team collaboration, and strict contract management, makes him an exceptional asset in shaping our board's cyber audit strategies and compliance frameworks."
    ]
  },
  {
    name: "Mr. Prateek Bhansali",
    role: "Independent Director",
    image: "/images/prateek-bhansali.jpg",
    bullets: [
      "Mr. Prateek Bhansali is a seasoned professional with extensive experience in cyber security, information systems auditing, risk advisory, and IT governance.",
      "He has worked across domains involving PCI DSS, SOC Compliance, VAPT, ISO standards and various audit frameworks.",
      "His core professional background includes handling complex technical audits, regulatory assessments, and strategic advisory assignments in the technology assurance domain."
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
                  <div className={`md:col-span-4 flex justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative w-full max-w-[330px] aspect-[4/5] overflow-hidden rounded-[30px] border border-slate-100 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={member.image}
                        className="w-full h-full object-cover object-top"
                        alt={member.name}
                      />
                    </div>
                  </div>

                  <div className={`md:col-span-8 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1040] tracking-tight leading-tight mb-3">
                      {member.name}
                    </h2>
                    <p className="text-[#008253] font-bold text-[11px] uppercase tracking-wider mb-6">
                      {member.role}
                    </p>

                    <div className="space-y-4">
                      {member.bullets.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start group/bullet">
                          <div className="w-1.5 h-1.5 rounded-full bg-aaa-primary/60 mt-2.5 shrink-0 group-hover/bullet:bg-aaa-primary transition-colors" />
                          <p className="text-[#60697B] text-[0.95rem] font-medium leading-[1.8] text-justify">
                            {item}
                          </p>
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
