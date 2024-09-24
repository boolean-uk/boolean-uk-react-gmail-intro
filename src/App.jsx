import './styles/App.css'
import Header from './components/Header/Header'
import LeftNavMenu from './components/LeftNav/LeftNavMenu'
import Toolbar from './components/EmailContent/Toolbar'
import EmailContent from './components/EmailContent/EmailContent'

function App() {
  return (
    <div className="app">
      <Header />
      
      <LeftNavMenu />

      <main className="email-view">
        <Toolbar />
        <EmailContent/>
      </main>
    </div>
  )
}

export default App
