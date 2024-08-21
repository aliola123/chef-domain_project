import PropTypes from 'prop-types'; 
import Heading from './Heading';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

const Layout = ({ children }) => {
  return (
    <div>
      <Heading />
      <main className ='content'>
        {children}
        <Home />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
