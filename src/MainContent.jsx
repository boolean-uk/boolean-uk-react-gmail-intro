import { EmailToolBar } from './EmailToolBar'
import { EmailContent } from './EmailContent'

export default function MainContent() {
    return (
        <main className="email-view">
            <EmailToolBar />

            <EmailContent />
        </main>
    )
}