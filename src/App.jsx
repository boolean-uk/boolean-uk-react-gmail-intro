import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import EmailToolbar from './components/emailToolbar'
import EmailContent from './components/EmailContent'


function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <main className="email-view">
        <EmailToolbar/>
        <EmailContent/>
      </main>
    </div>
  )
}

export default App