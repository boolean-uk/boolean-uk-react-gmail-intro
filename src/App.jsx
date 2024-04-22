import './styles/App.css'
import './styles/Header.css'
import './styles/LeftMenu.css'
import './styles/EmailToolbar.css'
import './styles/EmailMain.css'
import Header from './components/header/Header'
import LeftMenu from './components/aside/LeftMenu'
import MainContent from './components/main/MainContent'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainContent />
    </div>
  )
}

export default App
