// App.jsx — Main entry point with router

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarMobile from './components/NavbarMobile';


// Import tab pages
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Monthly from './pages/Monthly';
import Yearly from './pages/Yearly';
import Health from './pages/Health';
import Streak from './pages/Streak';

function App() {
  return (
    <Router>
      <NavbarMobile />
      
      <Routes>
        <Route path="/" element={<Navigate to="/daily" />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/yearly" element={<Yearly />} />
        <Route path="/health" element={<Health />} />
        <Route path="/streak" element={<Streak />} />
      </Routes>
    </Router>
  );
}

export default App;
