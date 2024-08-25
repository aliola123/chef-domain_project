import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
import '../App.css/Signin.css';
 

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const signInData = {
      email,
      password,
      rememberMe,
    };
    console.log(signInData);
    // Use fetch or axios here to send signInData to your backend
  };

  const toggleSignUp = () => setShowSignUp(!showSignUp);

  return (
    <div className="signin-container">
      {/* Account Icon at the top */}
      <FaUserCircle size={50} className="account-icon" />

      {/* Heading and Sign In Title */}
      <h1 className="signin-title">Welcome! Sign In</h1>

      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          {/* Email Input with Placeholder */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signin-input"
          />
        </div>
        <div className="form-group">
          {/* Password Input with Placeholder */}
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signin-input"
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe"> Remember me</label>
        </div>
        <button
          type="submit"
          className="signin-button"
          onClick={toggleSignUp} // Toggle sign-up link visibility
        >
          Sign In
        </button>
      </form>

      {/* Conditional rendering of the sign-up link */}
      {showSignUp && (
        <p className="signup-link">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </div>
  );
}

export default SignIn;
