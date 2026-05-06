import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin,
  ShieldCheck, TrendingUp, Award, Users,
  Search, ClipboardCheck, MonitorCheck, ShieldAlert, Network, HelpCircle,
  ArrowUp, Menu, X, Landmark, Building2, BarChart3, Globe2, HeartPulse, Store, Bolt, GraduationCap, Briefcase, Truck, ChevronDown, Quote
} from "lucide-react";

// ── Scroll-cue observer: adds 'is-visible' to [data-cue] elements on scroll ──
function useScrollCue() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-cue]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.getAttribute("data-delay") || "0";
            setTimeout(() => {
              el.classList.add("is-visible");
            }, parseInt(delay));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// --- SECTIONS ---

function Hero() {
  return (
    <div className="flex flex-col w-full font-sans">
      <section className="bg-[#F4F3FB] text-center px-4 flex items-center pt-32 pb-64 md:pt-16 md:pb-80 md:min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span
              className="inline-block px-5 py-2 rounded-full text-[13px] font-bold mb-6"
              style={{
                background: 'var(--red-50)',
                color: 'var(--red-600)',
                border: '1px solid var(--red-200)',
                letterSpacing: '0.06em',
                animationName: 'slideInDown',
                animationDuration: '700ms',
                animationTimingFunction: 'ease',
                animationDelay: '0ms',
                animationDirection: 'normal',
                animationFillMode: 'both'
              }}
            >
              CERT-In Empanelled Since 2005
            </span>
            <h1 data-cue className="mb-6 font-extrabold tracking-tight text-[#1A1040]" style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em'
            }}>
              India's Premier<br />
              Cybersecurity<br />
              <span className="decoration-aaa">Audit &amp; Consulting</span> Firm
            </h1>
            <p data-cue className="text-[#60697b] text-[17px] md:text-[19px] leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              We have protected 120+ organisations across 12+ industries for over 22+ years. <br className="hidden md:block" />
              Listed on NSE and BSE. Certified to ISO 9001:2015 and ISO 27001:2013.
            </p>
            <div data-cue className="flex flex-wrap justify-center gap-3">
              <button className="bg-[#35268F] hover:bg-[#251b64] text-white px-8 py-3 rounded-[8px] text-[15px] font-bold transition-all shadow-xl shadow-[#35268F]/20">
                See All Services
              </button>
              <button className="border-2 border-[#35268F] text-[#35268F] hover:bg-[#35268F] hover:text-white px-8 py-3 rounded-[8px] text-[15px] font-bold transition-all">
                Request a Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1040] text-white px-4 pb-20 md:pb-28">
        <div className="container mx-auto">
          <figure data-cue className="relative -mt-32 md:-mt-64 mb-12 md:mb-20 max-w-6xl mx-auto z-20 px-4">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20">

              {/* Image */}
              <img
                src="/assets/img/photos/banner0.png"
                alt="Cybersecurity Excellence"
                className="w-full h-auto block"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full z-10 
    bg-gradient-to-r from-black/80 via-black/40 to-transparent">
              </div>

            </div>
          </figure>
          <div data-cue className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4">
            <h2 className="text-xl md:text-[32px] lg:text-[34px] font-bold leading-tight text-white" style={{ color: '#fff !important' }}>
              India's first and only stock-exchange-listed company focused entirely on IT and Cybersecurity Audit.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "CERT-In Empanelled", desc: "India's computer security authority has approved us since 2005. That approval has been renewed every year." },
              { icon: BarChart3, title: "NSE & BSE Listed", desc: "From November 28, 2022, we trade on both the NSE and BSE main boards. Public listing means full financial transparency." },
              { icon: Award, title: "ISO 27001 Certified", desc: "We hold ISO 9001:2015 and ISO 27001:2013 certification. We follow the same standards we audit for our clients." },
              { icon: Users, title: "Our Expertise", desc: "Our team's experience adds up to over 1,000 years. That depth covers every major industry in India." }
            ].map((usp, i) => (
              <div key={i} data-cue className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#35268F] flex items-center justify-center mb-6">
                  <usp.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-[19px] font-bold mb-3 text-white" style={{ color: '#fff !important' }}>{usp.title}</h4>
                <p className="text-white/60 text-[14px] leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ClientTicker() {
  const clients = [
    "sbi.png", "bank of baroda.png", "bank of india.png", "bank of maharashtra.png",
    "union bank.png", "central bank of india.png", "canra bank.png", "federal bank.png",
    "lic.png", "nic.png", "CCA.png", "eesl.png", "chips.png", "ggem.png", "tnega.png"
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-50 font-sans">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">Empanelled & Trusted By</p>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee gap-16 items-center whitespace-nowrap px-8">
          {[...clients, ...clients].map((img, i) => (
            <img
              key={i}
              src={`/assets/img/clients/${img}`}
              alt="Client Logo"
              className="h-10 md:h-12 w-auto transition-all duration-500 cursor-default"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Search, title: "IT Security Audit", path: "/it-security-audit", desc: "We examine how well your organisation protects its information. You get a clear picture of weak points and a practical plan to fix them." },
    { icon: ClipboardCheck, title: "IT Assurance & Compliance", path: "/it-assurance-compliance", desc: "We help your organisation meet the rules set by regulators such as RBI, SEBI, and IRDAI. No last-minute scrambles before an audit." },
    { icon: MonitorCheck, title: "IT Systems Audit", path: "/it-systems-audit", desc: "We review the controls inside your IT systems to confirm they are reliable, accurate, and secure for day-to-day business use." },
    { icon: ShieldAlert, title: "Cyber Security Audit", path: "/cyber-security-audit", desc: "We test your defences the way a real attacker would, then tell you exactly what to fix and how ready you are to respond." },
    { icon: Network, title: "IT Governance", path: "/it-governance", desc: "We help leadership ensure IT decisions support business goals. We design policies and risk frameworks built on COBIT and ISO standards." }
  ];

  return (
    <section id="services" className="py-24 bg-white px-4 font-sans">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#EBE9F9] text-[#35268F] font-bold uppercase tracking-[0.12em] text-[0.75rem] px-4 py-1.5 rounded-full mb-4">What We Do</span>
          <h2 className="text-[calc(1.285rem+0.42vw)] md:text-[2.25rem] font-extrabold text-[#1A1040] leading-[1.2] mb-4">Cybersecurity and IT Audit<br />Services We Offer</h2>
          <p className="text-[#60697b] text-[0.9rem] leading-relaxed">From checking for vulnerabilities to building full governance frameworks, we cover every layer of IT security and assurance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Link key={i} to={s.path} className="bg-white p-8 rounded-xl border border-[#EBE9F9] shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col items-start text-left decoration-none hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#EBE9F9] rounded-[14px] flex items-center justify-center mb-6 text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#1A1040] mb-3 group-hover:text-[#35268F] transition-colors">{s.title}</h3>
              <p className="text-[#60697b] mb-6 text-[0.9rem] leading-[1.65] flex-grow">{s.desc}</p>
              <button className="bg-transparent border-2 border-[#35268F] text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white px-5 py-2 rounded-lg font-bold text-[13px] transition-all uppercase tracking-wider">
                See How It Works
              </button>
            </Link>
          ))}
          <Link to="/contact" className="bg-[#F4F3FB] border-2 border-dashed border-[#35268F]/30 p-8 rounded-xl flex flex-col justify-center items-center text-center relative overflow-hidden decoration-none hover:border-[#35268F]/60 transition-all">
            <div className="w-16 h-16 bg-[#35268F]/10 rounded-full flex items-center justify-center mb-6">
              <HelpCircle className="h-8 w-8 text-[#35268F]" />
            </div>
            <h3 className="text-[21px] font-bold text-[#1A1040] mb-3">Not sure where to start?</h3>
            <p className="text-[#60697b] mb-6 text-[15px] md:text-[16px] leading-[1.65]">Tell us about your organization. Our team will point you in the right direction, no sales pressure.</p>
            <div className="bg-[#35268F] text-white px-8 py-3 rounded-lg font-bold text-[15px] transition-transform active:scale-95 shadow-lg">
              Talk to Our Team
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrackRecord() {
  return (
    <section className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map py-24 relative overflow-hidden" style={{ backgroundAttachment: 'scroll' }}>
      {/* Complex Background Effect: Radial Gradients + Map */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 80% 30%, rgba(53, 38, 143, 0.05) 0%, transparent 55%), 
            radial-gradient(ellipse at 10% 80%, rgba(0, 130, 83, 0.03) 0%, transparent 50%),
            url('/assets/img/map.png')
          `,
          backgroundSize: 'auto, auto, 70% auto',
          backgroundPosition: 'center, center, center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="row">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 data-cue className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#35268F] bg-[#EBE9F9] inline-block px-4 py-1.5 rounded-full mb-4">Our Track Record</h2>
            <h3 data-cue className="text-[calc(1.325rem+0.9vw)] lg:text-[2.6rem] font-extrabold text-[#1A1040] mb-12 px-2 lg:px-24 leading-[1.2]">
              Numbers that reflect more than two decades of focused work in cybersecurity audit.
            </h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
            {/* Stat 1 */}
            <div data-cue className="relative px-4 py-6 md:py-0">
              <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#35268F] mb-1 tracking-tighter leading-none">22+</h3>
              <p className="text-[0.95rem] text-[#60697b] font-semibold mb-0">Years in Business</p>
              {/* Divider */}
              <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-[#EBE9F9]"></div>
            </div>

            {/* Stat 2 */}
            <div data-cue data-delay="300" className="relative px-4 py-6 md:py-0">
              <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#35268F] mb-1 tracking-tighter leading-none">12+</h3>
              <p className="text-[0.95rem] text-[#60697b] font-semibold mb-0">Industries Served</p>
              {/* Divider */}
              <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-[#EBE9F9]"></div>
            </div>

            {/* Stat 3 */}
            <div data-cue data-delay="600" className="px-4 py-6 md:py-0">
              <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#35268F] mb-1 tracking-tighter leading-none">120+</h3>
              <p className="text-[0.95rem] text-[#60697b] font-semibold mb-0">Organisations Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="bg-[#35268F] text-white py-16 md:py-20 font-sans border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-[66%] text-left">
            <h2 className="text-white mb-2 text-[1.6rem] font-bold leading-tight">
              Ready to know where your security stands?
            </h2>
            <p className="text-white mb-0 opacity-[0.82] text-[1rem] leading-relaxed">
              Our CERT-In empanelled team tailors every engagement to your industry and the regulators you report to.
            </p>
          </div>
          <div className="lg:w-[34%] lg:text-right">
            <a
              href="#contact"
              className="inline-block bg-white text-[#35268F] hover:bg-white/95 px-8 py-3.5 rounded font-bold text-[1rem] transition-all duration-200 shadow-xl decoration-none"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const milestones = [
    { num: "01", year: "2002", title: "Founded", desc: "AAA Technologies opened its doors in Mumbai as an IT and cybersecurity audit firm." },
    { num: "02", year: "2005", title: "CERT-In Empanelled", desc: "India's national cybersecurity authority approved us to conduct IT security audits." },
    { num: "03", year: "2009", title: "Maharashtra IT Award", desc: "The state government recognised our work in IT audit and information security." },
    { num: "04", year: "2015", title: "ISO Certified", desc: "We earned dual ISO certification and committed to following global quality standards." },
    { num: "05", year: "2020", title: "IPO", desc: "We went public on NSE Emerge and were featured in Forbes India." },
    { num: "06", year: "2022", title: "Main Board Listed", desc: "We moved up to both the NSE and BSE main boards, making us the first in India." },
    { num: "07", year: "2023", title: "CEO Magazine Award", desc: "Honoured with a Certificate of Excellence in IS Audit and Cyber Security." },
    { num: "08", year: "2024", title: "Governor's Award", desc: "The Governor of Maharashtra recognised our cybersecurity contributions." }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden border-t border-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#EBE9F9] text-[#35268F] font-bold uppercase tracking-[0.12em] text-[0.75rem] px-4 py-1.5 rounded-full mb-4">Our Journey</span>
          <h2 className="text-[calc(1.325rem+0.9vw)] md:text-[2.6rem] font-extrabold text-[#1A1040] mb-4 leading-tight">24 Years. One Focus. Cybersecurity Audit.</h2>
          <p className="text-[#60697b] max-w-3xl mx-auto text-[1.1rem] md:text-[1.2rem] font-medium leading-relaxed opacity-90">From a two-person IS audit firm in 2002 to India's only stock-exchange-listed cybersecurity audit company, here is how we got here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 relative max-w-6xl mx-auto">
          {milestones.map((m, i) => (
            <div key={i} className="relative group">
              <div className="flex flex-col">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F3FB] text-[#35268F] font-black text-lg mb-6 group-hover:bg-[#35268F] group-hover:text-white transition-all duration-300 shadow-sm border border-white">
                  {m.num}
                </span>
                <h4 className="text-[17px] font-bold text-[#1A1040] mb-2">{m.year}: {m.title}</h4>
                <p className="text-[#60697b] text-[14.5px] leading-relaxed font-medium">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    { icon: Landmark, name: "Banking" },
    { icon: Building2, name: "Government" },
    { icon: BarChart3, name: "Stock Brokers" },
    { icon: Globe2, name: "E-Commerce" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: Store, name: "Retail" },
    { icon: Bolt, name: "Energy & Power" },
    { icon: GraduationCap, name: "Education" },
    { icon: Briefcase, name: "Insurance" },
    { icon: Truck, name: "Logistics" },
    { icon: Building2, name: "Infrastructure" },
    { icon: ShieldCheck, name: "Defense" }
  ];

  return (
    <section className="py-24 bg-[#F4F3FB] px-4 font-sans" id="industries">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] mb-4 block">Industries We Serve</span>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1040] leading-tight">We Work Across 12+ Industries</h2>
          <p className="text-[#60697b] mt-4 font-medium leading-relaxed">Wherever RBI, SEBI, IRDAI, or MeitY sets the rules, we know the regulatory landscape.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-8 rounded-[12px] shadow-sm hover:shadow-2xl transition-all text-center flex flex-col items-center border border-slate-100 group">
              <div className="w-12 h-12 bg-[#F4F3FB] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <ind.icon className="h-6 w-6 text-[#35268F]" />
              </div>
              <span className="font-bold text-[#1A1040] text-sm tracking-tight">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { text: "AAA Technologies conducted a thorough IT Security Audit for our bank. Their expertise and methodical approach gave our board complete confidence that our systems are properly protected. Highly recommended.", role: "Chief Information Security Officer", company: "Leading Private Sector Bank, India" },
    { text: "Their Cyber Security Audit helped us find critical gaps in our systems. The action plan they gave us was clear and easy to follow. AAA Technologies is our trusted partner for annual security checks.", role: "Head of IT Risk", company: "Government Financial Institution" },
    { text: "We engaged AAA Technologies for IT Assurance under SEBI mandates. Their domain knowledge of Indian regulatory requirements is unmatched. Delivered on time, exceeded expectations.", role: "Chief Compliance Officer", company: "NSE-Listed Corporate, Mumbai" }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white font-sans overflow-hidden border-t border-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-[#F4F3FB] rounded-3xl overflow-hidden shadow-sm">
          <div className="lg:w-1/2 min-h-[400px] relative">
            <img src="/assets/img/photos/banner1.png" alt="Client Testimonials" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#35268F]/10"></div>
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] mb-4 block">Client Voices</span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#1A1040] leading-tight mb-2">What Our Clients Say</h2>
            </div>
            <div className="relative min-h-[240px]">
              {testimonials.map((t, i) => (
                <div key={i} className={`transition-all duration-700 absolute inset-0 ${active === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                  <Quote className="h-10 w-10 text-[#008253] mb-6 opacity-40" />
                  <p className="text-[#60697b] text-[18px] md:text-[20px] leading-relaxed font-medium mb-10 italic">"{t.text}"</p>
                  <div>
                    <h4 className="text-[#1A1040] font-bold text-[16px] mb-1">{t.role}</h4>
                    <p className="text-[#008253] font-bold text-[14px] uppercase tracking-wide">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-12">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-2 transition-all duration-300 rounded-full ${active === i ? 'w-8 bg-[#35268F]' : 'w-2 bg-slate-300'}`}></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const awards = [
    { year: "2022", title: "ET Change Makers Award", desc: "Awarded the ET Change Makers Award in Cyber Security by the Economic Times.", img: "ECT.png" },
    { year: "2022", title: "CEO Magazine: Excellence", desc: "Recognised for excellence in IS Audit and Cyber Security by CEO Magazine.", img: "2022.png" },
    { year: "2021", title: "Business Leader of the Year", desc: "Honoured as Business Leader of the Year for leadership in cybersecurity.", img: "15.png" },
    { year: "2020", title: "Most Trusted Company", desc: "Named Most Trusted Cyber Security Auditing and Consulting firm.", img: "RC3.png" }
  ];

  return (
    <section className="py-24 bg-[#F4F3FB] font-sans border-t border-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] mb-4 block">Recognition</span>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1040] leading-tight mb-4">Awards & Achievements</h2>
          <p className="text-[#60697b] font-medium leading-relaxed">Over two decades of consistent recognition from industry bodies and government organisations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, i) => (
            <div key={i} className="award-slide-card">
              <div className="award-slide-img">
                <img src={`/assets/img/awards/${a.img}`} alt={a.title} className="max-h-[100px] w-auto" />
              </div>
              <div className="p-6">
                <span className="award-year">{a.year}</span>
                <h3 className="text-[#1A1040] font-bold text-[16px] mb-2 leading-tight min-h-[3rem]">{a.title}</h3>
                <p className="text-[#60697b] text-[13.5px] leading-relaxed font-medium">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-[#35268F] text-[#35268F] hover:bg-[#35268F] hover:text-white px-8 py-3 rounded-[8px] font-bold transition-all">
            View All Awards & Achievements
          </button>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const team = [
    { name: "Mr. Anjay Agarwal", role: "Chairman & Managing Director", img: "anjay-agarwal.png" },
    { name: "Mr. Venugopal Dhoot", role: "Whole Time Director & CFO", img: "venugopal-dhoot.png" },
    { name: "Mrs. Ruchi Agarwal", role: "Executive Director, HR & Admin", img: "ruchi-agarwal.png" },
    { name: "Mr. Rajesh C. Verma", role: "Independent Director", img: "rajesh-verma.jpg" },
    { name: "Mr. Naveen Srivastava", role: "Independent Director", img: "naveen-srivastava.jpg" },
    { name: "Mr. Nabankur Sen", role: "Independent Director", img: "nabankur-sen.jpg" }
  ];

  return (
    <section className="py-24 bg-white font-sans border-t border-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] mb-4 block">Our Leadership</span>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A1040] leading-tight mb-4">The People Who Lead AAA Technologies</h2>
          <p className="text-[#60697b] font-medium leading-relaxed">Our leadership team brings decades of hands-on experience in IT audit and information security.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((m, i) => (
            <div key={i} className="team-card group">
              <div className="team-avatar group-hover:scale-110 transition-transform duration-300">
                <img src={`/assets/img/team/${m.img}`} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-[#1A1040] font-bold text-[13px] mb-2 leading-tight min-h-[2.5rem]">{m.name}</h4>
              <p className="text-[#008253] font-bold text-[11px] uppercase tracking-wider leading-tight min-h-[2.5rem]">{m.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-[#35268F] text-[#35268F] hover:bg-[#35268F] hover:text-white px-8 py-3 rounded-[8px] font-bold transition-all">
            Meet the Full Team
          </button>
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  useScrollCue(); // ← activates slideInDown on all [data-cue] elements
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        <Hero />
        <ClientTicker />
        <Services />
        <TrackRecord />
        <CTABand />
        <Journey />
        <Industries />
        <Testimonials />
        <Awards />
        <Leadership />
      </main>
    </div>
  );
}
