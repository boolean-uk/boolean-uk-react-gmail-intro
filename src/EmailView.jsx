import EmailToolbar from "./EmailToolbar.jsx"
import EmailContent from "./EmailContent.jsx"
import WriteEmail from "./WriteEmail.jsx"


function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar/>
            <EmailContent/>
            <WriteEmail/>
        </main>
    )
}

export default EmailView
