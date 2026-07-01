import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import aaaLogo from "../assets/aaa-logo.png";

// ─── Nav data ────────────────────────────────────────────────────────────────

const servicesData = [
  {
    title: "IT Systems Audit",
    path: "/it-systems-audit",
    items: [
      "Management Controls Assessment",
      "IT Infrastructure Review",
      "System Reliability & Integrity Audit",
    ],
  },
  {
    title: "Cyber Security Audit",
    path: "/cyber-security-audit",
    items: [
      "Cyber Security Posture Assessment",
      "Vulnerability & Threat Analysis",
      "Security Controls Evaluation",
    ],
  },
  {
    title: "IT Security Audit",
    path: "/it-security-audit",
    items: [
      "Information Security Level Audit",
      "Access Control & Data Protection Review",
      "Security Policy & Procedure Assessment",
    ],
  },
  {
    title: "IT Assurance & Compliance",
    path: "/it-assurance-compliance",
    items: [
      "IT Compliance Verification",
      "Regulatory Framework Adherence",
      "Process Assurance & Risk Mitigation",
    ],
  },
  {
    title: "IT Governance",
    path: "/it-governance",
    items: [
      "IT Risk Management",
      "Performance & Control Frameworks",
      "Board-Level IT Governance Advisory",
    ],
  },
  {
    title: "DPDP Compliance",
    path: "/dpdp-compliance",
    items: [
      "DPDP Readiness Assessment",
      "Significant Data Fiduciary (SDF)",
      "Consent & DPIA Frameworks",
    ],
  },
];

// const industriesData = [
//   {
//     title: "Banking, Financial Services & Insurance",
//     path: "/#industries",
//     items: [
//       "Core Banking IT Audit",
//       "NBFC & Insurance Compliance Review",
//       "Fraud Risk & Financial Systems Audit",
//     ],
//   },
//   {
//     title: "Government & Public Sector",
//     path: "/#industries",
//     items: [
//       "e-Governance IT Audit",
//       "Public Sector Cyber Security Assessment",
//       "Regulatory Compliance for PSUs",
//     ],
//   },
//   {
//     title: "Healthcare & Pharmaceuticals",
//     path: "/#industries",
//     items: [
//       "Hospital IT Systems Audit",
//       "Clinical Data Security & Compliance",
//       "Pharma IT Governance Review",
//     ],
//   },
//   {
//     title: "Manufacturing & Industry",
//     path: "/#industries",
//     items: [
//       "OT & SCADA Security Audit",
//       "ERP Systems Audit",
//       "Industrial Cyber Security Assessment",
//     ],
//   },
//   {
//     title: "Telecom & Media",
//     path: "/#industries",
//     items: [
//       "Network Infrastructure Security Audit",
//       "Telecom Regulatory Compliance",
//       "Data Privacy & Protection Review",
//     ],
//   },
//   {
//     title: "Retail & E-commerce",
//     path: "/#industries",
//     items: [
//       "PCI-DSS Compliance Audit",
//       "E-commerce Platform Security Review",
//       "Customer Data Protection Audit",
//     ],
//   },
//   {
//     title: "IT & IT-Enabled Services",
//     path: "/#industries",
//     items: [
//       "ISO 27001 Implementation Audit",
//       "SOC & ITES Security Assessment",
//       "Third-Party Vendor Risk Review",
//     ],
//   },
//   {
//     title: "Energy & Utilities",
//     path: "/#industries",
//     items: [
//       "Critical Infrastructure Security Audit",
//       "SCADA & ICS Cyber Security Review",
//       "Energy Sector Compliance Assessment",
//     ],
//   },
// ];

// const aboutData = [
//   {
//     title: "Overview",
//     path: "/about/overview",
//     items: [
//       "Company Profile",
//       "Corporate Philosophy",
//       "Why AAA Technologies",
//     ],
//   },
//   {
//     title: "Vision & Mission",
//     path: "/about/vision-mission",
//     items: [
//       "Our Vision",
//       "Our Mission",
//       "Quality Objectives",
//     ],
//   },
//   {
//     title: "Our Milestone",
//     path: "/about/milestone",
//     items: [
//       "Historical Growth",
//       "Key Achievements",
//       "Company Timeline",
//     ],
//   },
//   {
//     title: "Awards & Achievements",
//     path: "/about/awards-achievements",
//     items: [
//       "Industry Recognitions",
//       "Certification Portfolio",
//       "Academic Excellence",
//     ],
//   },
//   {
//     title: "Our Management",
//     path: "/about/management",
//     items: [
//       "Board of Directors",
//       "Leadership Team",
//       "Technical Advisory",
//     ],
//   },
//   {
//     title: "Gallery & Events",
//     path: "/about/gallery-events",
//     items: [
//       "Corporate Gallery",
//       "Recent Events",
//       "Media Presence",
//     ],
//   },
// ];

const investorData = [
  {
    title: "Investor Relations",
    path: "/investors/relations",
    items: [
      "Financial Results",
      "Annual Reports",
      "Shareholding Pattern",
    ],
  },
  {
    title: "Board of Directors",
    path: "/investors/board",
    items: [
      "Profile of Directors",
      "Composition of Board",
      "Terms of Appointment",
    ],
  },
  {
    title: "Committees of the Board",
    path: "/investors/committees",
    items: [
      "Audit Committee",
      "Stakeholders Relationship",
      "Nomination & Remuneration",
    ],
  },
  {
    title: "Investor Grievances",
    path: "/investors/grievances",
    items: [
      "Compliance Officer",
      "Registrar & Transfer Agent",
      "Contact Details",
    ],
  },
];

// ─── Shared class tokens ──────────────────────────────────────────────────────

// Transparent/Blurred background for a premium feel
const HEADER_BG = "bg-white/95 dark:bg-black/95 backdrop-blur-md";
const HEADER_TEXT = "text-slate-900 dark:text-white";
const NAV_HOVER = "hover:text-aaa-primary focus-visible:text-aaa-primary";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleNavigation = (path: string) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    // Force immediate redirection for direct open
    window.location.assign(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu + dropdowns on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openDropdown = (key: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(key);
  };
  const closeDropdown = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const toggleDropdown = (key: string) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  const toggleMobileKey = (key: string) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  return (
    <header
      className={`${HEADER_BG} border-b border-slate-200 dark:border-slate-300 shadow-sm sticky top-0 z-[999] overflow-visible`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            to="/"
            aria-label="AAA Technologies Limited — return to top"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 rounded"
          >
            <img
              src={aaaLogo}
              alt="AAA Technologies Limited"
              className="h-11 w-auto object-contain"
              width={160}
              height={44}
            />
          </Link>

          {/* ── Desktop navigation ───────────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            ref={dropdownRef}
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => openDropdown("services")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
                aria-expanded={activeDropdown === "services"}
                aria-controls="services-dropdown"
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDropdown("industries")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("industries")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
                aria-expanded={activeDropdown === "industries"}
                aria-controls="industries-dropdown"
                aria-haspopup="true"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => openDropdown("about")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
                aria-expanded={activeDropdown === "about"}
                aria-controls="about-dropdown"
                aria-haspopup="true"
              >
                About
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Investor */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("investor")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("investor")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors ${activeDropdown === "investor" ? "text-aaa-primary" : ""}`}
                aria-expanded={activeDropdown === "investor"}
                aria-controls="investor-dropdown"
                aria-haspopup="true"
              >
                Investor
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "investor" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <a
              href="#blog"
              className={`px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
            >
              Blog
            </a>
          </nav>

          {/* ── Desktop actions ───────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white">
              Contact Us
            </Button>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────────────── */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className={`p-2 rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center`}
            >
              {isMenuOpen
                ? <X className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile navigation panel ──────────────────────────────────────── */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-slate-200 dark:border-slate-300 py-4"
          >
            <ul role="list" className="flex flex-col gap-1">

              <li>
                <a
                  href="#main-content"
                  aria-current="page"
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              {/* Mobile — Services accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-services")}
                  aria-expanded={activeDropdown === "mob-services"}
                  aria-controls="mob-services-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-services" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-services" && (
                  <ul
                    id="mob-services-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2"
                  >
                    {servicesData.map((service) => (
                      <li key={service.title}>
                        <p className="text-xs font-semibold text-red-700 dark:text-red-700 uppercase tracking-wide mb-1">
                          {service.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {service.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#services"
                                className={`block py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile — Industries accordion */}
{/* 
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-industries")}
                  aria-expanded={activeDropdown === "mob-industries"}
                  aria-controls="mob-industries-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-industries" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-industries" && (
                  <ul
                    id="mob-industries-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2 max-h-64 overflow-y-auto"
                  >
                    {industriesData.map((industry) => (
                      <li key={industry.title}>
                        <p className="text-xs font-semibold text-green-800 dark:text-green-700 uppercase tracking-wide mb-1">
                          {industry.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {industry.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#industries"
                                className={`block py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
*/}

              {/* Mobile — About accordion */}
{/* 
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-about")}
                  aria-expanded={activeDropdown === "mob-about"}
                  aria-controls="mob-about-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-about" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-about" && (
                  <ul
                    id="mob-about-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2"
                  >
                    {aboutData.map((section) => (
                      <li key={section.title}>
                        <p className="text-xs font-semibold text-aaa-secondary dark:text-aaa-secondary uppercase tracking-wide mb-1">
                          {section.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {section.items.map((item) => (
                            <li key={item}>
                              <button
                                onMouseDown={() => handleNavigation(section.path)}
                                className={`block w-full text-left py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
*/}

              {/* Mobile — Investor accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-investor")}
                  aria-expanded={activeDropdown === "mob-investor"}
                  aria-controls="mob-investor-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  Investor
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-investor" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-investor" && (
                  <ul
                    id="mob-investor-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2"
                  >
                    {investorData.map((section) => (
                      <li key={section.title}>
                        <p className="text-xs font-semibold text-aaa-primary dark:text-aaa-primary uppercase tracking-wide mb-1">
                          {section.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {section.items.map((item) => (
                            <li key={item}>
                              <button
                                onMouseDown={() => handleNavigation(section.path)}
                                className={`block w-full text-left py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="#blog"
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </li>

              <li className="pt-2">
                <Button
                  className="bg-advance-primary hover:bg-advance-primary/90 text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </li>

            </ul>
          </nav>
        )}
      </div>

      {/* ── Services mega-dropdown ─────────────────────────────────────────── */}
      {activeDropdown === "services" && (
        <div
          id="services-dropdown"
          role="region"
          aria-label="Services menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 shadow-xl z-[1100] pointer-events-auto"
          onMouseEnter={() => openDropdown("services")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-5 gap-x-8 gap-y-12">
              {servicesData.map((service) => (
                <div key={service.title} className="space-y-4">
                  <div className="pb-3 border-b border-slate-100 dark:border-white/5">
                    <button
                      onMouseDown={() => handleNavigation(service.path)}
                      className="text-[13px] font-bold text-slate-900 dark:text-white tracking-tight hover:text-aaa-primary transition-colors block text-left"
                    >
                      {service.title}
                    </button>
                  </div>
                  <ul className="space-y-2.5" role="list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <button
                          onMouseDown={() => handleNavigation(service.path)}
                          className="text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-aaa-primary dark:hover:text-aaa-primary transition-colors block py-0.5 text-left w-full"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Industries mega-dropdown ───────────────────────────────────────── */}
{/* 
      {activeDropdown === "industries" && (
        <div
          id="industries-dropdown"
          role="region"
          aria-label="Industries menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 shadow-xl z-[1100] pointer-events-auto"
          onMouseEnter={() => openDropdown("industries")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-4 gap-x-12 gap-y-12">
              {industriesData.map((industry) => (
                <div key={industry.title} className="space-y-4">
                  <div className="pb-3 border-b border-slate-100 dark:border-white/5">
                    <button
                      onMouseDown={() => handleNavigation(industry.path)}
                      className="text-[13px] font-bold text-slate-900 dark:text-white tracking-tight hover:text-aaa-secondary transition-colors text-left"
                    >
                      {industry.title}
                    </button>
                  </div>
                  <ul className="space-y-3" role="list">
                    {industry.items.map((item) => (
                      <li key={item}>
                        <button
                          onMouseDown={() => handleNavigation(industry.path)}
                          className="text-[13px] font-bold text-slate-500 dark:text-slate-400 hover:text-aaa-secondary dark:hover:text-aaa-secondary transition-colors block py-0.5 text-left w-full"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
*/}
      {/* ── About mega-dropdown ───────────────────────────────────────────── */}
{/* 
      {activeDropdown === "about" && (
        <div
          id="about-dropdown"
          role="region"
          aria-label="About menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 shadow-xl z-[1100] pointer-events-auto"
          onMouseEnter={() => openDropdown("about")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
              {aboutData.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="pb-3 border-b border-slate-100 dark:border-white/5">
                    <button
                      onMouseDown={() => handleNavigation(section.path)}
                      className="text-[13px] font-bold text-slate-900 dark:text-white tracking-tight hover:text-aaa-primary transition-colors block text-left"
                    >
                      {section.title}
                    </button>
                  </div>
                  <ul className="space-y-2.5" role="list">
                    {section.items.map((item) => (
                      <li key={item}>
                        <button
                          onMouseDown={() => handleNavigation(section.path)}
                          className="text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-aaa-primary dark:hover:text-aaa-primary transition-colors block py-0.5 text-left w-full"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
*/}
      {/* ── Investor mega-dropdown ───────────────────────────────────────────── */}
      {activeDropdown === "investor" && (
        <div
          id="investor-dropdown"
          role="region"
          aria-label="Investor menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 shadow-xl z-[1100] pointer-events-auto"
          onMouseEnter={() => openDropdown("investor")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-4 gap-x-8 gap-y-12">
              {investorData.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="pb-3 border-b border-slate-100 dark:border-white/5">
                    <button
                      onMouseDown={() => handleNavigation(section.path)}
                      className="text-[13px] font-bold text-slate-900 dark:text-white tracking-tight hover:text-aaa-primary transition-colors block text-left"
                    >
                      {section.title}
                    </button>
                  </div>
                  <ul className="space-y-2.5" role="list">
                    {section.items.map((item) => (
                      <li key={item}>
                        <button
                          onMouseDown={() => handleNavigation(section.path)}
                          className="text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-aaa-primary dark:hover:text-aaa-primary transition-colors block py-0.5 text-left w-full"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
