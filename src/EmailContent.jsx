import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'

export default function EmailContent() {
    return (
        <article className="email-content">
            <EmailTitle />
            <EmailHeader />
            <EmailBody />
            <EmailActions/>
        </article>
    )
}