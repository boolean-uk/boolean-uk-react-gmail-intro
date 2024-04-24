import Title from './Title.jsx'
import ArticleHeader from './ArticleHeader.jsx'
import EmailBody from './EmailBody.jsx'
import EmailActions from './EmailActions.jsx'


function article() {
    return (
        <article className="email-content">
            <Title />
            <ArticleHeader />
            <EmailBody />
            <EmailActions />
        </article>
    )
}

export default article