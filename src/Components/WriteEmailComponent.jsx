import "../styles/email-content.css";
import "../styles/write-email.css";
import backArrow from "../assets/icons/back-arrow.png";

function WriteEmailComponent() {
  return (
    <header className="write-email--header">
      <div className="avatar"></div>
      <div className="write-email">
        <div className="email-info">
          <div className="sender-info">
            <div className="email-action-icons">
              <img className="icon" src={backArrow} alt="reply button" />
              <h2>Freepik Company</h2>
              <em>(no-reply@freepik.com)</em>
            </div>
          </div>
        </div>
        <nav className="write-email">
            <input></input>
            <button className="send-button">Send</button>
        </nav>
      </div>
    </header>
  );
}

export default WriteEmailComponent;
