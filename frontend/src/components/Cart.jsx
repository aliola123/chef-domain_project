import  { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css/Cart.css'


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cart', {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
      });
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
      });
      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item._id}>
                <td><img src={item.image} alt={item.product.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{item.product.name}</td>
                <td>{item.qty}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
