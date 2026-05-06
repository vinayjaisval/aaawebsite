import { 
  Landmark, 
  ShieldCheck, 
  Building2, 
  Heart, 
  Radio, 
  BarChart3, 
  Laptop, 
  Factory, 
  ShoppingCart, 
  Zap, 
  Users, 
  TrendingUp 
} from "lucide-react";

const industries = [
  { icon: Landmark, label: "Banking" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Building2, label: "Government" },
  { icon: Heart, label: "Healthcare" },
  { icon: Radio, label: "Telecom" },
  { icon: BarChart3, label: "NBFC" },
  { icon: Laptop, label: "IT / ITES" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Zap, label: "Energy & Power" },
  { icon: Users, label: "Education" },
  { icon: TrendingUp, label: "Capital Markets" },
];

export function SolutionsSection() {
  return (
    <section id="industries" className="bg-slate-50 py-24 px-4 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background Watermark */}
        <div className="absolute -top-10 -right-10 text-[20vw] font-black text-slate-200/20 select-none pointer-events-none rotate-12">
          TRUST
        </div>

        <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
          <span className="inline-block text-aaa-primary font-bold uppercase tracking-widest text-xs mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
            We Work Across<br />12+ Industries
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Wherever RBI, SEBI, IRDAI, or MeitY sets the rules, we know the regulatory landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
          {industries.map((industry, idx) => (
            <div key={idx} className="flex flex-col items-center p-10 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-aaa-secondary/10 transition-colors">
                <industry.icon className="h-7 w-7 text-slate-400 group-hover:text-aaa-secondary transition-colors" />
              </div>
              <span className="font-black text-slate-900 uppercase tracking-widest text-xs">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
