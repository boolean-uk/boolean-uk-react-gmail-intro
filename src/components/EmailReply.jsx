import '../styles/EmailReply.css'
import underlineA from '../assets/icons/underline-a.png'
import dotsHorizontal from '../assets/icons/dots-horizontal.png'
import avatar from '../assets/icons/avatar.png'
import attachClip from '../assets/icons/attach-clip.png'
import attachPicture from '../assets/icons/attach-picture.png'
import dotsVertical from '../assets/icons/dots-vertical.png'
import emoji from '../assets/icons/emoji.png'
import googleDrive from '../assets/icons/google-drive.png'
import link from '../assets/icons/link.png'
import lockTimer from '../assets/icons/lock-timer.png'
import newWindow from '../assets/icons/new-window.png'
import pen from '../assets/icons/pen.png'
import trashBin from '../assets/icons/trash-bin.png'
import backArrow from '../assets/icons/back-arrow.png'

function EmailReply() {
    return (
        <>
            <div className="reply-main">
                <div className="reply-avatar">
                    <img className="reply-avatar-icon" src={avatar}></img>
                </div>
                <div className="reply-box">
                    <div className="reply-header">
                        <div className="reply-header-left">
                            <img className="reply-icon" src={backArrow}></img>
                            <p className="reply-header-email">▼ Freepik Company (no-reply@freepik.com)</p>
                        </div>
                        <div className="reply-header-right">
                            <img className="reply-icon" src={newWindow}></img>
                        </div>
                    </div>
                    <div className="reply-message">
                        <textarea className="reply-message-content"></textarea>
                    </div>
                    <div className="reply-dots">
                        <img className="reply-dots-horizontal" src={dotsHorizontal}></img>
                    </div>
                    <div className="reply-botter">
                        <div className="reply-botter-send">
                            <button className="reply-botter-send-button">Send</button>
                            <button className="reply-botter-down-button">▼</button>
                        </div>
                        <div className="reply-botter-icons">
                            <img className="reply-botter-icon" src={underlineA}></img>
                            <img className="reply-botter-icon" src={attachClip}></img>
                            <img className="reply-botter-icon" src={link}></img>
                            <img className="reply-botter-icon" src={emoji}></img>
                            <img className="reply-botter-icon" src={googleDrive}></img>
                            <img className="reply-botter-icon" src={attachPicture}></img>
                            <img className="reply-botter-icon" src={lockTimer}></img>
                            <img className="reply-botter-icon" src={pen}></img>
                        </div>
                        <div className="reply-botter-right">
                            <img className="reply-icon" src={dotsVertical}></img>
                            <img className="reply-icon" src={trashBin}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailReply