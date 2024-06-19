import React from "react";
import "./WriteEmail.css";

const WriteEmail = () => {
  return (
    <div className="write-email">
      <h2>New Email</h2>
      <form>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input type="email" id="to" name="to" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="10" required></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">Send</button>
          <button type="reset">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default WriteEmail;
