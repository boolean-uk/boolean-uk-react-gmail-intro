import "./style.css"
import backArrow from '../../assets/icons/back-arrow.png'
function Reply(){
    return(
        <nav className="reply">
            <div className="header">
                <img className="icon" src={backArrow} alt="reply button" />
                Freepik Company (no-reply@freepik.com)
            </div>
            <div>
                <textarea className="textarea" rows="5" placeholder="Type your reply here...">
                </textarea>
            </div>
            <div className="section-button">
                <button className="button">Send Reply</button>
            </div>
        </nav>
    )
}

export default Reply