import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin,
  ChevronDown, Menu, X
} from "lucide-react";

export const servicesData = [
  {
    title: "IT Systems Audit",
    path: "/it-systems-audit",
    items: [
      { name: "Management Controls Assessment", path: "/it-systems-audit" },
      { name: "IT Infrastructure Review", path: "/it-systems-audit" },
      { name: "System Reliability & Integrity Audit", path: "/it-systems-audit" },
    ],
  },
  {
    title: "Cyber Security Audit",
    path: "/cyber-security-audit",
    items: [
      { name: "Cyber Security Posture Assessment", path: "/cyber-security-audit" },
      { name: "Vulnerability & Threat Analysis", path: "/cyber-security-audit" },
      { name: "Security Controls Evaluation", path: "/cyber-security-audit" },
    ],
  },
  {
    title: "IT Security Audit",
    path: "/it-security-audit",
    items: [
      { name: "Information Security Level Audit", path: "/it-security-audit" },
      { name: "Access Control & Data Protection Review", path: "/it-security-audit" },
      { name: "Security Policy & Procedure Assessment", path: "/it-security-audit" },
    ],
  },
  {
    title: "IT Assurance & Compliance",
    path: "/it-assurance-compliance",
    items: [
      { name: "IT Compliance Verification", path: "/it-assurance-compliance" },
      { name: "Regulatory Framework Adherence", path: "/it-assurance-compliance" },
      { name: "Process Assurance & Risk Mitigation", path: "/it-assurance-compliance" },
    ],
  },
  {
    title: "IT Governance",
    path: "/it-governance",
    items: [
      { name: "IT Risk Management", path: "/it-governance" },
      { name: "Performance & Control Frameworks", path: "/it-governance" },
      { name: "Board-Level IT Governance Advisory", path: "/it-governance" },
    ],
  },
];

export const industriesData = [
  {
    title: "Banking, Financial Services & Insurance",
    path: "/industries",
    items: [
      { name: "Core Banking IT Audit", path: "/industries" },
      { name: "NBFC & Insurance Compliance Review", path: "/industries" },
      { name: "Fraud Risk & Financial Systems Audit", path: "/industries" },
    ],
  },
  {
    title: "Government & Public Sector",
    path: "/industries",
    items: [
      { name: "e-Governance IT Audit", path: "/industries" },
      { name: "Public Sector Cyber Security Assessment", path: "/industries" },
      { name: "Regulatory Compliance for PSUs", path: "/industries" },
    ],
  },
  {
    title: "Healthcare & Pharmaceuticals",
    path: "/industries",
    items: [
      { name: "Hospital IT Systems Audit", path: "/industries" },
      { name: "Clinical Data Security & Compliance", path: "/industries" },
      { name: "Pharma IT Governance Review", path: "/industries" },
    ],
  },
  {
    title: "Manufacturing & Industry",
    path: "/industries",
    items: [
      { name: "OT & SCADA Security Audit", path: "/industries" },
      { name: "ERP Systems Audit", path: "/industries" },
      { name: "Industrial Cyber Security Assessment", path: "/industries" },
    ],
  },
  {
    title: "Telecom & Media",
    path: "/industries",
    items: [
      { name: "Network Infrastructure Security Audit", path: "/industries" },
      { name: "Telecom Regulatory Compliance", path: "/industries" },
      { name: "Data Privacy & Protection Review", path: "/industries" },
    ],
  },
  {
    title: "Retail & E-commerce",
    path: "/industries",
    items: [
      { name: "PCI-DSS Compliance Audit", path: "/industries" },
      { name: "E-commerce Platform Security Review", path: "/industries" },
      { name: "Customer Data Protection Audit", path: "/industries" },
    ],
  },
  {
    title: "IT & IT-Enabled Services",
    path: "/industries",
    items: [
      { name: "ISO 27001 Implementation Audit", path: "/industries" },
      { name: "SOC & ITES Security Assessment", path: "/industries" },
      { name: "Third-Party Vendor Risk Review", path: "/industries" },
    ],
  },
  {
    title: "Energy & Utilities",
    path: "/industries",
    items: [
      { name: "Critical Infrastructure Security Audit", path: "/industries" },
      { name: "SCADA & ICS Cyber Security Review", path: "/industries" },
      { name: "Energy Sector Compliance Assessment", path: "/industries" },
    ],
  },
];

export function HeaderUtilityBar() {
  return (
    <div className="bg-[#1A1040] text-white py-[11px] hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-[13px] leading-none">
        <div className="flex items-center gap-2 transition-opacity cursor-default">
          <MapPin className="h-[14px] w-[14px] text-white" strokeWidth={2.5} />
          <address className="not-italic font-medium text-white/85">301, Krishna Chambers, Sir V.T. Marg, Mumbai 400 020</address>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Phone className="h-[13px] w-[13px] text-white" strokeWidth={2.5} />
            <a href="tel:+912222001010" className="no-underline font-medium text-white/90 hover:text-white transition-colors">+91 22 2200 1010</a>
          </div>
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Mail className="h-[13px] w-[13px] text-white" strokeWidth={2.5} />
            <a href="mailto:info@aaatechnologies.co.in" className="no-underline font-medium text-white/90 hover:text-white transition-colors">info@aaatechnologies.co.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = (key: string) => setActiveDropdown(key);
  const closeDropdown = () => setActiveDropdown(null);

  return (
    <header className="bg-white sticky top-0 z-[100] w-full" role="banner">
      <HeaderUtilityBar />
      <div className="container mx-auto px-4 flex items-center justify-between h-[82px]">
        <Link to="/" className="flex items-center">
          <img src="/assets/img/logo-dark.png" alt="AAA Technologies" className="h-[42px] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-bold text-[#343f52] text-[15px] tracking-tight" ref={dropdownRef}>

          <div className="relative group py-6" onMouseEnter={() => openDropdown("about")} onMouseLeave={closeDropdown}>
            <button className={`flex items-center gap-1 px-3 py-2 transition-colors duration-300 ${activeDropdown === "about" ? "text-[#35268F]" : "hover:text-[#35268F]"}`}>
              About Us <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-[80%] left-0 w-[260px] bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)] rounded-xl py-3 z-[1100] animate-in fade-in slide-in-from-top-2 duration-200 border-t-4 border-t-[#35268F]">
                <Link to="/about/overview" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Overview</Link>
                <Link to="/about/vision-mission" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Vision & Mission</Link>
                <Link to="/about/milestone" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Our Milestones</Link>
                <Link to="/about/awards-achievements" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Awards & Achievements</Link>
                <Link to="/about/management" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Our Management</Link>
                <Link to="/about/gallery-events" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Gallery & Events</Link>
              </div>
            )}
          </div>

          <div className="relative group py-6" onMouseEnter={() => openDropdown("services")} onMouseLeave={closeDropdown}>
            <button className={`flex items-center gap-1 px-3 py-2 transition-colors duration-300 ${activeDropdown === "services" ? "text-[#35268F]" : "hover:text-[#35268F]"}`}>
              Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-[80%] left-0 w-[280px] bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)] rounded-xl py-3 z-[1100] animate-in fade-in slide-in-from-top-2 duration-200 border-t-4 border-t-[#35268F]">
                <Link to="/it-security-audit" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">IT Security Audit</Link>
                <Link to="/it-assurance-compliance" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">IT Assurance & Compliance</Link>
                <Link to="/it-systems-audit" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">IT Systems Audit</Link>
                <Link to="/cyber-security-audit" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Cyber Security Audit</Link>
                <Link to="/it-governance" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">IT Governance</Link>
              </div>
            )}
          </div>

          {/* <Link to="/industries" className="px-3 py-6 hover:text-[#35268F] transition-colors duration-300">Industries</Link> */}

          <div className="relative group py-6" onMouseEnter={() => openDropdown("investor")} onMouseLeave={closeDropdown}>
            <button className={`flex items-center gap-1 px-3 py-2 transition-colors duration-300 ${activeDropdown === "investor" ? "text-[#35268F]" : "hover:text-[#35268F]"}`}>
              Investor <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "investor" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "investor" && (
              <div className="absolute top-[80%] left-0 w-[260px] bg-white border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)] rounded-xl py-3 z-[1100] animate-in fade-in slide-in-from-top-2 duration-200 border-t-4 border-t-[#35268F]">
                <Link to="/investors/relations" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Investor Relations</Link>
                <Link to="/investors/board" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Board of Directors</Link>
                <Link to="/investors/committees" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Committees of the Board</Link>
                <Link to="/investors/grievances" className="block px-6 py-2.5 text-[15px] font-medium text-[#60697b] hover:text-[#35268F] hover:bg-[#F4F3FB] hover:pl-7 transition-all duration-300">Investor Grievances</Link>
              </div>
            )}
          </div>

          <Link to="/about/gallery-events" className="px-3 py-6 hover:text-[#35268F] transition-colors duration-300">Events</Link>
          <Link to="/careers" className="px-3 py-6 hover:text-[#35268F] transition-colors duration-300">Careers</Link>
          <Link to="/contact" className="px-3 py-6 hover:text-[#35268F] transition-colors duration-300">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-[#35268F] text-white text-[13px] font-extrabold px-6 py-2.5 rounded hover:bg-[#2b1f7a] transition-all uppercase tracking-wider"
          >
            Get Consultation
          </Link>
          <button className="lg:hidden text-[#1A1040] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 h-[calc(100vh-80px)] overflow-y-auto absolute w-full shadow-2xl animate-in slide-in-from-top duration-300 z-[999]">
          <nav className="flex flex-col p-6 gap-6 font-bold text-[#1A1040]">
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-widest text-[#35268F] opacity-50">About Us</p>
              <div className="flex flex-col gap-3 pl-2 border-l-2 border-[#35268F]/10">
                <Link to="/about/overview" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Overview</Link>
                <Link to="/about/vision-mission" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Vision & Mission</Link>
                <Link to="/about/milestone" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Our Milestones</Link>
                <Link to="/about/awards-achievements" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Awards & Achievements</Link>
                <Link to="/about/management" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Our Management</Link>
                <Link to="/about/gallery-events" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Gallery & Events</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-widest text-[#35268F] opacity-50">Our Services</p>
              <div className="flex flex-col gap-3 pl-2 border-l-2 border-[#35268F]/10">
                <Link to="/it-security-audit" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>IT Security Audit</Link>
                <Link to="/it-assurance-compliance" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>IT Assurance & Compliance</Link>
                <Link to="/it-systems-audit" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>IT Systems Audit</Link>
                <Link to="/cyber-security-audit" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Cyber Security Audit</Link>
                <Link to="/it-governance" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>IT Governance</Link>
              </div>
            </div>
            {/* <Link to="/industries" className="text-[18px] border-b border-slate-50 pb-2" onClick={() => setIsMenuOpen(false)}>Industries</Link> */}
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-widest text-[#35268F] opacity-50">Investors</p>
              <div className="flex flex-col gap-3 pl-2 border-l-2 border-[#35268F]/10">
                <Link to="/investors/relations" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Investor Relations</Link>
                <Link to="/investors/board" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Board of Directors</Link>
                <Link to="/investors/committees" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Committees of the Board</Link>
                <Link to="/investors/grievances" className="text-[16px]" onClick={() => setIsMenuOpen(false)}>Investor Grievances</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-slate-100">
              <Link to="/careers" className="text-[18px]" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              <Link to="/contact" className="text-[18px]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <a href="tel:+912222001010" className="flex items-center gap-2 text-[#35268F] mt-2">
                <Phone size={18} /> +91 22 2200 1010
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="font-sans"
      style={{
        background: 'linear-gradient(160deg, #1a1040 0%, #0f0a2e 100%)',
        borderTop: '3px solid #e2626b',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
                AAA Technologies
              </span>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a78bfa', marginTop: '0.1rem' }}>
                Accurate · Reliable · Innovative
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '280px' }}>
              India's premier CERT-In empanelled cybersecurity audit and IT assurance company. Securing cyber assets of the nation since 2002.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 mb-6">
              {['CERT-In', 'ISO 27001', 'NSE & BSE'].map(chip => (
                <span key={chip} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.35em 0.85em', borderRadius: '100px', background: 'rgba(53,38,143,0.4)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(53,38,143,0.6)', letterSpacing: '0.05em' }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Services</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              {[
                { label: 'IT Security Audit', to: '/it-security-audit' },
                { label: 'IT Assurance & Compliance', to: '/it-assurance-compliance' },
                { label: 'IT Systems Audit', to: '/it-systems-audit' },
                { label: 'Cyber Security Audit', to: '/cyber-security-audit' },
                { label: 'IT Governance', to: '/it-governance' },
              ].map(item => (
                <li key={item.to} className="mb-2">
                  <Link to={item.to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              {[
                { label: 'About Us', to: '/about/overview' },
                // { label: 'Industries', to: '/industries' },
                { label: 'Events & News', to: '/about/gallery-events' },
                { label: 'Investor Relations', to: '/investors/relations' },
                { label: 'Careers', to: '/careers' },
                { label: 'Contact Us', to: '/contact' },
              ].map(item => (
                <li key={item.to} className="mb-2">
                  <Link to={item.to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Get in Touch</h5>
            <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              301, Krishna Chambers,<br />
              Sir Vithaldas Thackersay Marg,<br />
              Mumbai 400 020, India
            </address>
            <a href="tel:+912222001010" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.15s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
              <Phone className="h-4 w-4" style={{ color: '#4ade80' }} /> +91 22 2200 1010
            </a>
            <a href="mailto:info@aaatechnologies.co.in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
              <Mail className="h-4 w-4" style={{ color: '#4ade80' }} /> info@aaatechnologies.co.in
            </a>
          </div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '2rem' }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0 }}>
            © {new Date().getFullYear()} AAA Technologies Ltd. All rights reserved. &nbsp;&nbsp;
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>Privacy Policy</Link>
            &nbsp;&nbsp;
            <Link to="/terms" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
              onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>Terms of Use</Link>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.04em', margin: 0 }}>
            CERT-In Empanelled &nbsp;·&nbsp; ISO 9001:2015 & ISO 27001:2013 &nbsp;·&nbsp; NSE & BSE Listed
          </p>
        </div>
      </div>
    </footer>
  );
}
