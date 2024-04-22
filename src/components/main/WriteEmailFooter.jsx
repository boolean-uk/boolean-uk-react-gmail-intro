import downarrowIcon from '../../assets/icons/down-arrow.svg'

function WriteEmailFooter() {
    return (
        <div className="write-email-footer">
            <button>
                Send
                <img src={downarrowIcon} alt="Down arrow icon" />
            </button>
        </div>
    )
}

export default WriteEmailFooter