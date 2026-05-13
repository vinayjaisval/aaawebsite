import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Mail,
  User,
  Phone,
  MessageSquare
} from "lucide-react";
import { BackToTop } from "../components/back-to-top";

/**
 * AAA Technologies Institutional Careers Portal
 * ULTRA-THIN SYNC: Strict height preservation with font family parity.
 */
export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      title: "Senior Cyber Security Auditor",
      dept: "Compliance & Audit",
      location: "Mumbai / Remote",
      type: "Full-Time",
      bullets: [
        "5+ years in InfoSec / Cyber Security Audit.",
        "Knowledge of ISO 27001, CERT-In, RBI guidelines.",
        "CISA, CISSP, or CEH preferred."
      ]
    },
    {
      title: "VAPT Specialist",
      dept: "Technical Audit",
      location: "Mumbai",
      type: "Full-Time",
      bullets: [
        "Expertise in Web/Mobile App VAPT.",
        "Tools: Burp Suite, Metasploit, Nessus.",
        "Strong technical report writing skills."
      ]
    },
    {
      title: "Network Security Engineer",
      dept: "Infrastructure Security",
      location: "Mumbai / Hybrid",
      type: "Full-Time",
      bullets: [
        "Hands-on with Firewalls, IDS/IPS, VPN.",
        "TCP/IP networking & security protocols.",
        "CCNA Security / CCNP preferred."
      ]
    }
  ];

  const hiringSteps = [
    { title: "Application Review", desc: "Our recruitment desk reviews your technical foundation." },
    { title: "Technical Assessment", desc: "Deep-dive interview with our subject matter experts." },
    { title: "Cultural Alignment", desc: "Final discussion on ethics, mission, and institutional fit." },
    { title: "Onboarding", desc: "Step into the vanguard of India's premier audit firm." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden selection:bg-[#35268F]/10">
      <main>
        {/* SECTION 1: THE ULTRA-THIN HERO (STRICT HEIGHT Preservation) */}
        <section className="relative py-8 lg:py-10 overflow-hidden border-b border-white/5 bg-[#1A1040]">
          {/* Subtle Background Texture Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover opacity-30"
              alt="AAA Technologies Corporate Office"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1040] via-[#1A1040]/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 max-w-[1150px] relative z-10">
            {/* MASTER TOKEN: 11px Metadata, 0.3em Tracking */}
            <nav className="flex items-center gap-2 mb-4 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/40">
              <Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-2.5 h-2.5 opacity-30 shrink-0" />
              <span className="text-[#35268F] tracking-[0.3em] font-extrabold uppercase">Careers</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white font-extrabold uppercase tracking-tighter leading-tight italic mb-3 text-[2.2rem] md:text-[3.5rem]"
                >
                  Join The <span className="text-[#35268F] not-italic">Expert Vanguard</span>
                </motion.h1>

                {/* HIGH-DENSITY TEXT: No bulky boxes to preserve thin layout */}
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[16px] md:text-[18px] text-white/40 font-medium leading-relaxed max-w-2xl mb-6 border-l-2 border-[#35268F]/50 pl-6 italic"
                >
                  A legacy represented by two decades of uncompromising trust and digital resilience since 2000.
                </motion.p>

                <div className="flex flex-wrap gap-5">
                  <a href="#openings" className="bg-white text-[#1A1040] px-8 py-3.5 rounded-xl font-extrabold uppercase tracking-[0.2em] text-[12px] hover:bg-[#35268F] hover:text-white transition-all shadow-lg">
                    View Openings
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ORGANIZATIONAL METRICS */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-[1150px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Team", value: "200+" },
                { label: "First Listed", value: "2020" },
                { label: "Experience", value: "22+ Yrs" },
                { label: "Audit depth", value: "10,000+" }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-slate-50 pl-6">
                  <p className="text-aaa-primary font-extrabold text-[11px] uppercase tracking-[0.3em] mb-1">{stat.label}</p>
                  <h3 className="text-[#1A1040] font-extrabold text-[1.8rem] leading-none italic tracking-tight">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: RECRUITMENT ROADMAP */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-[1150px]">
            <div className="text-center mb-8">
              <h4 className="text-aaa-primary font-extrabold uppercase tracking-[0.3em] text-[11px] mb-2">Roadmap</h4>
              <h2 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-[24px] md:text-[32px] italic leading-none">
                Your Path <span className="text-aaa-primary not-italic">To Excellence</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {hiringSteps.map((step, i) => (
                <div key={i} className="relative group p-5 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white border border-aaa-primary/10 flex items-center justify-center text-aaa-primary font-extrabold text-[12px] shadow-sm mb-4 group-hover:bg-aaa-primary group-hover:text-white transition-all duration-500">
                    0{i + 1}
                  </div>
                  <h3 className="text-[#1A1040] font-extrabold uppercase tracking-widest text-[11px] mb-2">{step.title}</h3>
                  <p className="text-[#60697B] text-[15px] leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CURRENT OPPORTUNITIES */}
        <section id="openings" className="py-12 bg-[#FBFBFF] border-y border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-[1150px]">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-[28px] md:text-[38px] italic leading-none">
                Current <span className="text-aaa-primary not-italic">Openings</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-3.5 h-3.5 text-aaa-primary" />
                      <span className="text-aaa-primary font-extrabold uppercase tracking-[0.3em] text-[11px]">{job.dept}</span>
                    </div>
                    <h3 className="text-[#1A1040] font-extrabold text-[20px] mb-4 leading-tight group-hover:text-aaa-primary transition-colors">{job.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-6 text-slate-400 text-[11px] font-extrabold uppercase tracking-widest border-b border-slate-50 pb-4">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {job.type}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[15px] text-[#60697B] leading-relaxed font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-aaa-primary/40 mt-1 shrink-0 group-hover:text-aaa-primary transition-colors" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#enquiry-form" className="w-full py-3.5 bg-[#1A1040] text-white rounded-xl font-extrabold uppercase tracking-[0.2em] text-[11px] hover:bg-aaa-primary transition-all text-center flex items-center justify-center gap-2.5 shadow-lg">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: RECRUITMENT ENQUIRY FORM */}
        <section id="enquiry-form" className="py-12 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-[1150px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-6">
                <h4 className="text-aaa-primary font-extrabold uppercase tracking-[0.3em] text-[11px] mb-3">Direct Connect</h4>
                <h2 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-[28px] md:text-[38px] italic leading-tight mb-6">
                  Begin Your <br />
                  <span className="text-aaa-primary not-italic">Vanguard Journey</span>
                </h2>
                <p className="text-[#60697B] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-md">
                  Interested in joining our elite team? Leave your details below and our talent acquisition team will reach out to you.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_-15px_rgba(26,16,64,0.08)] border border-slate-100 max-w-[450px] mx-auto lg:ml-auto group">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold uppercase tracking-widest text-[#1A1040] ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" />
                          <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] font-medium text-[#1A1040] focus:outline-none focus:border-aaa-primary transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold uppercase tracking-widest text-[#1A1040] ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" />
                          <input type="email" placeholder="email@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] font-medium text-[#1A1040] focus:outline-none focus:border-aaa-primary transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold uppercase tracking-widest text-[#1A1040] ml-1">Contact No.</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" />
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          pattern="[0-9]{10}"
                          inputMode="numeric"
                          onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          }}
                          placeholder="10-Digit Mobile Number"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] font-medium text-[#1A1040] focus:outline-none focus:border-aaa-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold uppercase tracking-widest text-[#1A1040] ml-1">Technical Expertise / Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-3.5 h-3.5 text-slate-300" />
                        <textarea
                          rows={3}
                          placeholder="Tell us about your technical expertise..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-11 pr-4 text-[14px] font-medium text-[#1A1040] focus:outline-none focus:border-aaa-primary transition-all resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-[#1A1040] text-white rounded-lg font-extrabold uppercase tracking-[0.2em] text-[12px] hover:bg-aaa-primary transition-all shadow-lg flex items-center justify-center gap-2.5 group mt-2">
                      Submit Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  );
}
