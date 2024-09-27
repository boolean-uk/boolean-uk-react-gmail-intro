import "../../styles/EmailReply.css";

import backArrow from "../../assets/icons/back-arrow.png";

export default function EmailReply() {
  return (
    <>
      <div className="avatar"></div>
      <div className="email-reply-container">
        <div className="reply-top-div">
          <img className="icon" src={backArrow} alt="reply button" />
          <p>Freepik Company</p>
          <em>&lt;no-reply@freepik.com&gt;</em>
        </div>
        <div>
          <div className="dot-div">...</div>
          <button className="send-button">Send</button>
        </div>
      </div>
    </>
  );
}
