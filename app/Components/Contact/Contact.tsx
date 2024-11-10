// ContactPage.tsx
import React from "react";
import "./ContactPage.css"; // Import the custom CSS file

const ContactPage: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-wrapper">
          <h1 className="contact-title">Get in Touch</h1>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-textarea"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="button-container">
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
