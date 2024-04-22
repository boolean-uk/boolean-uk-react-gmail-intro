import './styles/App.css'
import "./styles/emailToolbar.css"

import Header from "./Header.jsx"
import LeftMenu from './LeftMenu.jsx'
import MainContent from './MainContent'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <MainContent></MainContent>   
      
    </div>
  )
}

export default App
