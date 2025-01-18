/**
 * Home Component
 * Main landing page for TerpConnect application
 *
 * @component
 */
import "./homeStyle.css";
import HomeLogo from "../../assets/images/HomeLogo.png";
import LoginForm from "../../assets/images/LoginForm.png";
import SearchIcon from "../../assets/images/Search Icon.svg";
import AboutUsBanner from "../../assets/images/AboutUsBanner.png";
import YellowStrip from "../../assets/images/Yellow Strip.png";
import RedDot from "../../assets/images/Red Dot.png";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  /**
   * State for managing search placeholder animation
   */
  const [placeholder, setPlaceholder] = useState("");
  const fullText = "Search for item on campus...";

  /**
   * Handles the typing animation effect for search placeholder
   * Creates a typewriter effect that types and deletes the placeholder text
   */
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const animatePlaceholder = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setPlaceholder(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(animatePlaceholder, 50);
      } else if (isDeleting && currentIndex >= 0) {
        setPlaceholder(fullText.slice(0, currentIndex));
        currentIndex--;
        timeoutId = setTimeout(animatePlaceholder, 50);
      } else {
        isDeleting = !isDeleting;
        timeoutId = setTimeout(animatePlaceholder, isDeleting ? 1000 : 1000);
        currentIndex = isDeleting ? fullText.length : 0;
      }
    };

    animatePlaceholder();
    return () => clearTimeout(timeoutId);
  }, []);

  /**
   * Handles the login form submission
   * Navigates to the dashboard
   */
  const handleLoginClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="floating-nav">
        <img src={HomeLogo} alt="Terp Connect Logo" className="logo" />
        <div className="nav-content">
          <h1>Terp Connect</h1>
          <ul className="nav-links">
            <li>Home</li>
            <li>Get Started</li>
            <li>About</li>
            <li>Forum</li>
          </ul>
          {/* Animated Search Bar */}
          <div className="search-container">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input
              type="search"
              placeholder={placeholder}
              className="search-bar"
            />
          </div>
          <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="main-content-text">
          {/* Hero Text */}
          <h4>CONNECTING TERRAPIN</h4>
          <p>
            <span className="highlight-text-top">ORGANIZE YOUR</span>
            <br />
            <span className="highlight-text">
              <img src={YellowStrip} alt="" className="yellow-strip" />
              LEARNING & STUDY
              <img src={RedDot} alt="" className="red-dot" />
            </span>
            <br />
            <span className="highlight-text">WITH OTHERS TERPS.</span>
          </p>
        </div>

        {/* About Us Section with Overlay */}
        <div className="main-about-us">
          <img
            src={AboutUsBanner}
            alt="About Us Banner"
            className="About-us-banner"
          />
          <div className="about-us-content-wrapper">
            <p className="about-us-title">About Terp Connect</p>
            <p className="about-us-content">
              Welcome to Terp Connect, the platform for building and joining
              <span className="highlight-red"> study groups </span>
              with fellow students. Easily track your progress and stay
              organized with our integrated calendar and
              <span className="highlight-yellow"> task management </span>
              tools in a supportive community.
            </p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="main-content-image-login">
          <img src={LoginForm} alt="Login" className="login-image" />
          <div className="login-form-overlay">
            <p className="login-title">Login in to your account</p>
            <div className="login-inputs">
              <input type="text" placeholder="Username" className="login-input" />
              <input type="password" placeholder="Password" className="login-input" />
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot your password?</a>
              </div>
              <button 
                className="login-submit-button" 
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </div>
          <div className="create-account-section">
            <p className="no-account-text">Don&apos;t have account?</p>
            <a href="#" className="create-account-link">
              Create account <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          You have to be a University of Maryland student to use Terp Connect
        </p>
      </footer>
    </div>
  );
};

export default Home;