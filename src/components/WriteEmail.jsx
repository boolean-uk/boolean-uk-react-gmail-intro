import '.././styles/ComposeEmail.css'

function WriteEmail() {
  return (
    <div className="compose-email">
      <div className="compose-header">
        <span>New Email</span>
        <div className="compose-actions">
          <button className="action-btn close">X</button>
        </div>
      </div>
      <div className="compose-recipients">
        <div className="recipient-field">
          <label htmlFor="to">To:</label>
          <input type="email" id="to" name="to" multiple placeholder="Recipients" />
        </div>
      </div>
      <div className="compose-subject">
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" />
      </div>
      <div className="compose-body">
        <textarea id="email-body" name="email-body" placeholder="Compose your email"></textarea>
      </div>
      <div className="compose-footer">
        <button className="send-btn">Send</button>
        <button className="discard-btn">Discard</button>
      </div>
    </div>
  );
}

export default WriteEmail;
