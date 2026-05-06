import { ShieldCheck, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Part 1: Light Hero Text Section */}
      <section 
        className="w-full bg-[#F4F3FB] text-center px-4" 
        style={{ paddingTop: '100px', paddingBottom: '160px' }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span 
              className="inline-block px-5 py-2 rounded-full text-[13px] font-bold mb-8"
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

            <h1 
              className="mb-8 leading-[1.18] tracking-tight"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: '#1A1040'
              }}
            >
              India's Premier Cybersecurity <br />
              <span className="text-[#35268F] underline decoration-[#35268F]/20 underline-offset-8">Audit & Consulting</span> Firm
            </h1>

            <p className="text-[#60697b] text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              We have protected 120+ organisations across 12+ industries for over 22+ years. 
              Listed on NSE and BSE. Certified to ISO 9001:2015 and ISO 27001:2013.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-[#35268F] hover:bg-[#251b64] text-white px-8 py-7 rounded-[8px] text-[16px] font-bold"
              >
                See All Services
              </Button>
              <Button 
                variant="outline" 
                className="border-[#35268F] text-[#35268F] hover:bg-[#35268F] hover:text-white px-8 py-7 rounded-[8px] text-[16px] font-bold"
              >
                Request a Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Dark Section — Overlapping Image + USPs */}
      <section className="w-full bg-[#1A1040] text-white px-4 relative">
        <div className="container mx-auto">
          {/* Overlapping Image — Negative margin pull-up */}
          <div className="relative -mt-24 md:-mt-32 lg:-mt-40 mb-16 max-w-6xl mx-auto">
            <div className="rounded-[10px] overflow-hidden shadow-2xl bg-white">
              <img 
                src="/assets/img/photos/banner1.png" 
                alt="Cybersecurity Audit" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight text-white" style={{ color: '#fff !important' }}>
              India's first and only stock-exchange-listed company focused entirely on IT and Cybersecurity Audit.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 text-center pb-20">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#35268F] flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-[19px] font-bold mb-3 text-white" style={{ color: '#fff !important' }}>CERT-In Empanelled</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                India's computer security authority has approved us to conduct IT security audits since 2005.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#35268F] flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-[19px] font-bold mb-3 text-white" style={{ color: '#fff !important' }}>NSE & BSE Listed</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                From November 28, 2022, we trade on both the NSE and BSE main boards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#35268F] flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-[19px] font-bold mb-3 text-white" style={{ color: '#fff !important' }}>ISO 27001 Certified</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                We hold ISO 9001:2015 and ISO 27001:2013 certification.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#35268F] flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-[19px] font-bold mb-3 text-white" style={{ color: '#fff !important' }}>Our Expertise</h4>
              <p className="text-white/70 text-[14px] leading-relaxed">
                Our team's collective experience adds up to over 1,000 years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
