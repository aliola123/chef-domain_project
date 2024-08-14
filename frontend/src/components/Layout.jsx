import PropTypes from 'prop-types'; 
import Heading from './Heading';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Heading />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
