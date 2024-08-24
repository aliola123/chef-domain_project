import '../App.css/MenuCarousel.css';
import { Carousel } from 'react-bootstrap';

// Import your images
import grilledChicken from './images/Fries.jpg-1724251508173.jpg';
import vegetableSalad from './images/chef-domain chef.jpg';
import beefBurger from './images/chef-domain chef.jpg';
import spaghettiCarbonara from './images/chef-domain chef.jpg';
import margheritaPizza from './images/chef-domain chef.jpg';
import chocolateCake from './images/jollof rice 2.jpg';
import seafoodPaella from './images/swallow.jpg';

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

  // Split the items into groups of 3
  const groupedItems = [];
  for (let i = 0; i < menuItems.length; i += 1) {
    groupedItems.push(menuItems.slice(i, i + 3));
  }

  return (
    <div className="menu-carousel-container">
      <Carousel controls={true} indicators={false} interval={null} pause={true}>
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-group">
              {group.map((item, idx) => (
                <div key={idx} className="carousel-item-content">
                  <img src={item.image} alt={item.name} className="carousel-item-image" />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MenuCarousel;
