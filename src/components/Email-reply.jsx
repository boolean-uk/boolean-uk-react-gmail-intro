import '../styles/stylesheets/EmailReply.css'

function EmailReply() {
    return (
    <div className="reply-box">
        <div className="reply-header">
            <h2>Reply</h2>
            <button>Close</button>
        </div>
        <div className="reply-body">
            <textarea placeholder="Write your reply..."></textarea>
        </div>
        <div className="reply-footer">
            <button>Send</button>
        </div>
    </div>
    )
}

export default EmailReply;