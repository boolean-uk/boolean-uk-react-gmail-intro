import backArrow from "../../assets/icons/back-arrow.png";
import arrowDown from "../../assets/icons/down-arrow.png";
import shareIcon from "../../assets/icons/share.png";

const SendHeader = () => {
  return (
    <div className="send-email-header">
      <div className="left-icons">
        <img src={backArrow} alt="Back" className="icon" />
        <img src={arrowDown} alt="Arrow Down" className="icon" />
        <div className="sender-info">
          <h2>Freepik Company</h2>
          <em>(no-reply@freepik.com)</em>
        </div>
      </div>
      <div className="share-icon">
        <img src={shareIcon} alt="Share" className="icon" />
      </div>
    </div>
  );
};

export default SendHeader;
