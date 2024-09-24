import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './SendEmail.css';
import profilePicture from '../../assets/icons/profile-picture.png';
import backArrow from '../../assets/icons/back-arrow.png';
import arrowDown from '../../assets/icons/down-arrow.png';
import shareIcon from '../../assets/icons/share.png';
import attachFile from '../../assets/icons/attach-file.png';
import emoji from '../../assets/icons/emoji.png';
import googleDrive from '../../assets/icons/google-drive.png';
import image from '../../assets/icons/image.png';
import pen from '../../assets/icons/pen.png';
import dots from '../../assets/icons/dots.png';
import trash from '../../assets/icons/rubbish-bin-delete-button.png';
import dotsVert from '../../assets/icons/dots-vert.png';


const SendEmail = () => {
  return (
    <div className="send-email-container">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="send-email">
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
        <div className="dots-vert-icon">
          <img src={dotsVert} alt="More Options" className="icon" />
        </div>
        <div className="send-email-actions">
          <button>
            Send <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faPaperPlane} />
          </button>
          <div className="action-icons-left">
            <img src={attachFile} alt="Attach File" className="icon" />
            <img src={emoji} alt="Emoji" className="icon" />
            <img src={googleDrive} alt="Google Drive" className="icon" />
            <img src={image} alt="Image" className="icon" />
            <img src={pen} alt="Pen" className="icon" />
          </div>
          <div className="action-icons-right">
            <img src={dots} alt="More Options" className="icon" />
            <img src={trash} alt="Delete" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;