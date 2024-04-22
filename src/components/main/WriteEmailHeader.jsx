import replyIcon from '../../assets/icons/reply.svg'
import downArrowIcon from '../../assets/icons/down-arrow.svg'
import newTabIcon from '../../assets/icons/new-tab.svg'

function WriteEmailHeader() {
    return (
        <div className="write-email-header">
            <img src={replyIcon} alt="Reply icon" />
            <img src={downArrowIcon} alt="Down arrow icon" />
            <p>Freepik Company &#40;no-reply&#64;freepik.com&#41;</p>
            <img src={newTabIcon} alt="Open in new tab icon" />
        </div>
    )
}

export default WriteEmailHeader