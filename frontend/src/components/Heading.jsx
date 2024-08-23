import { useState } from 'react';
import Navbar from './Navbar'; 
import '../App.css/Heading.css';
import logo from './images/chef-domain-logo.jpg';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Heading = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);  // Toggle sign-in visibility
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
            {/* Your sign-in form or links */}
          </div>
        </div>
      )}
      <div className="nav-icons">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-text">Cart</span>
        </Link>
      </div>
    </header>
  );
}

export default Heading;
