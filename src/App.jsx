import './styles/App.css'

import Header from './Components/header.jsx'
import LeftMenu from './Components/leftMenu.jsx'
import MainComponent from './Components/main.jsx'



function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainComponent />
    </div>
  )
}

export default App
