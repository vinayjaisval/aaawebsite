import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutOverview from './pages/AboutOverview';
import AwardsAchievements from './pages/AwardsAchievements';
import BoardCommittees from './pages/BoardCommittees';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CyberSecurityAudit from './pages/CyberSecurityAudit';
import GalleryEvents from './pages/GalleryEvents';
import ITAssuranceCompliance from './pages/ITAssuranceCompliance';
import ITGovernance from './pages/ITGovernance';
import ITSecurityAuditPremium from './pages/ITSecurityAuditPremium';
import ITSystemsAudit from './pages/ITSystemsAudit';
import Industries from './pages/Industries';
import InvestorGrievances from './pages/InvestorGrievances';
import InvestorRelations from './pages/InvestorRelations';
import Management from './pages/Management';
import Milestone from './pages/Milestone';
import VisionMission from './pages/VisionMission';
import DPDPCompliance from './pages/DPDPCompliance';

import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About Routes */}
          <Route path="/about/overview" element={<AboutOverview />} />
          <Route path="/about/awards-achievements" element={<AwardsAchievements />} />
          <Route path="/about/gallery-events" element={<GalleryEvents />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/milestone" element={<Milestone />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          
          {/* Service Routes */}
          <Route path="/it-security-audit" element={<ITSecurityAuditPremium />} />
          <Route path="/it-assurance-compliance" element={<ITAssuranceCompliance />} />
          <Route path="/it-systems-audit" element={<ITSystemsAudit />} />
          <Route path="/cyber-security-audit" element={<CyberSecurityAudit />} />
          <Route path="/it-governance" element={<ITGovernance />} />
          <Route path="/dpdp-compliance" element={<DPDPCompliance />} />
          
          {/* Investor Routes */}
          <Route path="/investors/relations" element={<InvestorRelations />} />
          <Route path="/investors/board" element={<BoardOfDirectors />} />
          <Route path="/investors/committees" element={<BoardCommittees />} />
          <Route path="/investors/grievances" element={<InvestorGrievances />} />
          
          {/* Main Routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
