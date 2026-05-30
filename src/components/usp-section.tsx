import { ShieldCheck, TrendingUp, Award, Users } from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "CERT-In Empanelled",
    description: "India's computer security authority has approved us since 2005. That approval has been renewed every year."
  },
  {
    icon: TrendingUp,
    title: "NSE & BSE Listed",
    description: "From November 28, 2022, we trade on both the NSE and BSE main boards. Public listing means full financial transparency."
  },
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "We hold ISO 9001:2015, ISO 20001 (ITSM), ISO 27001:2022 and CMMI Level 3 certification. We follow the same standards we audit for our clients."
  },
  {
    icon: Users,
    title: "Our Expertise",
    description: "Our team's collective experience adds up to over 1,000 years. That depth covers every major industry in India."
  }
];

export function USPSection() {
  return (
    <section className="bg-[#1a1d21] text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white" style={{ color: '#fff !important' }}>
            India's first and only stock-exchange-listed company focused entirely on IT and Cyber Security Audit.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {usps.map((usp, idx) => (
            <div key={idx} className="space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#35268F] flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white" style={{ color: '#fff !important' }}>{usp.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
