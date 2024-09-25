import EmailToolbar from './EmailToolbar'
import EmailContent from './EmailContent';
import '../stylesheets/email.css'


function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar/>
            <EmailContent/>
      </main>
    )
}

export default EmailView;