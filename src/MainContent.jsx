import EmailToolbar from './mainComponents/EmailToolbar'
import EmailContent from './mainComponents/EmailContent'

export default function MainContent () {
    return (
        <main className="email-view">
        <EmailToolbar></EmailToolbar>
        <EmailContent></EmailContent>
        
      </main>
    )
}