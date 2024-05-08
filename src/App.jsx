import './styles/App.css'

import Header from './Header'
import NavLeftMenu from './NavLeftMenu'
import MainContent from './MainContent'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <NavLeftMenu></NavLeftMenu>
      <MainContent></MainContent>
    </div>
  )
}

export default App
