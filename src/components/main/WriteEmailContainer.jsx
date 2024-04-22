import WriteEmailFooter from "./WriteEmailFooter"
import WriteEmailHeader from "./WriteEmailHeader"
import WriteEmailInput from "./WriteEmailInput"

function WriteEmailContainer() {
    return (
        <div className='write-email-container'>
            <WriteEmailHeader />
            <WriteEmailInput />
            <WriteEmailFooter />
        </div>
    )
}

export default WriteEmailContainer