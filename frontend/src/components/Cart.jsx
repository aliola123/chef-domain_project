import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../App.css/Common.css';

const Cart = () => {
  return (
    <Link to="/cart" className="nav-icon">
      <FaShoppingCart />
    </Link>
  );
};

export default Cart;
