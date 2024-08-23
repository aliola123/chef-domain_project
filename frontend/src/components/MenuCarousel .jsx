import '../App.css/MenuCarousel.css';
import { Carousel } from 'react-bootstrap';

// Import your images
import grilledChicken from './images/Fries.jpg-1724251508173.jpg';
import vegetableSalad from './images/chef-domain chef.jpg';
import beefBurger from './images/chef-domain chef.jpg';
import spaghettiCarbonara from './images/chef-domain chef.jpg';
import margheritaPizza from './images/chef-domain chef.jpg';
import chocolateCake from './images/chef-domain chef.jpg';
import seafoodPaella from './images/chef-hat-logo-.jpg';

const MenuCarousel = () => {
  const menuItems = [
    { name: 'Grilled Chicken', image: grilledChicken },
    { name: 'Vegetable Salad', image: vegetableSalad },
    { name: 'Beef Burger', image: beefBurger },
    { name: 'Spaghetti Carbonara', image: spaghettiCarbonara },
    { name: 'Margherita Pizza', image: margheritaPizza },
    { name: 'Chocolate Cake', image: chocolateCake },
    { name: 'Seafood Paella', image: seafoodPaella },
  ];

  return (
    <div className="menu-carousel-container">
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        {menuItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-content">
              <img src={item.image} alt={item.name} className="carousel-item-image" />
              <h3>{item.name}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MenuCarousel;
