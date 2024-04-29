import React from 'react';
import './styles/EmailView.css';
import EmailToolbar from './EmailToolbar';
import EmailContent from './EmailContent';

const EmailView = () => {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  );
};

export default EmailView;