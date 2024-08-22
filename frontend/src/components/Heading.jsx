
import Navbar from './Navbar'; 
import '../App.css/Heading.css';
import logo from './images/chef-domain-logo.jpg';
import SignInPage from './SignIn'



const Heading = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Chef Domain Logo" className="logo" />
        <h1 className="chef-title">CHEF DOMAIN</h1>
      </div>
      <Navbar />
      <SignInPage />
      <div className="nav-right">
        
      </div>
    </header>
  );
};

export default Heading;
