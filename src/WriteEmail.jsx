import  { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/write-email.css'; 

const WriteEmail = () => {
  const [emailBody, setEmailBody] = useState('');

  const handleSendEmail = () => {
    console.log('Email sent:', emailBody);
  };

  return (
    <div className="email-form">
      <div className="email-header">
        <span>New Message</span>
        <button className="close-button">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <input type="text" placeholder="To" className="email-to" />
      <input type="text" placeholder="Subject" className="email-subject" />
      <textarea
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        placeholder="Write your email here..."
        className="email-body"
      />
      <div className="email-footer">
        <button className="send-button" onClick={handleSendEmail}>
          Send
        </button>
        <button className="icon-button">
          <i className="fas fa-paperclip"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default WriteEmail;