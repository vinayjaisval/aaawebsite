import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const auditTypes = [
  "Vulnerability and Penetration Testing",
  "Mobile Penetration Testing",
  "Application systems – Security review",
  "Review of IS Controls",
  "BS 7799/ ISO 27001 Implementation",
  "Formation of IS Security Policy",
  "Compliance with IS policies and procedures"
];

export default function ITSecurityAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-aaa-primary/10">
      <HeaderUtilityBar />
      <Header />

      <main>
        {/* ── Banner Section (Matching IT Systems Audit Style) ────────────────── */}
        <section className="bg-slate-50 border-b border-slate-100 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <nav className="flex items-center gap-2 mb-8 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 opacity-50" />
                <span>Services</span>
                <ChevronRight className="w-3 h-3 opacity-50" />
                <span className="text-aaa-primary font-bold">IT Security Audit</span>
              </nav>

              <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                  IT Security <span className="text-aaa-primary underline decoration-aaa-secondary decoration-4 underline-offset-8">Audit</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Independent assessment of your organizational security posture and 
                  comprehensive auditing of physical and logical security controls.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Main Content Section ────────────────────────────────────────── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Image wrapper */}
              <div className="space-y-8">
                <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative group">
                  <div className="absolute inset-0 bg-aaa-primary/5 rounded-3xl translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                  <div className="overflow-hidden rounded-xl shadow-2xl relative border border-slate-100 bg-white">
                    <img 
                      src="/images/it-security-914.jpg" 
                      alt="IT Security Professional" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </motion.div>

                <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                   <h3 className="text-lg font-bold text-foreground mb-4">Security Standards</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     Our audits align with international standards to ensure that technical, physical, and administrative 
                     controls are robust and effective across your entire enterprise.
                   </p>
                </div>
              </div>

              {/* Right Column: Detailed Content */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-aaa-secondary" />
                    <span className="text-xs font-bold text-aaa-secondary uppercase tracking-[0.2em]">Independent Review</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Level of <span className="text-aaa-primary">Information Security</span>
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      "It is an audit on the level of information security in an organization. Most commonly the controls being audited can be categorized as technical, physical and administrative."
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed font-medium mb-6 text-left">
                       Auditing information security covers topics from auditing the physical security of data centers to auditing the logical security of databases and highlights key components to look for and different methods for auditing these areas.
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed font-medium text-left">
                       When centered on the IT aspects of information security, it can be seen as a part of an information systems audit. It is often referred to as an information technology security audit or a computer security audit.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-widest whitespace-nowrap">Audit Principles</h3>
                    <div className="h-px w-full bg-slate-100" />
                  </div>

                  <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg flex justify-center">
                    <img src="/images/it-security-11.png" alt="Audit Principles Chart" className="max-w-full h-auto" />
                  </div>
                </div>

                {/* Audit Services Grid */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-widest whitespace-nowrap">Audit Services</h3>
                    <div className="h-px w-full bg-slate-100" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {auditTypes.map((type, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-aaa-primary/30 hover:shadow-lg transition-all group">
                        <CheckCircle className="w-5 h-5 text-aaa-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-tight group-hover:text-aaa-primary transition-colors">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-aaa-primary/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
               Fortify Your <span className="text-aaa-primary">Infrastructure Today.</span>
             </h2>
             <button className="bg-aaa-primary hover:bg-aaa-primary/90 text-white px-10 py-4 font-bold uppercase tracking-widest rounded-lg transition-all shadow-xl shadow-aaa-primary/20">
               Talk to Our Experts
             </button>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
