import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css/Cart.css'; 

const Cart = ({ products }) => {
  // Initialize cart items with the provided products, including default quantity and total
  const [cartItems, setCartItems] = useState(products.map(product => ({
    ...product,
    quantity: 1, // default quantity
    total: product.price // total price for initial quantity
  })));

  // Handle quantity changes
  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item._id === id ? { ...item, quantity: quantity, total: quantity * item.price } : item
    ));
  };

  // Calculate the total price for all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item._id}>
              <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))} 
                  min="1" 
                />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5"><strong>Total:</strong></td>
            <td><strong>${calculateTotal().toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

// Define PropTypes for the Cart component
Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cart;
