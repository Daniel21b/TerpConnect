import { useState } from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../../assets/images/HomeLogo.png";
import "./PasswordReset.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate UMD email
    if (!email.endsWith("@umd.edu")) {
      setError("Please enter a valid UMD email address");
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement password reset logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (_err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="password-reset-container">
      <nav className="reset-nav">
        <Link to="/" className="nav-logo">
          <img src={HomeLogo} alt="Terp Connect Logo" className="logo" />
          <h1>Terp Connect</h1>
        </Link>
      </nav>

      <div className="reset-form-container">
        {!isSubmitted ? (
          <>
            <h2>Reset Your Password</h2>
            <p className="reset-subtitle">
              Enter your UMD email address and we&apos;ll send you a link to reset your
              password.
            </p>

            <form onSubmit={handleSubmit} className="reset-form">
              <div className="form-group">
                <label htmlFor="email">UMD Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@umd.edu"
                  required
                />
                {error && <span className="error-message">{error}</span>}
              </div>

              <button 
                type="submit" 
                className="reset-button"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Check Your Email</h2>
            <p>
              We&apos;ve sent a password reset link to <strong>{email}</strong>. 
              Please check your inbox and follow the instructions to reset your password.
            </p>
            <p className="note">
              Note: The link will expire in 1 hour for security reasons.
            </p>
          </div>
        )}

        <div className="navigation-links">
          <Link to="/login" className="back-to-login">
            ← Back to Login
          </Link>
          {!isSubmitted && (
            <Link to="/register" className="create-account">
              Create Account
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;