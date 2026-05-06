import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function CTABanner() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-24 px-4 bg-[#35268F] text-white relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3 space-y-6">
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold leading-tight">
              Strengthen your IT security posture with India's most trusted
              independent audit firm.
            </h2>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              With over 22 years of experience, CERT-In empanelment since 2005,
              and ISO-certified processes, AAA Technologies delivers audits you
              can rely on — across all major industry sectors nationwide.
            </p>
          </div>

          <div className="lg:w-1/3 flex flex-wrap gap-4 justify-center lg:justify-end">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#35268F] px-8 py-7 rounded-[8px] font-bold"
            >
              <Play className="h-4 w-4 mr-2 fill-current" />
              Know More
            </Button>
            <Button className="bg-[#008253] hover:bg-[#006b44] text-white px-8 py-7 rounded-[8px] font-bold border-none shadow-xl">
              Request an Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
