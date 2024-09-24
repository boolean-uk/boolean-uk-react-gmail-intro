import EmailActions from './email-actions'
import EmailBody from './email-body'
import EmailHeader from './email-header'
import EmailToolbar from './email-toolbar'
import "../styles/EmailContent.css"

export default function EmailContent() {
  return <main className="email-view">
    <EmailToolbar />

    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>

      <EmailHeader />
      <EmailBody />
      <EmailActions />
    </article>
  </main>
}
