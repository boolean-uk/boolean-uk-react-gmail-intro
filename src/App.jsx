import './styles/App.css'
import "./styles/Header.css"
import "./styles/EmailContent.css"
import "./styles/EmailToolbar.css"
import "./styles/LeftMenu.css"
import "./styles/Title.css"
import "./styles/Reply.css"

import HeaderComponent from './components/HeaderComponent'
import NavComponent from './components/NavComponent'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="app">
      <HeaderComponent/>
      <NavComponent/>
      <MainComponent/>

      
    </div>
  )
}

export default App
