import "./SendEmail.css";
import profilePicture from "../../assets/icons/profile-picture.png";
import SendHeader from "./SendHeader";
import VerticalDots from "./VerticalDots";
import SendActions from "./SendActions";

const SendEmail = () => {
  return (
    <div className="send-email-container">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="send-email">
        <SendHeader />
        <VerticalDots />
        <SendActions />
      </div>
    </div>
  );
};

export default SendEmail;
