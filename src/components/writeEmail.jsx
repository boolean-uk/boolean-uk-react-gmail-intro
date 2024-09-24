import '../styles/writeEmail.css';
import accountCircle from '../assets/icons/account_circle.png';
import openInNewTab from '../assets/icons/open_in_new.png';
import addToDrive from '../assets/icons/open_in_new.png';
import attachFile from '../assets/icons/attach_file.png';
import imageAdd from '../assets/icons/image_add.png';
import inkPen from '../assets/icons/ink_pen.png';
import link from '../assets/icons/link.png';
import mood from '../assets/icons/mood.png';
import textFormat from '../assets/icons/text_format.png';
import workHistory from '../assets/icons/work_history.png';
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
          <span className="icon icon-format">
          <img className="icon" src={textFormat}/>
          </span>
          <span className="icon icon-attachment">
          <img className="icon" src={attachFile}/>
          </span>
          <span className="icon icon-link">
          <img className="icon" src={link}/>
          </span>
          <span className="icon icon-emoji">
          <img className="icon" src={mood}/>
          </span>
          
          <span className="icon icon-more">
          <img className="icon" src={addToDrive}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WriteEmail;
