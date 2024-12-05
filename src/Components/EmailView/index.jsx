
import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent'

function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <EmailContent />
        </main>
    )
}

export default EmailView