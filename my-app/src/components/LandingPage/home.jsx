/**
 * Home Component
 * Main landing page for TerpConnect application
 * 
 * @component
 */
import './homeStyle.css';
import HomeLogo from '../../assets/images/HomeLogo.png';
import LoginForm from '../../assets/images/LoginForm.png';
import SearchIcon from '../../assets/images/Search Icon.svg';
import AboutUsBanner from '../../assets/images/AboutUsBanner.png';
import { useState, useEffect } from 'react';

const Home = () => {
    /**
     * State for managing search placeholder animation
     */
    const [placeholder, setPlaceholder] = useState('');
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
            <button className="login-button">Login</button>
          </div>
        </nav>

        {/* Main Content Section */}
        <div className="main-content">
          <div className="main-content-text">
            {/* Hero Text */}
            <h4>CONNECTING  TERRAPIN</h4>
            <p>
              <span>ORGANIZE YOUR</span><br />
              <span>LEARNING & STUDY</span><br />
              <span>WITH OTHERS TERPS.</span>
            </p>

            {/* About Us Section with Overlay */}
            <div className="main-about-us">
              <img src={AboutUsBanner} alt="About Us Banner" className="About-us-banner" />
              <p className="about-us-title">About Terp Connect</p>
              <p className="about-us-content">
                Welcome to Terp Connect, the platform for building and joining study groups with fellow students. 
                Easily track your progress and stay organized with our integrated calendar and task management tools 
                in a supportive community.
              </p>
            </div>
          </div>
          
          {/* Login Form Section */}
          <div className="main-content-image-login">
            <img src={LoginForm} alt="Login" className="login-image" />
          </div>
        </div>
      </div>
    );
};

export default Home;