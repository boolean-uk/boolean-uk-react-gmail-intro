import './styles/App.css'

import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import EmailToolbar from './components/EmailToolbar.jsx'
import EmailContent from './components/EmailContent.jsx'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>

      <main className="email-view">

        <EmailToolbar/>

        <EmailContent/>
       


      </main>

      
    </div>
  )
}

export default App
