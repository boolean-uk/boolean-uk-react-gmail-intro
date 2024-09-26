import './styles/App.css'

import LeftMenu from './LeftMenu.jsx'
import Header from './Header.jsx'
import EmailView from './EmailView.jsx'
import EmailAction from './EmailAction.jsx'


function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailView/>
      <EmailAction/>
    </div>
  )
}

export default App
