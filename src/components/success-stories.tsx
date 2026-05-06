import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AAA Technologies conducted a thorough IT Security Audit for our bank. Their expertise and methodical approach gave our board complete confidence that our systems are properly protected. Highly recommended.",
    author: "Chief Information Security Officer",
    org: "Leading Private Sector Bank, India"
  },
  {
    quote: "Their Cyber Security Audit helped us find critical gaps in our systems. The action plan they gave us was clear and easy to follow. AAA Technologies is our trusted partner for annual security checks.",
    author: "Head of IT Risk",
    org: "Government Financial Institution"
  }
];

export function SuccessStories() {
  return (
    <section id="testimonials" className="bg-white py-24 px-4 border-t border-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-aaa-primary font-bold uppercase tracking-widest text-xs mb-4">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-0 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[40px] relative border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <Quote className="h-12 w-12 text-aaa-primary/10 absolute top-10 left-10 group-hover:text-aaa-primary/20 transition-colors" />
                <blockquote className="relative z-10 text-xl text-slate-700 italic leading-relaxed mb-10 font-medium">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col border-l-4 border-aaa-secondary pl-6">
                  <span className="font-black text-slate-900 text-lg uppercase tracking-tight">{t.author}</span>
                  <span className="text-aaa-secondary font-extrabold text-sm tracking-widest uppercase mt-1">{t.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
