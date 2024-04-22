import EmailToolbar from "./EmailToolbar.jsx"
import EmailContent from "./EmailContent.jsx"

function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar/>
            <EmailContent/>
        </main>
    )
}

export default EmailView
