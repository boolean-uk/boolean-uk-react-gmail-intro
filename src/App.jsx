import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import EmailToolbar from './components/EmailToolbar'
import EmailContent from './components/EmailContent'
import EmailReply from './components/EmailReply'

// Email View
function EmailView() {
  return (
    <>
    <main className="email-view">
    <EmailToolbar />
    <EmailContent />
    </main>
    </>
  )
}

// Full Application
function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
      <EmailReply />
    </div>
  )
}

export default App
