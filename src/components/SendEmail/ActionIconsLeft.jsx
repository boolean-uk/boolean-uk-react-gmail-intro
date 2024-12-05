import attachFile from "../../assets/icons/attach-file.png";
import emoji from "../../assets/icons/emoji.png";
import googleDrive from "../../assets/icons/google-drive.png";
import image from "../../assets/icons/image.png";
import pen from "../../assets/icons/pen.png";

const ActionIconsLeft = () => {
  return (
    <div className="action-icons-left">
      <img src={attachFile} alt="Attach File" className="icon" />
      <img src={emoji} alt="Emoji" className="icon" />
      <img src={googleDrive} alt="Google Drive" className="icon" />
      <img src={image} alt="Image" className="icon" />
      <img src={pen} alt="Pen" className="icon" />
    </div>
  );
}

export default ActionIconsLeft;
