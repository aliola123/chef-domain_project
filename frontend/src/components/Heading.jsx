
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import '../App.css/Heading.css';
import logo from './images/chef-domain-logo.jpg';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Heading = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignInClick = () => {
    navigate('/signin'); // Redirect to the sign-in page
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Chef Domain Logo" className="logo" />
        <h1 className="chef-title">CHEF DOMAIN</h1>
      </div>
      <Navbar />
      <div className="nav-right">
        <FaUser 
          onClick={handleSignInClick} 
          className="account-icon" 
          size={24} 
          style={{ cursor: 'pointer' }}
        />
      </div>
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
