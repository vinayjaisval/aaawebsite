import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ITSystemsAudit from './pages/ITSystemsAudit';
import CyberSecurityAudit from './pages/CyberSecurityAudit';
import ITSecurityAuditPremium from './pages/ITSecurityAuditPremium';
import ITAssuranceCompliance from './pages/ITAssuranceCompliance';
import ITGovernance from './pages/ITGovernance';

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
        
        {/* Redirect common mistakes */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
