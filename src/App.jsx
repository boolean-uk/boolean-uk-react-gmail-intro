import './styles/App.css'
import Header from './components/header'
import LeftMenu from './components/leftMenu'
import EmailContent from './components/emailContent'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailContent/> 
    </div>
  )
}

export default App
