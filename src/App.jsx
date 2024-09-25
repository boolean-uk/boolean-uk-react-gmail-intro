import './styles/App.css'
import './styles/Email.css'
import Menu_Left from './Menu_Left'
import Search from './Search'
import Navbar from './Navbar'
import Toolbar from './Toolbar'
import Email from './Email'

function App() {
  return (
    <div className="app">
      <header className="header">
        <Menu_Left/>
        <Search/>
      </header>
      <Navbar/>
      <main className="email-view">
        <Toolbar/>
        <Email/>
      </main>
    </div>
  )
}

export default App
