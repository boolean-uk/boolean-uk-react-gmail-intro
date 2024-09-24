import '../styles/writeEmail.css';

const WriteEmail = () => {
  return (
    <div className="email-reply-container">
      <div className="email-header">
        <span className="email-recipient">Freepik Company (no-reply@freepik.com)</span>
      </div>
      <div className="email-body">
        <textarea className="email-textarea" placeholder="..."></textarea>
      </div>
      <div className="email-actions">
        <button className="email-send-button">Send</button>
        <div className="email-icons">
          <span className="icon icon-format"></span>
          <span className="icon icon-attachment"></span>
          <span className="icon icon-link"></span>
          <span className="icon icon-emoji"></span>
          <span className="icon icon-more"></span>
        </div>
      </div>
    </div>
  );
};

export default WriteEmail;
