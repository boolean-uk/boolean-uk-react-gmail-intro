import EmailActions from './EmailActions'
import EmailBody from './EmailBody'
import MainHeader from './MainHeader'
import Title from './Title'
import WriteEmails from './WriteEmails'

function Article() {
    return (
        <article className="email-content">
            <Title />
            <MainHeader />
            <EmailBody />
            <EmailActions />
            <WriteEmails />
        </article>
    )
}

export default Article