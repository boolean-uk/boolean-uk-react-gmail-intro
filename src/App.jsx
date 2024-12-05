import Header from './Components/Header'
import LeftMenu from './Components/LeftMenu'
import EmailView from './Components/EmailView'
import WriteEmail from './Components/WriteEmail'

import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
      <WriteEmail />
    </div>
  )
}

export default App
