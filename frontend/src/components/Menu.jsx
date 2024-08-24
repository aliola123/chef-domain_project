import { Outlet, Link } from 'react-router-dom';
import '../App.css/Menu.css';

const Menu = () => {
  //  data for the menu items
  const menuItems = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      price: '$12.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: '$10.99',
      image: '../images/jollof rice 2.jpg', 
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: '$8.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Grilled Chicken',
      price: '$14.99',
      image: 'https://via.placeholder.com/150', 
    },

    {
      id: 5,
      name: 'Margherita Pizza',
      price: '$10.99',
      image: '../images/jollof rice 2.jpg', 
    },
    {
      id: 6,
      name: 'Caesar Salad',
      price: '$8.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 7,
      name: 'Grilled Chicken',
      price: '$14.99',
      image: 'https://via.placeholder.com/150', 
    },
     
    {
      id: 8,
      name: 'Caesar Salad',
      price: '$8.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 9,
      name: 'Grilled Chicken',
      price: '$14.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 10,
      name: 'Grilled Chicken',
      price: '$14.99',
      image: 'https://via.placeholder.com/150', 
    },
     
    {
      id: 11,
      name: 'Caesar Salad',
      price: '$8.99',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 12,
      name: 'Grilled Chicken',
      price: '$14.99',
      image: 'https://via.placeholder.com/150', 
    },
    
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <div className="menu-item-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
<Link to="orders">View Orders</Link> 
<Outlet /> 

    </div>
  );
};

export default Menu;
