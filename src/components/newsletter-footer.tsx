import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import aaaLogo from "../assets/aaa-logo.png";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/aaa-technologies-pvt-ltd-",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/aaatechnologies",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/technologiesaaa",
    icon: Instagram,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/technologiesaaa",
    icon: Twitter,
  },
];

export function NewsletterFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1040] text-white pt-20 pb-10 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <img src={aaaLogo} alt="AAA Technologies" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed">
              India's 1st and only listed company focused exclusively on IT & Cyber Security Audit.
              CERT-In empanelled since 2005.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white">Services</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/it-security-audit" className="hover:text-white transition-colors">IT Security Audit</Link></li>
              <li><Link to="/it-assurance-compliance" className="hover:text-white transition-colors">IT Assurance & Compliance</Link></li>
              <li><Link to="/it-systems-audit" className="hover:text-white transition-colors">IT Systems Audit</Link></li>
              <li><Link to="/cyber-security-audit" className="hover:text-white transition-colors">Cyber Security Audit</Link></li>
              <li><Link to="/it-governance" className="hover:text-white transition-colors">IT Governance</Link></li>
              <li><Link to="/dpdp-compliance" className="hover:text-white transition-colors">DPDP Compliance</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white">Company</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about/overview" className="hover:text-white transition-colors">About Us</Link></li>
              {/* <li><Link to="/#industries" className="hover:text-white transition-colors">Industries</Link></li> */}
              <li><Link to="/about/gallery-events" className="hover:text-white transition-colors">Events & News</Link></li>
              <li><Link to="/investors/relations" className="hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white">Get in Touch</h5>
            <address className="not-italic text-sm text-white/60 leading-relaxed space-y-4">
              <a 
                href="https://goo.gl/maps/PwcBgjC3kywUGtvv7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group no-underline"
              >
                <MapPin className="h-5 w-5 text-[#008253] shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm text-white/60 leading-relaxed group-hover:text-white transition-colors">
                  278-280, F Wing, Solaris 1, Saki Vihar Road, Opp. L&T Gate No.6, Powai, Andheri East, Mumbai 400 072, INDIA
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#008253] shrink-0" />
                <a href="tel:+912228573815" className="hover:text-white transition-colors">+91 22 2857 3815 / 16</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#008253] shrink-0" />
                <a href="mailto:info@aaatechnologies.co.in" className="hover:text-white transition-colors">info@aaatechnologies.co.in</a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#35268F] text-white/70 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p>
            &copy; {currentYear} AAA Technologies Ltd. All rights reserved. &nbsp; | &nbsp;
            <Link to="/privacy" className="hover:text-white ml-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white ml-4">Terms of Use</Link>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <p className="uppercase tracking-widest">
              CERT-In Empanelled · ISO 9001:2015 · NSE & BSE Listed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
