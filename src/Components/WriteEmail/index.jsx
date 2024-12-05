import backArrow from "/src/assets/icons/back-arrow.png";
import newWindow from "/src/assets/icons/open-in-new-window.png";
import allIcons from "/src/assets/icons/all_buttons.png";
import deleteButton from "/src/assets/icons/rubbish-bin-delete-button.png";
import "/src/styles/WriteEmail.css";

function WriteEmail() {
  return (
    <div className="write-email">
      <div className="avatar"></div>
      <div className="box">
        <div className="header">
          <img className="icon" src={backArrow} alt="reply button" />
          <select className="drop-down-symbol"></select>
          <p className="sender">
            Freepik Company &#40;no-reply@freepik.com&#41;
          </p>
          <img
            className="icon"
            src={newWindow}
            alt="open in new window button"
          />
        </div>
        <textarea className="email-input">...</textarea>
        <div className="footer">
          <section className="buttons">
            <button className="btn">Send</button>
          </section>
          <img className="all-buttons" src={allIcons} alt="buttons" />
          <img className="icon" src={deleteButton} alt="delete button" />
        </div>
      </div>
    </div>
  );
}

export default WriteEmail;
