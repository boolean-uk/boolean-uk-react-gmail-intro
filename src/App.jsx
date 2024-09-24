import './styles/App.css'

import Header from './components/header'
import LeftMenu from './components/LeftMenu'
import EmailView from './components/EmailView'
import WriteEmail from './components/WriteEmail'

function App() {
  return (
    <div className="app">
      < Header />
      < LeftMenu />
      < EmailView />
      < WriteEmail />
    </div>
  )
}

export default App;
