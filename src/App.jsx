import './styles/App.css'

import HeaderComponent from './components/Header/Header.component.jsx'
import NavComponent from './components/Nav/Nav.component.jsx'
import EmailComponent from './components/Email/Email.component.jsx'

function App() {
  return (
    <div className="app">
      <HeaderComponent/>
      <NavComponent/>
      <EmailComponent/>
    </div>
  )
}

export default App