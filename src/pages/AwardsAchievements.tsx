import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const awardsList = [
  {
    year: "2022",
    title: "ET Change Makers Award",
    desc: "Company has been awarded with the ET Change Makers Award in the field of Cyber Security from Economic Times",
    image: "https://www.aaatechnologies.co.in/img/awards/ECT.png"
  },
  {
    year: "2022",
    title: "Certificate of Excellence",
    desc: "Certificate of Excellence in the field of \"IS Audit And Cyber Security-2022\" from CEO Magazine.",
    image: "https://www.aaatechnologies.co.in/img/awards/2022.png"
  },
  {
    year: "2021",
    title: "IS Audit Excellence",
    desc: "Certificate of Excellence in the field of \"IS AUDIT AND CYBER SECURITY\"",
    image: "https://www.aaatechnologies.co.in/img/awards/1.png"
  },
  {
    year: "2021",
    title: "Pride of Bharat",
    desc: "Awarded pride of Bharat",
    image: "https://www.aaatechnologies.co.in/img/awards/SS.png"
  },
  {
    year: "2021",
    title: "National Honor",
    desc: "Awarded pride of Bharat",
    image: "https://www.aaatechnologies.co.in/img/awards/6.png"
  },
  {
    year: "2021",
    title: "Business Leader of the year",
    desc: "Business Leader of the year",
    image: "https://www.aaatechnologies.co.in/img/awards/15.png"
  },
  {
    year: "2020",
    title: "Most Trusted Cyber Security",
    desc: "Most Trusted Cyber Security Auditing & Consulting of the year",
    image: "https://www.aaatechnologies.co.in/img/awards/RC3.png"
  },
  {
    year: "2020",
    title: "Forbes India Feature",
    desc: "Forbes India covers AAA Technologies as a premier and reputed independent auditing and consulting company",
    image: "https://www.aaatechnologies.co.in/img/awards/2.png"
  },
  {
    year: "2020",
    title: "Company of the year 2020",
    desc: "Company of the year 2020 and recognition for excellence in IS Audit And Cyber Security",
    image: "https://www.aaatechnologies.co.in/img/awards/1.png"
  },
  {
    year: "2019",
    title: "Company of the year 2019",
    desc: "Company of the year 2019 and recognition for excellence in IS Audit And Cyber Security",
    image: "https://www.aaatechnologies.co.in/img/awards/1.png"
  },
  {
    year: "2019",
    title: "Brand of the Year",
    desc: "Brand of the Year and Companies of the year, 2018-2019",
    image: "https://www.aaatechnologies.co.in/img/awards/11.png"
  },
  {
    year: "2018",
    title: "Fastest Growing CEOs",
    desc: "50 Fastest Growing CEOs in India and Company of the Year 2018, recognition for the excellence in IS audit and Cyber Security",
    image: "https://www.aaatechnologies.co.in/img/awards/1.png"
  },
  {
    year: "2018",
    title: "Most Admire Companies",
    desc: "Most Admire Companies to watch in 2018",
    image: "https://www.aaatechnologies.co.in/img/awards/8.png"
  },
  {
    year: "2017",
    title: "CIO Review Recognition",
    desc: "20 Most Promising Cyber Security Solution Providers",
    image: "https://www.aaatechnologies.co.in/img/awards/9.png"
  },
  {
    year: "2017",
    title: "Best Founded Companies",
    desc: "50 Best Indian Founded Companies",
    image: "https://www.aaatechnologies.co.in/img/awards/13.png"
  },
  {
    year: "2017",
    title: "Most Trusted Companies",
    desc: "10 Most Trusted Cyber Security Companies",
    image: "https://www.aaatechnologies.co.in/img/awards/5.png"
  },
  {
    year: "2017",
    title: "Company of the year 2017",
    desc: "Company of the year 2017, recognition for excellence in IS Audit and Cyber Security",
    image: "https://www.aaatechnologies.co.in/img/awards/1.png"
  },
  {
    year: "2011",
    title: "International Achievers Summit",
    desc: "For Recognizing outstanding achievements at International Achievers Summit on Globalisation of Industries & World Peace",
    image: "https://www.aaatechnologies.co.in/img/awards/3.png"
  },
  {
    year: "2011",
    title: "Technical Excellence",
    desc: "Best Cyber Security organization",
    image: "https://www.aaatechnologies.co.in/img/awards/16.png"
  },
  {
    year: "2011",
    title: "Indian Achievers Award",
    desc: "Indian Achievers Award, 2011 for Industrial Excellence",
    image: "https://www.aaatechnologies.co.in/img/awards/10.png"
  },
  {
    year: "2009",
    title: "Maharashtra IT Award",
    desc: "Maharashtra IT Award, 2009",
    image: "https://www.aaatechnologies.co.in/img/awards/7.png"
  }
];

export default function AwardsAchievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gray-100 transition-all font-sans overflow-x-hidden">

      <main className="bg-white overflow-hidden relative">

        {/* --- SECTION: ANALYTICAL AWARDS OVERVIEW (FINAL MORNING HERO) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                {/* NAVIGATION: INSTITUTIONAL CONTENT HIERARCHY */}
                <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Awards & Achievements</span>
                </nav>
                <h1 className="text-slate-900 font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight italic">
                  Awards & <span className="text-aaa-primary not-italic">Achievements</span>
                </h1>
                <p className="mt-6 text-slate-600 text-sm sm:text-base lg:text-lg font-medium italic leading-relaxed max-w-xl border-l-4 border-aaa-primary/20 pl-6 py-2 bg-slate-50/50 rounded-r-lg">
                  We have grown in size and won many prestigious awards over the past few years.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hidden md:block relative h-[160px] lg:h-[220px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white"
              >
                <img src="/elite_awards_hero_wall.png" className="w-full h-full object-cover" alt="Awards Chronicles" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION: CHRONOLOGICAL ACHIEVEMENT PORTFOLIO (4-COLUMN GRID) --- */}
        <section className="relative px-4 pt-4 pb-20 z-10">
          <div className="container mx-auto relative z-10" style={{ maxWidth: "1600px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {awardsList.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.05 }}
                  className="group relative bg-white border border-gray-200 rounded-lg cursor-default overflow-hidden flex flex-col h-full"
                >
                  {/* VISUAL COMPONENT: NORMALIZED AWARD EVIDENCE RENDERER */}
                  <div className="relative h-[350px] w-full overflow-hidden bg-white">
                    <img
                      src={award.image}
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ease-in-out ${award.title.includes('Forbes') ? 'scale-[2.3] group-hover:scale-[2.45]' : 'scale-[1.75] group-hover:scale-[1.85]'}`}
                      alt={award.title}
                      onError={(e) => { e.currentTarget.src = "https://www.aaatechnologies.co.in/img/logo.png"; }}
                    />

                    {/* Year Badge (AAA Red - High Contrast) */}
                    <div className="absolute top-0 left-0 px-6 py-2 bg-aaa-primary text-white text-xs font-bold uppercase tracking-[0.3em] z-20 shadow-sm">
                      {award.year}
                    </div>
                  </div>

                  {/* --- CONTENT AREA (Professional Corporate Spacing) --- */}
                  <div className="p-5 flex-1 flex flex-col bg-white">
                    <h3 className="text-[1.05rem] font-bold text-slate-900 leading-tight mb-1.5 group-hover:text-aaa-primary transition-colors uppercase tracking-tight">
                      {award.title}
                    </h3>
                    <p className="text-slate-500 text-[0.9rem] font-medium leading-relaxed mb-4">
                      {award.desc}
                    </p>

                    {/* Footer Button (Corporate Black) */}
                    <div className="mt-auto">
                      <div className="w-full py-2.5 bg-slate-900 text-white rounded-sm text-center text-[0.75rem] font-bold uppercase tracking-[0.2em] group-hover:bg-aaa-primary transition-all duration-500">
                        Award Recognition
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
