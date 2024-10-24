import "./style.css";

export default function WriteEmail() {
  return (
    <>
      <div className="write-email-container">
        <div className="profile-nav">
          <div className="user-img-container"></div>
        </div>

        <div className="input-container">
          <div className="receiver-info">
            <div className="share-icon"></div>

            <p>Student.BooleanAcademy@gmail.com</p>
          </div>

          <textarea name="email-text" id=""></textarea>

          <div className="send-email-actions">
            <button className="send-button">Send</button>

            <button className="others-button"></button>
            <button className="others-button"></button>
            <button className="others-button"></button>
            <button className="others-button"></button>

            <button className="others-button"></button>
            <button className="others-button"></button>
            <button className="others-button"></button>
            <button className="others-button"></button>
          </div>
        </div>
      </div>
    </>
  );
}
