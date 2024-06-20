import React from 'react';
import '../styles/WriteEmail.css';

const WriteEmail = () => (
  <div className="write-email">
    <textarea placeholder="Compose your email..." className="compose-area"></textarea>
    <button className="send-button">Send</button>
  </div>
);

export default WriteEmail;
