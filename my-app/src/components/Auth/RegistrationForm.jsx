import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLogo from "../../assets/images/HomeLogo.png";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    major: "",
    graduationYear: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is too short";
    }
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name is too short";
    }

    // Email validation
    if (!formData.email.endsWith("@umd.edu")) {
      newErrors.email = "Please use your UMD email address";
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Major validation
    if (formData.major.trim().length < 2) {
      newErrors.major = "Please enter your major";
    }

    // Graduation year validation
    const currentYear = new Date().getFullYear();
    const gradYear = parseInt(formData.graduationYear);
    if (isNaN(gradYear) || gradYear < currentYear || gradYear > currentYear + 6) {
      newErrors.graduationYear = "Please enter a valid graduation year";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        // TODO: Add API integration for registration
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
        console.log("Form submitted:", formData);
        // Redirect to login page after successful registration
        navigate("/login", { 
          state: { 
            message: "Registration successful! Please log in with your credentials." 
          }
        });
      } catch (_error) {
        setErrors({
          submit: "Registration failed. Please try again later."
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="registration-container">
      <nav className="registration-nav">
        <Link to="/" className="nav-logo">
          <img src={HomeLogo} alt="Terp Connect Logo" className="logo" />
          <h1>Terp Connect</h1>
        </Link>
      </nav>

      <div className="registration-form-container">
        <h2>Create Your Account</h2>
        <p className="registration-subtitle">Join the UMD community today!</p>
        
        {errors.submit && (
          <div className="error-banner">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">UMD Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@umd.edu"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="academic-fields">
            <div className="form-group">
              <label htmlFor="major">Major</label>
              <input
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
              />
              {errors.major && <span className="error-message">{errors.major}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="graduationYear">Expected Graduation Year</label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                min={new Date().getFullYear()}
                max={new Date().getFullYear() + 6}
              />
              {errors.graduationYear && <span className="error-message">{errors.graduationYear}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="register-button"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;