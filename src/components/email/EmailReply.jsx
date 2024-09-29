import "../../styles/EmailReply.css"
import binIcon from '../../assets/icons/bin.svg'
import driveIcon from '../../assets/icons/drive.svg'
import imageIcon from '../../assets/icons/image.svg'
import inkPenIcon from '../../assets/icons/inkPen.svg'
import lockIcon from '../../assets/icons/lockClock.svg'
import linkIcon from '../../assets/icons/link.svg'
import morehorIcon from '../../assets/icons/morehor.svg'
import paperclipIcon from '../../assets/icons/paperclip.svg'
import replyIcon from '../../assets/icons/reply.svg'
import smileIcon from '../../assets/icons/smile.svg'
import underlineIcon from '../../assets/icons/underline.svg'
import accountIcon from '../../assets/icons/account.svg'
  
function EmailReply() {
  return(
    <div className="email-reply">
    <div className="user-info">
      <div className="avatar"></div>
      <img className="icon" src={replyIcon} />
      <div className="email">Nigel (nigel@gmail.com)</div>
    </div>
    <textarea className="email-input-field"></textarea>
    <div className="actions">
      <button className="send-button">Send</button>
      <div className="icon-group">
        <img className="icon" src={underlineIcon}/>
        <img className="icon" src={paperclipIcon}/>
        <img className="icon" src={linkIcon}/>
        <img className="icon" src={smileIcon}/>
        <img className="icon" src={driveIcon}/>
        <img className="icon" src={imageIcon}/>
        <img className="icon" src={lockIcon}/>
        <img className="icon" src={inkPenIcon}/>
      </div>
      <div className="right-icons">
        <img className="icon" src={morehorIcon} />
        <img className="icon" src={binIcon}/>
      </div>
    </div>
  </div>
  )
}

export default EmailReply