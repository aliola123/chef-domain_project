import { useState } from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaHome } from 'react-icons/fa';
import '../App.css/Contact.css';

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
      <section className="contact-info-section">
        <h2>Our Contact Information</h2>
        <p><FaHome /> <strong>Address:</strong> 123 Chef Domain Avenue, Maryland, Lagos, Nigeria</p>
        <p><FaMapMarkerAlt /> <strong>Location:</strong> Maryland, Lagos</p>
        <p><FaWhatsapp /> <strong>WhatsApp:</strong> <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer">+234 123 456 7890</a></p>
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
