import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 


const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="/cart" element={<h2>Cart</h2>} />
      </Routes>
    </Layout>
  );
};

export default RoutesComponent;





