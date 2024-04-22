import './styles/App.css'
import './styles/Header.css'
import './styles/LeftMenu.css'
import './styles/MainContent.css'
import './styles/WriteEmailSection.css'

import Header from './Header'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'
import WriteEmailSection from './WriteEmailComponents/WriteEmailSection'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainContent />
      <WriteEmailSection />
      </div>
  )
}

export default App
