import './styles/App.css'

import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import EmailToolbar from './components/EmailToolbar/EmailToolbar'
import EmailContent from './components/EmailContent/EmailContent'
import SendEmail from './components/SendEmail/SendEmail'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <main className="email-view">
        <EmailToolbar/>
        <EmailContent/>
        <SendEmail/>
      </main>
    </div>
  )
}

export default App
