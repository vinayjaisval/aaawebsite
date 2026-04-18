import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Shield, ClipboardCheck } from "lucide-react";
import { Header } from "../components/header";
import { HeaderUtilityBar } from "../components/header-utility-bar";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

const primaryIssues = [
  "Protection of sensitive data and intellectual property;",
  "Protection of networks to which multiple information resource are connected;",
  "Responsibility and accountability for the device and information contained in it;"
];

const scopeItems = [
  "Data security policies relating to the network, database and applications in place;",
  "Data loss prevention measures deployed;",
  "Effective network access controls implemented;",
  "Detection/prevention systems deployed;",
  "Security controls established (physical and logical);",
  "Incident response program implemented."
];

const servicesProvided = [
  "Formation of Cyber Security Policies",
  "Formation of Cyber Security Procedures",
  "Formation of Crisis Management Plan (CCMP)",
  "Compliance to Regulatory Guidance for Cyber security."
];

export default function CyberAuditPremium() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-aaa-primary/10 transition-colors duration-300">
      <HeaderUtilityBar />
      <Header />

      <main>
        {/* ── Banner Section (Matching IT Systems Layout) ────────────────── */}
        <section className="bg-slate-50 border-b border-slate-100 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <nav className="flex items-center gap-2 mb-8 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                <Link to="/" className="hover:text-aaa-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 opacity-50" />
                <span>Services</span>
                <ChevronRight className="w-3 h-3 opacity-50" />
                <span className="text-aaa-primary font-bold">Cyber Security Audit</span>
              </nav>

              <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                  Cyber Security <span className="text-aaa-primary underline decoration-aaa-secondary decoration-4 underline-offset-8">Audit</span>
                </h1>
                <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Advanced technical evaluation and strategic defense against modern persistent cyber threats 
                  delivered by India's first listed cyber security auditing firm.
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
                      src="/images/cyber-security-official.png" 
                      alt="Cyber Security Assessment" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </motion.div>

                <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                   <h3 className="text-lg font-bold text-foreground mb-4">Risk Evaluation</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     Our audits are based on global frameworks like NIST SP 800-53 to ensure your organization 
                     identifies deficiencies and protects intellectual property.
                   </p>
                </div>
              </div>

              {/* Right Column: Detailed Content */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-aaa-secondary" />
                    <span className="text-xs font-bold text-aaa-secondary uppercase tracking-[0.2em]">Strategy & Control</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Assessment of <span className="text-aaa-primary">Cyber Security Policies</span>
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      "The objective of a cyber security audit is to provide Management with an assessment of an organization's cyber security Policies and procedures and their operating effectiveness."
                    </p>
                    
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">Primary Security Issues:</h4>
                    <div className="grid gap-3 mb-10">
                      {primaryIssues.map((issue, i) => (
                        <div key={i} className="flex gap-4 p-4 border border-slate-100 bg-slate-50 rounded-xl">
                          <Shield className="w-5 h-5 text-aaa-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 font-bold uppercase tracking-tight leading-snug">{issue}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Audit Scope Grid */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-widest whitespace-nowrap">Audit Scope</h3>
                    <div className="h-px w-full bg-slate-100" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {scopeItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-aaa-primary/30 hover:shadow-lg transition-all group">
                        <CheckCircle className="w-5 h-5 text-aaa-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-tight group-hover:text-aaa-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Provided Section */}
                <div className="bg-slate-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-aaa-primary/10 blur-3xl" />
                    <h3 className="text-aaa-primary font-bold mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                       <ClipboardCheck className="w-5 h-5 text-white" /> Services Provided
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {servicesProvided.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/5 group hover:bg-white/10 transition-colors">
                          <CheckCircle className="w-4 h-4 text-aaa-primary" />
                          <span className="font-bold text-[10px] tracking-widest uppercase">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 overflow-hidden relative text-center">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-aaa-primary/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
             <h2 className="text-3xl md:text-5xl font-bold mb-8">
               Fortify Your <span className="text-aaa-primary">Fortress.</span>
             </h2>
             <button className="bg-aaa-primary hover:bg-aaa-primary/90 text-white px-10 py-4 font-bold uppercase tracking-widest rounded-lg transition-all shadow-xl shadow-aaa-primary/20">
               Connect Experts
             </button>
          </div>
        </section>
      </main>

      <NewsletterFooter />
      <BackToTop />
    </div>
  );
}
