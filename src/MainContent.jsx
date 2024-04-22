import NavEmailToolbar from './NavEmailToolbar'
import EmailContent from './EmailContent'

export default function MainContent(){
  return (
    <main className="email-view">
      <NavEmailToolbar></NavEmailToolbar>
      <EmailContent></EmailContent>
    </main>
  )
}

