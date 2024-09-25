import './styles/App.css'

import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import EmailView from './components/EmailView.jsx'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailView/>
    </div>
  )
}

export default App
