import {
  Search,
  ClipboardCheck,
  MonitorCheck,
  ShieldAlert,
  Network,
  HelpCircle,
  ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom"; // ✅ ADD THIS
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "IT Security Audit",
    description: "We examine how well your organisation protects its information. You get a clear picture of weak points and a practical plan to fix them.",
    href: "/it-security-audit"
  },
  {
    icon: ClipboardCheck,
    title: "IT Assurance & Compliance",
    description: "We help your organisation meet the rules set by regulators such as RBI, SEBI, and IRDAI. No last-minute scrambles before an audit.",
    href: "/it-assurance-compliance"
  },
  {
    icon: MonitorCheck,
    title: "IT Systems Audit",
    description: "We review the controls inside your IT systems to confirm they are reliable, accurate, and secure for day-to-day business use.",
    href: "/it-systems-audit"
  },
  {
    icon: ShieldAlert,
    title: "Cyber Security Audit",
    description: "We test your defences the way a real attacker would, then tell you exactly what to fix and how ready you are to respond if something goes wrong.",
    href: "/cyber-security-audit"
  },
  {
    icon: Network,
    title: "IT Governance",
    description: "We help leadership ensure IT decisions support business goals. We design policies and risk frameworks built on COBIT and ISO standards.",
    href: "/it-governance"
  },
  {
    icon: ShieldCheck,
    title: "DPDP Compliance",
    description: "We help your organisation align with India's Digital Personal Data Protection obligations through readiness assessments, data mapping, consent management, and DPO services.",
    href: "/dpdp-compliance"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 px-4 border-t border-slate-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#EBE9F9] text-[#35268F] font-bold uppercase tracking-[0.12em] text-[13px] px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>

          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1A1040] leading-[1.2] mb-4">
            Cyber Security and IT Audit<br />Services We Offer
          </h2>

          <p className="text-[#60697b] text-[16px] md:text-[18px] leading-relaxed">
            From checking for vulnerabilities to building full governance frameworks, we cover every layer of IT security and assurance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}   // ✅ FIXED (path → href)
              className="bg-white p-8 rounded-xl border border-[#EBE9F9] shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col items-start text-left no-underline hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#EBE9F9] rounded-[14px] flex items-center justify-center mb-6 text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-[21px] font-bold text-[#1A1040] mb-3 group-hover:text-[#35268F] transition-colors">
                {service.title}
              </h3>

              <p className="text-[#60697b] mb-6 text-[15px] md:text-[16px] leading-[1.65] flex-grow">
                {service.description}
              </p>

              <div className="text-[#35268F] font-bold text-[13px] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                See How It Works <span className="text-lg">→</span>
              </div>
            </Link>
          ))}

          {/* CTA */}
          <div className="bg-aaa-primary text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <HelpCircle className="h-40 w-40 absolute -bottom-10 -right-10 text-white/10 rotate-12" />

            <div className="relative z-10">
              <HelpCircle className="h-10 w-10 mb-6 opacity-50" />

              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Not sure where to start?
              </h3>

              <p className="text-white/80 mb-8 leading-relaxed text-[15px]">
                Tell us about your situation. Our team will point you in the right direction, no sales pressure.
              </p>

              <Button className="bg-white text-aaa-primary hover:bg-slate-100 rounded-full px-10 py-6 font-black text-base transition-transform active:scale-95">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}