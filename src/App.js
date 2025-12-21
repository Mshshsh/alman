import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CompanyInfo from './pages/CompanyInfo';
import FinancialPerformance from './pages/FinancialPerformance';
import HROrganization from './pages/HROrganization';
import OperationalEfficiency from './pages/OperationalEfficiency';
import MarketingSales from './pages/MarketingSales';
import RDInnovation from './pages/RDInnovation';
import SupplyChain from './pages/SupplyChain';
import MacroEnvironment from './pages/MacroEnvironment';
import StrategicSynthesis from './pages/StrategicSynthesis';
import AISolutions from './pages/AISolutions';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/company-info" replace />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/financial-performance" element={<FinancialPerformance />} />
          <Route path="/hr-organization" element={<HROrganization />} />
          <Route path="/operational-efficiency" element={<OperationalEfficiency />} />
          <Route path="/marketing-sales" element={<MarketingSales />} />
          <Route path="/rd-innovation" element={<RDInnovation />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/macro-environment" element={<MacroEnvironment />} />
          <Route path="/strategic-synthesis" element={<StrategicSynthesis />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
