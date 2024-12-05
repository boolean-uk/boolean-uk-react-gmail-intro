
import ContentHeader from './ContentHeader'
import ContentTitle from './ContentTitle'
import ContentBody from './ContentBody'
import ContentActions from './ContentActions'

function EmailContent() {
    return (
        <article className="email-content">
            <ContentTitle />
            <ContentHeader />
            <ContentBody />
            <ContentActions />
        </article>
    )
}

export default EmailContent