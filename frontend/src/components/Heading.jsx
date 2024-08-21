import Cart from './Cart';
import Navbar from './Navbar'; 
import '../App.css/Common.css';
import logo from './images/chef-domain-logo.jpg';
import CredentialsSignInPage from './SignInPage';

const Heading = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Chef Domain Logo" className="logo" />
        <h1 className="chef-title">CHEF DOMAIN</h1>
      </div>
      <Navbar />
      <div className="nav-right">
        < CredentialsSignInPage />
        <Cart />
      </div>
    </header>
  );
};

export default Heading;
