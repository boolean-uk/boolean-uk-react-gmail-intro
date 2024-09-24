import  { useState } from 'react';

const WriteEmail = () => {
  const [emailBody, setEmailBody] = useState('');

  const handleSendEmail = () => {
    console.log('Email sent:', emailBody);
  };

  return (
    <div className="email-form">
      <textarea
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        placeholder="Write your email here..."
      />
      <button onClick={handleSendEmail}>Send</button>
    </div>
  );
};

export default WriteEmail;