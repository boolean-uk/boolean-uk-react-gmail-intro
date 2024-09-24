import Header from './components/header'
import NavBar from './components/navbar'
import EmailContent from './components/email-content'
import './styles/App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <EmailContent />
    </div>
  )
}
