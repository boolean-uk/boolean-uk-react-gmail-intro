import './styles/App.css'
import './styles/Header.css'
import './styles/LeftMenu.css'
import './styles/MailToolbar.css'
import './styles/Title.css'
import './styles/MailContent.css'


import Header from './Header'
import LeftBar from './LeftBar'
import MainContent from './MainContent'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftBar />
      <MainContent />
    </div>
  )
}

export default App
