import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ITSystemsAudit from './pages/ITSystemsAudit';
import CyberSecurityAudit from './pages/CyberSecurityAudit';
import ITSecurityAuditPremium from './pages/ITSecurityAuditPremium';
import ITAssuranceCompliance from './pages/ITAssuranceCompliance';
import ITGovernance from './pages/ITGovernance';
import AboutOverview from './pages/AboutOverview';
import VisionMission from './pages/VisionMission';
import Milestone from './pages/Milestone';
import AwardsAchievements from './pages/AwardsAchievements';
import Management from './pages/Management';
import GalleryEvents from './pages/GalleryEvents';
import InvestorRelations from './pages/InvestorRelations';
import BoardOfDirectors from './pages/BoardOfDirectors';
import BoardCommittees from './pages/BoardCommittees';
import InvestorGrievances from './pages/InvestorGrievances';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/it-systems-audit" element={<ITSystemsAudit />} />
        <Route path="/cyber-security-audit" element={<CyberSecurityAudit />} />
        <Route path="/it-security-audit" element={<ITSecurityAuditPremium />} />
        <Route path="/it-assurance-compliance" element={<ITAssuranceCompliance />} />
        <Route path="/it-governance" element={<ITGovernance />} />
        <Route path="/about/overview" element={<AboutOverview />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/milestone" element={<Milestone />} />
        <Route path="/about/awards-achievements" element={<AwardsAchievements />} />
        <Route path="/about/management" element={<Management />} />
        <Route path="/about/gallery-events" element={<GalleryEvents />} />
        
        {/* Investor Routes */}
        <Route path="/investors/relations" element={<InvestorRelations />} />
        <Route path="/investors/board" element={<BoardOfDirectors />} />
        <Route path="/investors/committees" element={<BoardCommittees />} />
        <Route path="/investors/grievances" element={<InvestorGrievances />} />
        
        {/* Redirect common mistakes */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
