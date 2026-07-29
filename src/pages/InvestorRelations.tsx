import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Folder,
  Download,
  TrendingUp,
  PieChart,
  ShieldCheck,
  FileBadge,
  Bell,
  Mail,
  Scale,
  Megaphone,
  UserCheck,
  BookOpen,
  MoreHorizontal,
  Search,
  Eye
} from "lucide-react";
import { BackToTop } from "../components/back-to-top";

const investorCategories = [
  { id: "annual-report", title: "Annual Report", icon: FileText },
  { id: "investor-presentation", title: "Investor Presentation", icon: TrendingUp },
  { id: "shareholding-pattern", title: "Shareholding Pattern", icon: PieChart },
  { id: "policies", title: "Policies", icon: ShieldCheck },
  { id: "financial-results", title: "Financial Results", icon: FileBadge },
  { id: "notices", title: "Notices", icon: Bell },
  { id: "annual-return", title: "Annual Return", icon: Mail },
  { id: "notice-board-meeting", title: "Notice of Board Meeting", icon: Scale },
  { id: "scrutinizers-report", title: "Scrutinizers Report", icon: Search },
  { id: "press-release", title: "Press Release", icon: Megaphone },
  { id: "chairman-communication", title: "Chairman's Communication", icon: UserCheck },
  { id: "prospectus", title: "Prospectus", icon: BookOpen },
  { id: "others", title: "Others", icon: MoreHorizontal },
];

const reportData: Record<string, any> = {
  "annual-report": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Annual Report FY 2025-26", size: "2.8 MB", url: "/documents/annual-reports/annual-report-2025-26.pdf" }],
      "2024-2025": [{ title: "Annual Report FY 2024-25", size: "14.2 MB", url: "/documents/annual-reports/annual-report-2024-25.pdf" }],
      "2023-2024": [{ title: "Annual Report FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Annual Report FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Annual Report FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Annual Report FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Annual Report FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Annual Report FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Annual Report FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "investor-presentation": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Investor Presentation FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Investor Presentation FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Investor Presentation FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Investor Presentation FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Investor Presentation FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Investor Presentation FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Investor Presentation FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Investor Presentation FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Investor Presentation FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "shareholding-pattern": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Shareholding Pattern FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Shareholding Pattern FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Shareholding Pattern FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Shareholding Pattern FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Shareholding Pattern FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Shareholding Pattern FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Shareholding Pattern FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Shareholding Pattern FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Shareholding Pattern FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "financial-results": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Financial Results FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Financial Results FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Financial Results FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Financial Results FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Financial Results FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Financial Results FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Financial Results FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Financial Results FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Financial Results FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "notices": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Notice of AGM FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Notice of AGM FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Notice of AGM FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Notice of AGM FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Notice of AGM FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Notice of AGM FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Notice of AGM FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Notice of AGM FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Notice of AGM FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "annual-return": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Annual Return Form MGT-7 FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Annual Return Form MGT-7 FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Annual Return Form MGT-7 FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Annual Return Form MGT-7 FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Annual Return Form MGT-7 FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Annual Return Form MGT-7 FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Annual Return Form MGT-7 FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Annual Return Form MGT-7 FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Annual Return Form MGT-7 FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "scrutinizers-report": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Scrutinizers Report FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Scrutinizers Report FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Scrutinizers Report FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Scrutinizers Report FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Scrutinizers Report FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Scrutinizers Report FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Scrutinizers Report FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Scrutinizers Report FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Scrutinizers Report FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "notice-board-meeting": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Notice of Board Meeting FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Notice of Board Meeting FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Notice of Board Meeting FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Notice of Board Meeting FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Notice of Board Meeting FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Notice of Board Meeting FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Notice of Board Meeting FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Notice of Board Meeting FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Notice of Board Meeting FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "policies": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Whistle Blower Policy", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Code of Conduct", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2023-2024": [{ title: "CSR Policy", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2022-2023": [{ title: "Archival Policy", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2021-2022": [{ title: "Related Party Policy", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2020-2021": [{ title: "Nomination Policy", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2019-2020": [{ title: "Familiarization Programme", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }],
      "2018-2019": [{ title: "Risk Management Policy", size: "1.5 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2017-2018": [{ title: "Dividend Policy", size: "0.8 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }]
    }
  },
  "chairman-communication": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Chairman Communication FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Chairman Communication FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Chairman Communication FY 2023-24", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2022-2023": [{ title: "Chairman Communication FY 2022-23", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2021-2022": [{ title: "Chairman Communication FY 2021-22", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2020-2021": [{ title: "Chairman Communication FY 2020-21", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2019-2020": [{ title: "Chairman Communication FY 2019-20", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2018-2019": [{ title: "Chairman Communication FY 2018-19", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2017-2018": [{ title: "Chairman Communication FY 2017-18", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }]
    }
  },
  "prospectus": {
    type: "folders",
    data: {
      "Archive": [
        { title: "Initial Public Offer - Prospectus 2024", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" },
        { title: "Draft Red Herring Prospectus (DRHP)", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" },
        { title: "Red Herring Prospectus (RHP)", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }
      ]
    }
  },
  "press-release": {
    type: "folders",
    data: {
      "2025-2026": [{ title: "Press Release FY 2025-26", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2024-2025": [{ title: "Press Release FY 2024-25", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" }],
      "2023-2024": [{ title: "Press Release FY 2023-24", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" }],
      "2022-2023": [{ title: "Press Release FY 2022-23", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }],
      "2021-2022": [{ title: "Press Release FY 2021-22", size: "23.8 MB", url: "/documents/annual-reports/716352961_Annual Report-2021.pdf" }],
      "2020-2021": [{ title: "Press Release FY 2020-21", size: "2.2 MB", url: "/documents/annual-reports/724826629_Annual Report-2020.pdf" }],
      "2019-2020": [{ title: "Press Release FY 2019-20", size: "2.4 MB", url: "/documents/annual-reports/382662026_Annual Report-2019.pdf" }],
      "2018-2019": [{ title: "Press Release FY 2018-19", size: "1.9 MB", url: "/documents/annual-reports/973383417_Annual Report-2018.pdf" }],
      "2017-2018": [{ title: "Press Release FY 2017-18", size: "2.1 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }]
    }
  },
  "others": {
    type: "folders",
    data: {
      "Archive": [
        { title: "Other Statutory Compliance Documents 2024", size: "2.6 MB", url: "/documents/annual-reports/499080867_ANNUAL REPORT 2024.pdf" },
        { title: "Investor Feedback Report 2023", size: "16.7 MB", url: "/documents/annual-reports/483931699_Annual Report-2023.pdf" },
        { title: "Statutory Filings - SEBI Compliance", size: "15.3 MB", url: "/documents/annual-reports/452649839_Annual Report-2022.pdf" }
      ]
    }
  }
};

export default function InvestorRelations() {
  const [activeCategory, setActiveCategory] = useState("annual-report");
  const [selectedYear, setSelectedYear] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flatten and Filter Data based on Category and Year
  const getFilteredDocs = () => {
    let docs: any[] = [];
    const categoryData = reportData[activeCategory]?.data || {};

    Object.entries(categoryData).forEach(([year, fileList]: [string, any]) => {
      if (selectedYear === "All" || selectedYear === year) {
        fileList.forEach((file: any) => {
          docs.push({ ...file, year });
        });
      }
    });

    return docs;
  };

  const filteredDocs = getFilteredDocs();
  const availableYears = ["All", ...Object.keys(reportData[activeCategory]?.data || {}).filter(k => k !== "Archive").sort().reverse()];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-aaa-primary/10 transition-colors overflow-x-hidden">
      <main className="bg-white">
        <section className="relative py-12 lg:py-16 bg-white border-b border-slate-100 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(252,43,42,0.012),transparent_70%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ maxWidth: "1250px" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 max-w-2xl">
                <nav className="flex items-center gap-2 mb-8 text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
                  <Link to="/" className="text-slate-400 hover:text-aaa-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3 text-slate-200 shrink-0" />
                  <span className="text-aaa-primary shrink-0 uppercase tracking-widest font-extrabold">Investor Relations</span>
                </nav>
                <h1 className="text-[#1A1040] font-extrabold uppercase tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-[0.9] italic mb-8">
                  Investor <span className="text-aaa-primary not-italic">Relations</span>
                </h1>
                <div className="mt-6 text-[17px] md:text-[19px] text-[#60697B] leading-relaxed border-l-[4px] border-aaa-primary/20 pl-8 block max-w-2xl font-medium bg-slate-50/50 py-6 rounded-r-2xl shadow-sm transition-all duration-500">
                  A legacy represented by two decades of uncompromising trust and digital resilience since 2000.
                </div>
              </div>
              <div className="hidden md:block relative h-[160px] lg:h-[250px] w-[350px] lg:w-[450px] rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-white shrink-0 group">
                <img
                  src="/investor_grievances_hero.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Investor Relations Visual"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO CONTENT AREA --- */}
        <section className="relative py-16 bg-[#f8fafc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1350px" }}>
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* SIDEBAR: PROFESSIONAL CLEAN STYLE (redBus pattern) */}
              <aside className="lg:w-[300px] shrink-0 w-full sticky top-32 z-10">
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded-lg">
                  <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Folder className="w-4 h-4 text-aaa-primary" />
                      Investor Categories
                    </h3>
                  </div>
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar">
                    {investorCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setSelectedYear("All");
                        }}
                        className={`flex-shrink-0 lg:w-full flex items-center justify-between px-6 py-4 text-[13px] font-bold transition-all duration-200 border-b lg:border-b-0 lg:border-l-4 ${activeCategory === cat.id
                          ? "bg-red-50/50 border-aaa-primary text-aaa-primary"
                          : "text-[#60697B] hover:bg-slate-50 hover:text-aaa-primary border-transparent"
                          }`}
                      >
                        <span className="whitespace-nowrap uppercase tracking-tight">{cat.title}</span>
                        <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform duration-300 ${activeCategory === cat.id ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* MAIN CONTENT AREA: TIGHT GRID */}
              <div className="flex-1 w-full">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-8">
                  <div className="flex items-center gap-3 text-aaa-primary">
                    <div className="w-6 h-[2px] bg-aaa-primary" />
                    <span className="text-[11px] font-extrabold text-[#1A1040] uppercase tracking-[0.3em]">
                      {investorCategories.find(c => c.id === activeCategory)?.title}
                    </span>
                  </div>

                  {/* Compact Year Filter */}
                  <div className="flex flex-wrap gap-2">
                    {availableYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 border ${selectedYear === year
                          ? "bg-aaa-primary text-white border-aaa-primary shadow-lg shadow-aaa-primary/20"
                          : "bg-white text-slate-400 border-slate-100 hover:border-aaa-primary hover:text-aaa-primary"
                          }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeCategory}-${selectedYear}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                  >
                    {filteredDocs.length > 0 ? (
                      filteredDocs.map((doc, idx) => (
                        <motion.a
                          key={idx}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-aaa-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden h-[210px]"
                        >

                          <div className="relative mt-2">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-aaa-primary/5 group-hover:text-aaa-primary transition-all duration-500 border border-transparent group-hover:border-aaa-primary/10 overflow-hidden">
                              <FileText className="w-6 h-6 absolute transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" />
                              <Eye className="w-6 h-6 opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 text-aaa-primary" />
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col justify-center w-full px-1">
                            <h4 className="text-[13px] font-extrabold text-[#1A1040] uppercase tracking-tight leading-snug group-hover:text-aaa-primary transition-colors mb-2 line-clamp-3">
                              {doc.title}
                            </h4>
                          </div>

                          <div className="w-full pt-3 border-t border-slate-50 mt-auto flex items-center justify-center gap-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                              {doc.year === "Current" ? "Official" : doc.year}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className="text-[11px] font-extrabold text-[#60697B] uppercase tracking-widest">
                              {doc.size}
                            </span>
                          </div>

                          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Download className="w-3 h-3 text-aaa-primary" />
                          </div>
                        </motion.a>
                      ))
                    ) : (
                      <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
                        <Search className="w-8 h-8 text-slate-200 mx-auto mb-4" />
                        <h3 className="text-xl font-extrabold text-[#1A1040] uppercase italic tracking-tighter">No Records</h3>
                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">
                          No documents found for the selected criteria.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  );
}