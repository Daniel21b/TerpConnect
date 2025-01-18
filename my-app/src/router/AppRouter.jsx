import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/LandingPage/home.jsx';
import Dashboard from '../components/Dashboard/dashboard.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;