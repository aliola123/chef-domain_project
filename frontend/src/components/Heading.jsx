import { useState } from 'react';
import Navbar from './Navbar'; 
import '../App.css/Heading.css';
import logo from './images/chef-domain-logo.jpg';
import SignIn from './SignIn';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Heading = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Chef Domain Logo" className="logo" />
        <h1 className="chef-title">CHEF DOMAIN</h1>
      </div>
      <Navbar />
      <div className="nav-right">
        <button onClick={handleSignInClick} className="signin-button">
          Sign In
        </button>
      </div>
      {showSignIn && (
        <div className="signin-container">
          <div className="auth-links">
        {<SignIn />}
        <Link to="/signin" className="signin-button">
          <FaSignInAlt size={20} />
        </Link>
      </div>
        </div>
      )}
    </header>
  );
};

export default Heading;
