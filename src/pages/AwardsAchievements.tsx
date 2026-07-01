import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const awardsList = [
  {
    year: "2022",
    title: "ET Change Makers Award",
    desc: "Company has been awarded with the ET Change Makers Award in the field of Cyber Security from Economic Times",
    image: "/images/award_et_change_makers.png"
  },
  {
    year: "2022",
    title: "Certificate of Excellence",
    desc: "Certificate of Excellence in the field of \"IS Audit And Cyber Security-2022\" from CEO Magazine.",
    image: "/images/award_ceo_excellence.png"
  },
  {
    year: "2021",
    title: "IS Audit Excellence",
    desc: "Certificate of Excellence in the field of \"IS AUDIT AND CYBER SECURITY\"",
    image: "/images/award_is_audit_excellence.png"
  },
  {
    year: "2021",
    title: "Pride of Bharat",
    desc: "Awarded pride of Bharat",
    image: "/images/award_pride_of_bharat.png"
  },
  {
    year: "2021",
    title: "National Honor",
    desc: "Awarded pride of Bharat",
    image: "/images/award_gold_trophy.png"
  },
  {
    year: "2021",
    title: "Business Leader of the year",
    desc: "Business Leader of the year",
    image: "/images/award_business_leader.png"
  },
  {
    year: "2020",
    title: "Most Trusted Cyber Security",
    desc: "Most Trusted Cyber Security Auditing & Consulting of the year",
    image: "/images/award_business_connect.png"
  },
  {
    year: "2020",
    title: "Forbes India Feature",
    desc: "Forbes India covers AAA Technologies as a premier and reputed independent auditing and consulting company",
    image: "/images/award_forbes.png"
  },
  {
    year: "2020",
    title: "Company of the year 2020",
    desc: "Company of the year 2020 and recognition for excellence in IS Audit And Cyber Security",
    image: "/images/award_ceo_excellence.png"
  },
  {
    year: "2019",
    title: "Company of the year 2019",
    desc: "Company of the year 2019 and recognition for excellence in IS Audit And Cyber Security",
    image: "/images/award_ceo_excellence.png"
  },
  {
    year: "2019",
    title: "Brand of the Year",
    desc: "Brand of the Year and Companies of the year, 2018-2019",
    image: "/images/award_pride_of_india_brands.png"
  },
  {
    year: "2018",
    title: "Fastest Growing CEOs",
    desc: "50 Fastest Growing CEOs in India and Company of the Year 2018, recognition for the excellence in IS audit and Cyber Security",
    image: "/images/award_ceo_excellence.png"
  },
  {
    year: "2018",
    title: "Most Admire Companies",
    desc: "Most Admire Companies to watch in 2018",
    image: "/images/award_silicon_review.png"
  },
  {
    year: "2017",
    title: "CIO Review Recognition",
    desc: "20 Most Promising Cyber Security Solution Providers",
    image: "/images/award_cio_review.png"
  },
  {
    year: "2017",
    title: "Best Founded Companies",
    desc: "50 Best Indian Founded Companies",
    image: "/images/award_business_connect.png"
  },
  {
    year: "2017",
    title: "Most Trusted Companies",
    desc: "10 Most Trusted Cyber Security Companies",
    image: "/images/award_insights_success.png"
  },
  {
    year: "2017",
    title: "Company of the year 2017",
    desc: "Company of the year 2017, recognition for excellence in IS Audit and Cyber Security",
    image: "/images/award_ceo_magazine.png"
  },
  {
    year: "2011",
    title: "International Achievers Summit",
    desc: "For Recognizing outstanding achievements at International Achievers Summit on Globalisation of Industries & World Peace",
    image: "/images/award_international_achievers_conference.png"
  },
  {
    year: "2011",
    title: "Technical Excellence",
    desc: "Best Cyber Security organization",
    image: "/images/award_pride_of_bharat.png"
  },
  {
    year: "2011",
    title: "Indian Achievers Award",
    desc: "Indian Achievers Award, 2011 for Industrial Excellence",
    image: "/images/award_indian_achievers.png"
  },
  {
    year: "2009",
    title: "Maharashtra IT Award",
    desc: "Maharashtra IT Award, 2009",
    image: "/images/award_maharashtra_it.png"
  }
];

export default function AwardsAchievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#35268F]/10 overflow-x-hidden">

      <main className="bg-white overflow-hidden relative">

        {/* --- SECTION: ANALYTICAL AWARDS OVERVIEW (FINAL MORNING HERO) --- */}
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1150px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                {/* NAVIGATION: INSTITUTIONAL CONTENT HIERARCHY */}
                <nav className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                  <Link to="/" className="hover:text-aaa-primary transition-colors text-slate-900 text-xs">Home</Link>
                  <ChevronRight className="w-2.5 h-2.5 text-slate-200" />
                  <span className="text-aaa-primary uppercase tracking-[0.4em]">Awards & Achievements</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: '1.1' }}>
                  Awards & <span className="text-aaa-primary">Achievements</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  We have grown in size and won many prestigious awards over the past few years.
                </div>
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

        {/* --- SECTION: CHRONOLOGICAL ACHIEVEMENT PORTFOLIO (GALLERY GRID) --- */}
        <section className="relative px-4 pt-4 pb-20 bg-slate-50 z-10">
          <div className="container mx-auto relative z-10" style={{ maxWidth: "1200px" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {awardsList.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.05 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-white flex items-center justify-center p-0">
                    <img
                      src={award.image}
                      className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-110 drop-shadow-md"
                      alt={award.title}
                      onError={(e) => { e.currentTarget.src = "https://www.aaatechnologies.co.in/img/logo.png"; }}
                    />

                    {/* INSTITUTIONAL OVERLAY: Appears on Hover (Matches Reference Site) */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center p-6 z-30">
                      <div className="flex flex-col items-center scale-90 group-hover:scale-100 transition-transform duration-400">
                        <span className="text-white font-bold text-3xl mb-1">{award.year}</span>
                        <div className="h-0.5 w-8 bg-white/50 my-3" />
                        <p className="text-white text-[13px] font-medium leading-relaxed px-2 line-clamp-4">
                          {award.desc}
                        </p>
                      </div>
                    </div>

                    {/* Constant Year Badge (Top Left) */}
                    <div className="absolute top-0 left-0 px-4 py-1.5 bg-aaa-primary text-white text-[11px] font-bold uppercase tracking-[0.2em] z-20 shadow-md rounded-br-xl group-hover:opacity-0 transition-opacity duration-300">
                      {award.year}
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
