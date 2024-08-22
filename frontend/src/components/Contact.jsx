import { useState } from 'react';
import '../App.css/Contact.css';
import emmanuelImage from './images/emmanuel.jpg';
import didiImage from './images/didi.jpg';
import mosesImage from './images/moses.jpg';
import chapaImage from './images/chapa.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = { name, email, feedback };
    console.log(feedbackData);
    setName('');
    setEmail('');
    setFeedback(''); // Clear the form fields after submission
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <section className="creators-section">
        <h2>Meet the Creators</h2>
        <ul>
          <li className="creator">
            <img src={emmanuelImage} alt="Emmanuel Edem" className="creator-image" />
            <div className="creator-info">
              <strong>Emmanuel Edem</strong> - Frontend Engineer
              <p>Emmanuel is the lead frontend engineer with a passion for creating intuitive user interfaces. He specializes in React and ensures that the Chef Domain site is both functional and beautiful.</p>
            </div>
          </li>
          <li className="creator">
            <img src={didiImage} alt="Didi Ifeoma" className="creator-image" />
            <div className="creator-info">
              <strong>Didi Ifeoma</strong> - Backend Engineer
              <p>Didi is responsible for developing the backend architecture of Chef Domain. She works with Node.js and Express.js to ensure the site’s server-side operations are seamless.</p>
            </div>
          </li>
          <li className="creator">
            <img src={mosesImage} alt="Moses" className="creator-image" />
            <div className="creator-info">
              <strong>Moses</strong> - Backend Engineer
              <p>Moses focuses on database management and API development. He ensures that the Chef Domain database is robust and the APIs are efficient.</p>
            </div>
          </li>
          <li className="creator">
            <img src={chapaImage} alt="Chapa" className="creator-image" />
            <div className="creator-info">
              <strong>Chapa</strong> - Backend Engineer
              <p>Chapa is in charge of security and performance optimization. He makes sure that Chef Domain is safe, secure, and fast for all users.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="feedback-section">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              rows="5"
              placeholder="Leave your feedback here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
