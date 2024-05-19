import EmailToolbar from './EmailToolbarComponent'
import EmailContent from './EmailContentComponent'

function EmailView() {
    return (
     <main className="email-view">
          <EmailToolbar />
          <EmailContent/>
      </main>
    )
}

export default EmailView