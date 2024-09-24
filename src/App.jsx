import './styles/App.css'

import Header from './Header.jsx'
import LeftMenu from './LeftMenu.jsx'
import EmailView from './EmailView.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
