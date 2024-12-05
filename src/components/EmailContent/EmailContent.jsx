import './EmailContent.css'
import EmailHeader from './EmailHeader';
import EmailBody from './EmailBody';

const EmailContent = () => (
  <article className="email-content">
    <div className="title">
      <h1>Welcome to Flaticon</h1>
    </div>
    <EmailHeader />
    <EmailBody />
  </article>
);

export default EmailContent;