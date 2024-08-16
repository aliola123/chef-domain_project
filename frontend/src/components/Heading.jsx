import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import Cart from './Cart';
import '../App.css/Common.css';
import logo from '/images/chef-domain-logo.jpg';

const Heading = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Chef Domain Logo" className="logo" />
        <h1 className="chef-title">CHEF DOMAIN</h1>
      </div>
      <div className="navbar">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-right">
          <LoginButton />
          <Cart /> {/* Add the Cart component here */}
        </div>
      </div>
    </header>
  );
};

export default Heading;
