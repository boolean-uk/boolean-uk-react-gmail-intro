import EmailToolbar from "./email/EmailToolbar"
import EmailHeader from "./email/EmailHeader"
import EmailBody from "./email/EmailBody"
import EmailActions from "./email/EmailActions"
import '../styles/Email.css'
import EmailReply from "./email/EmailReply"

function EmailView() {
    return (
        <main className="email-view">
        <EmailToolbar />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
        <EmailHeader />
        <EmailBody />
        <EmailActions />
        <EmailReply />
        </article>
      </main>
    )
}

export default EmailView