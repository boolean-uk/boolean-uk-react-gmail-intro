import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import EmailToolbar from './components/EmailToolbar'
import EmailContent from './components/EmailContent'

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
    </div>
  )
}

export default App
