import React from 'react';
import './styles/EmailContent.css';
import EmailHeader from './EmailHeader';
import EmailBody from './EmailBody';
import EmailActions from './EmailActions';

const EmailContent = () => {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
};

export default EmailContent;