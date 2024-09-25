import './styles/App.css'

import Header from './jsx_files/Header'
import LeftMenu from './jsx_files/LeftMenu'
import EmailToolbar from './jsx_files/EmailToolbar'
import EmailContent from './jsx_files/EmailContent'

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
