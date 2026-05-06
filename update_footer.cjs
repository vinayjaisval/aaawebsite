const fs = require('fs');
const path = 'c:/reactproject/aaawebsite/src/components/Navigation.tsx';
let content = fs.readFileSync(path, 'utf8');

const newFooter = `export function Footer() {
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

          {/* Brand */}
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

          {/* Services */}
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

          {/* Company */}
          <div>
            <h5 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              {[
                { label: 'About Us', to: '/about/overview' },
                { label: 'Industries', to: '/industries' },
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

          {/* Get in Touch */}
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
`;

// Find and replace the Footer function
const footerStart = content.indexOf('export function Footer()');
if (footerStart === -1) { console.error('Footer not found'); process.exit(1); }
content = content.slice(0, footerStart) + newFooter + '\n';
fs.writeFileSync(path, content);
console.log('Footer updated successfully');
