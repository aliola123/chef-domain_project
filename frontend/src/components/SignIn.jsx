import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'; // Importing the sign-in icon
import '../App.css/Signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle sign-up link visibility

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
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value= {email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          <FaSignInAlt style={{ marginRight: '8px' }} /> Sign In
        </button>
      </form>
      {showSignUp && ( // Conditional rendering of the sign-up link
        <p className="signup-link">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      )}
    </div>
  );
}

export default SignIn;
