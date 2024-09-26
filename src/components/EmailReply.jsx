import '../styles/Reply.css'
import arrow from '../assets/icons/arrow.png'
import corner from '../assets/icons/corner.png'
import dots from '../assets/icons/dots.png'
import face from '../assets/icons/face.png'
import icons from '../assets/icons/icons.png'
import trash from '../assets/icons/trash.png'

function EmailReply() {
    return (
        <>
            <div className='replyMain'>
                <div className='replyAvatar'>
                    <img className='avatarIcon' src={face}></img>
                </div>
                <div className = 'replyBox'>
                    <div className='replyHeader'>
                        <div className='replyHeaderLeft'>
                            <img className='replyIcon' src={arrow}></img>
                            <p className='replyHeaderEmail'>▼ Freepik Company (no-reply@freepik.com)</p>
                        </div>
                        <div className='replyHeaderRight'>
                            <img className='newWindow' src={corner}></img>
                        </div>
                    </div>
                    <div className='replyMessage'>
                        <textarea className='replyWritingArea'></textarea>
                    </div>
                    <div className='replyDots'>
                        <img className='replyDotsLeft' src={dots}></img>
                    </div>
                    <div className='replyBottomLine'>
                        <div className='replySend'>
                            <button className='replySendButton'>Send</button>
                            <button className='replyDownArrow'>▼</button>
                        </div>
                        <div className='replyBottomRow'>
                            <img className='replyIconRow' src={icons}></img>
                        </div>
                        <div className='replyRightBottomCorner'>
                            <img className='trash' src = {trash}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailReply