import './styles/App.css'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import EmailContent from './components/EmailContent'

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
