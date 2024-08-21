import { useState } from 'react';
import '../App.css/Contact.css';

const Contact = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can trigger the function that sends the feedback to the backend
    // This function will be handled by the backend team using Express.js
    setFeedback(''); // Clear the feedback input after submission
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <section className="creators-section">
        <h2>Meet the Creators</h2>
        <ul>
          <li>Emmanuel Edem</li>
          <li>Didi Ifeoma</li>
          <li>Moses</li>
          <li>Chapa</li>
        </ul>
      </section>
      <section className="feedback-section">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            rows="5"
            placeholder="Leave your feedback here..."
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
