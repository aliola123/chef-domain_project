import { useState } from 'react';
import '../App.css/Cart.css';

const Cart = () => {
  // Example static cart items (this will be replaced by backend data later)
  const [cartItems, setCartItems] = useState([
    {
      _id: '1',
      name: 'Product 1',
      description: 'Delicious food item',
      price: 10.99,
      category: 'Food',
      image: 'path-to-image',
      quantity: 1,
    },
    {
      _id: '2',
      name: 'Product 2',
      description: 'Refreshing drink',
      price: 5.49,
      category: 'Drink',
      image: 'path-to-image',
      quantity: 2,
    },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity, total: item.price * quantity } : item
      )
    );
  };

  // Calculate total for all items
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
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
                  onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value, 10))} 
                  min="1" 
                />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
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

export default Cart;
