import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import SignIn from './Signin';



const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sign in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default RoutesComponent;





