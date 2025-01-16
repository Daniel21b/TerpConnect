import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/LandingPage/home.jsx';// Import other pages as needed

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;