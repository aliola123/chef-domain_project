import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css/Order.css'; 

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <h2>Order ID: {order._id}</h2>
              <h3>Shipping Address:</h3>
              <p>{order.shippingAddress}</p>
              <h3>Items:</h3>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item.product} className="order-item-details">
                    <img src={item.image} alt={item.product} className="order-item-image" />
                    <p>Product: {item.product}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;
