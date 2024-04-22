import EmailActions from './EmailActions'
import EmailBody from './EmailBody'
import MainHeader from './MainHeader'
import Title from './Title'

function Article() {
    return (
        <article className="email-content">
            <Title />
            <MainHeader />
            <EmailBody />
            <EmailActions />
        </article>
    )
}

export default Article