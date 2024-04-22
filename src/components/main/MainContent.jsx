import Article from './Article'
import EmailToolbar from './EmailToolbar'

function MainContent() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <Article />
        </main>
    )
}

export default MainContent