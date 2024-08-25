import '../App.css/MenuCarousel.css';
import vegetableSalad from './images/Fries.jpg';
import beefBurger from './images/jollof rice 3.jpg';
import spaghettiCarbonara from './images/buffet.jpg';
import margheritaPizza from './images/swallow 2.jpg';
import chocolateCake from './images/jollof rice 2.jpg';
import seafoodPaella from './images/swallow.jpg';

const MenuCarousel = () => {
  const menuItems = [
    { name: 'Vegetable Salad', image: vegetableSalad },
    { name: 'Beef Burger', image: beefBurger },
    { name: 'Spaghetti Carbonara', image: spaghettiCarbonara },
    { name: 'Margherita Pizza', image: margheritaPizza },
    { name: 'Chocolate Cake', image: chocolateCake },
    { name: 'Seafood Paella', image: seafoodPaella },
  ];

  return (
    <div className="menu-carousel-container">
      <div className="carousel-item-group">
        {menuItems.map((item, idx) => (
          <div key={idx} className="carousel-item-content">
            <img src={item.image} alt={item.name} className="carousel-item-image" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
