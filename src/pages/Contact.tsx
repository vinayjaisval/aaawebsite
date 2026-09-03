import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Activity,
  UserCheck
} from "lucide-react";
import { BackToTop } from "../components/back-to-top";

/**
 * AAA Technologies Institutional Contact Portal
 * STANDARDIZATION: Synced tracking (0.4em), labels (11px), and form validation with Careers.tsx.
 */
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Contact() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Service");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    service:"",
    requirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("dark");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.organization || !formData.service || !formData.requirements) {
      setSubmitStatus({
        type: "error",
        message: "Please fill out all required fields."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://skyiot.skylabsapp.com/api/aaa_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          service: formData.service,
          requirements: formData.requirements,
        })
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok && responseData.success !== false) {
        setSubmitStatus({
          type: "success",
          message: responseData.message || "Form submitted successfully"
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          service:"",
          requirements: ""
        });
        setSelectedService("Select Service");
      } else {
        setSubmitStatus({
          type: "error",
          message: responseData.message || "Failed to submit. Please try again."
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#35268F]/10 antialiased overflow-hidden">
      <main>
        {/* --- PREMIUM COMPACT HERO: With Professional Visual Effects --- */}
        <section className="bg-[#F4F3FB] relative overflow-hidden py-8 md:py-12 border-b border-[#EBE9F9]">

          {/* Animated Background Effects */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#35268F]/10 to-[#00a8ff]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
          />

          {/* Cyber Grid with Animated Data Streak */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#35268F 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00a8ff] to-transparent opacity-30 pointer-events-none"
          />

          {/* Right-Side Glassmorphic Trust Elements (Filling the Gap) */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-0 opacity-60">
            {[
              { icon: ShieldCheck, color: "text-[#35268F]", bg: "bg-[#35268F]/10", label: "Global Standards", x: 20 },
              { icon: Activity, color: "text-[#008253]", bg: "bg-[#008253]/10", label: "Real-time Monitoring", x: 0 },
              { icon: UserCheck, color: "text-[#00a8ff]", bg: "bg-[#00a8ff]/10", label: "Certified Team", x: 40 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0], x: [item.x, item.x + 5, item.x] }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shadow-inner`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-[#1A1040]">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-3xl"
            >
              <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.4em] text-slate-400 mb-4">
                <Link to="/" className="hover:text-[#35268F] transition-all">Home</Link>
                <ChevronRight className="w-2.5 h-2.5 text-slate-300" />
                <span className="text-[#35268F]">Contact Us</span>
              </motion.nav>

              <div className="space-y-5">
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[0.2em] border border-[#FFDADA]"
                    style={{ background: 'linear-gradient(to right, #FFF5F5, #FFF)', color: '#DC2626' }}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> 24/7 Support
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-[0.2em] bg-white border border-[#EBE9F9] text-[#35268F] shadow-sm">
                    <ShieldAlert className="w-3.5 h-3.5" /> CERT-In Empanelled
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-[#1A1040] font-extrabold uppercase tracking-tight leading-[0.9] italic mb-8" style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)'
                }}>
                  How Can We Help <br />
                  <span className="text-aaa-primary not-italic">Secure Your Assets?</span>
                </motion.h1>

                <div className="text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500 mt-6">
                  Connect with India's most trusted Cyber Security audit firm. Our team of certified auditors is ready to assist you.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MAIN CONTENT AREA: Tightened Height & Matched Alignment --- */}
        <section className="py-12 md:py-24 bg-white px-4 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* Left Column: Direct Contact Details */}
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="space-y-1 mb-8">
                  <span className="inline-block bg-[#EBE9F9] text-[#35268F] font-extrabold uppercase tracking-[0.4em] text-[11px] px-4 py-1.5 rounded-full">Contact Info</span>
                  <h2 className="text-[1.8rem] font-extrabold text-[#1A1040] leading-tight tracking-tight uppercase italic underline decoration-aaa-primary/10 decoration-8 underline-offset-4">Direct Communication</h2>
                </div>

                <div className="grid gap-4">
                  <div className="flex gap-5 p-5 rounded-2xl border border-[#EBE9F9] hover:border-[#35268F]/20 transition-all duration-300 group bg-white shadow-sm">
                    <div className="w-12 h-12 bg-[#F4F3FB] rounded-xl flex items-center justify-center text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-extrabold text-[#1A1040] mb-0.5 uppercase tracking-[0.2em]">Mumbai Office</h4>
                      <a
                        href="https://goo.gl/maps/PwcBgjC3kywUGtvv7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.95rem] text-[#60697B] leading-relaxed font-medium hover:text-aaa-primary transition-colors block"
                      >
                        278-280, F Wing, Solaris 1, Saki Vihar Road, Opp. L&T Gate No.6, Powai, Andheri East, Mumbai 400 072, INDIA
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl border border-[#EBE9F9] hover:border-[#35268F]/20 transition-all duration-300 group bg-white shadow-sm">
                    <div className="w-12 h-12 bg-[#F4F3FB] rounded-xl flex items-center justify-center text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-extrabold text-[#1A1040] mb-0.5 uppercase tracking-[0.2em]">Noida Office</h4>
                      <a
                        href="https://maps.google.com/?q=B-37,+Sector+2,+Noida,+Uttar+Pradesh+201301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.95rem] text-[#60697B] leading-relaxed font-medium hover:text-aaa-primary transition-colors block"
                      >
                        Corporate Office: B-37, 1st Floor, Sector 2, Noida, Uttar Pradesh 201301, INDIA
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl border border-[#EBE9F9] hover:border-[#35268F]/20 transition-all duration-300 group bg-white shadow-sm">
                    <div className="w-12 h-12 bg-[#F4F3FB] rounded-xl flex items-center justify-center text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-extrabold text-[#1A1040] mb-0.5 uppercase tracking-[0.2em]">Direct Hotlines</h4>
                      <div className="flex gap-2 text-[0.95rem] text-[#60697B] leading-relaxed font-medium">
                        <a href="tel:+912228573815" className="hover:text-aaa-primary transition-colors">+91 22 2857 3815</a>
                        <span>/</span>
                        <a href="tel:+912228573816" className="hover:text-aaa-primary transition-colors">16</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl border border-[#EBE9F9] hover:border-[#35268F]/20 transition-all duration-300 group bg-white shadow-sm">
                    <div className="w-12 h-12 bg-[#F4F3FB] rounded-xl flex items-center justify-center text-[#35268F] group-hover:bg-[#35268F] group-hover:text-white transition-all shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-extrabold text-[#1A1040] mb-0.5 uppercase tracking-[0.2em]">Official Email</h4>
                      <a href="mailto:info@aaatechnologies.co.in" className="text-[0.95rem] text-[#60697B] leading-relaxed font-medium hover:text-aaa-primary transition-colors">
                        info@aaatechnologies.co.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact Trust Badge */}
                <div className="p-6 bg-[#1A1040] rounded-2xl text-white relative overflow-hidden shadow-lg mt-8">
                  <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#35268F]/30 rounded-full blur-[40px]" />
                  <div className="relative z-10 flex items-center gap-4">
                    <ShieldCheck className="w-6 h-6 text-[#00d1ff]" />
                    <div>
                      <h4 className="font-extrabold text-[11px] uppercase tracking-[0.2em] text-[#00d1ff]">CERT-In Empanelled</h4>
                      <p className="text-white/40 text-[9px] font-extrabold uppercase tracking-widest mt-0.5 italic">Institutional Verification Active</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tightened Form to Match Left Height */}
              <div className="w-full lg:w-7/12">
                <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-[#EBE9F9] shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#35268F]/5 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="mb-6">
                    <h3 className="text-[22px] font-extrabold text-[#1A1040] tracking-tighter mb-1 uppercase">Business Inquiry Form</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-5 bg-[#35268F] rounded-full" />
                      <p className="text-[#60697B] text-[11px] font-extrabold uppercase tracking-widest opacity-80 italic">Swift 24-hour response guaranteed.</p>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {submitStatus && (
                      <div className={`p-4 mb-4 rounded-xl text-sm font-bold leading-relaxed border ${
                        submitStatus.type === "success" 
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
                          : "bg-red-50 text-red-800 border-red-200"
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 placeholder:text-slate-400"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Work Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 placeholder:text-slate-400"
                          placeholder="office@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          pattern="[0-9]{10}"
                          inputMode="numeric"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          }}
                          className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 placeholder:text-slate-400"
                          placeholder="10-Digit Mobile Number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Organization Name</label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 placeholder:text-slate-400"
                          placeholder="Company or Organization Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Service interest</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsServiceOpen(!isServiceOpen)}
                          className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] flex items-center justify-between outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 cursor-pointer"
                        >
                          <span className={selectedService === "Select Service" ? "text-slate-400" : "text-[#1A1040]"}>
                            {selectedService}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isServiceOpen ? 'rotate-90' : ''}`} />
                        </button>

                        {isServiceOpen && (
                          <>
                            <div className="fixed inset-0 z-[100]" onClick={() => setIsServiceOpen(false)} />
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#EBE9F9] rounded-xl shadow-2xl z-[110] overflow-hidden"
                            >
                              {["IT Security Audit", "Cyber Security Audit", "IT Assurance & Compliance", "IT Systems audit", "IT Governance"].map((service) => (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => {
                                    setSelectedService(service);
                                    setFormData({ ...formData, service: service });
                                    setIsServiceOpen(false);
                                  }}
                                  className="w-full text-left px-6 py-3 text-[0.95rem] font-bold text-[#60697B] hover:bg-slate-50 hover:text-aaa-primary transition-all"
                                >
                                  {service}
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.4em] ml-1">Requirements</label>
                      <textarea
                        rows={2}
                        required
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full bg-slate-50 border-0 rounded-xl px-6 py-3.5 text-[#1A1040] transition-all font-medium text-[0.95rem] outline-none focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 resize-none placeholder:text-slate-400"
                        placeholder="Briefly describe your goals..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                      <div className="flex items-center gap-3 text-[#008253]">
                        <Lock className="w-5 h-5" />
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.4em]">Secure Submission</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-aaa-primary hover:bg-[#251b64] text-white font-extrabold px-12 py-5 rounded-xl shadow-xl transition-all uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Enquiry"} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
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
