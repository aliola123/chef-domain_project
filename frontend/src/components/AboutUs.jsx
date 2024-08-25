import { useEffect } from 'react';
import '../App.css/About.css';
import visionImage from './images/chef-domain chef.jpg';

const AboutUs = () => {
  useEffect(() => {
    
    document.body.classList.add('about-page');

    
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  return (
    <div className="about-us">
      <h1>About Chef Domain</h1>

      <section className="vision-mission">
        <div className="vision">
          <img src={visionImage} alt="Vision" className="about-image" />
          <h2>Our Vision</h2>
          <p>
            At Chef Domain, our vision is to be the leading provider of African
            culinary experiences worldwide. We aim to introduce the rich and
            diverse flavors of Africa to every corner of the globe, ensuring
            that everyone can enjoy authentic, high-quality African delicacies
            wherever they are.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver exceptional culinary services that capture
            the essence of African cuisine. We are committed to using the
            freshest ingredients, time-honored recipes, and innovative
            techniques to create dishes that delight and satisfy our customers.
            We strive to provide an unforgettable dining experience that
            combines tradition with modern culinary practices.
          </p>
        </div>
      </section>

      <section className="core-values">
        <h2>Core Values</h2>
        <ul>
          <li>
            <strong>Excellence:</strong> We are dedicated to delivering the
            highest quality in every dish we prepare.
          </li>
          <li>
            <strong>Authenticity:</strong> We honor the traditions of African
            cuisine, preserving its unique flavors and cultural significance.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace creativity in our culinary
            practices, always exploring new ways to present and enhance our
            dishes.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> Our customers are at the
            heart of everything we do, and we are committed to exceeding their
            expectations.
          </li>
          <li>
            <strong>Community:</strong> We believe in giving back and supporting
            the communities that inspire our cuisine.
          </li>
        </ul>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>
          Chef Domain offers a wide range of services designed to meet the
          diverse needs of our clients:
        </p>
        <ul>
          <li>Customized catering for events of all sizes</li>
          <li>Private dining experiences</li>
          <li>Meal prep and delivery services</li>
          <li>Cooking classes and culinary workshops</li>
          <li>Exclusive recipes and culinary tips on our website</li>
        </ul>
      </section>

      <section className="cuisine">
        <h2>Exquisite African Delicacies</h2>
        <p>
          Our menu features a rich selection of traditional and modern African
          dishes, meticulously crafted to bring out the best flavors of the
          continent. From spicy West African stews to flavorful East African
          grills, each dish is a celebration of Africa&apos;s diverse culinary
          heritage.
        </p>
        <p>
          We source our ingredients from trusted suppliers who share our
          commitment to quality and sustainability. Whether you&apos;re looking
          for a taste of home or an introduction to African cuisine, Chef Domain
          is your go-to destination for authentic and delicious meals.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
