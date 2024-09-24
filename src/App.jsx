import './styles/App.css'
import { Header } from './components/Header'
import { LeftMenu } from './components/LeftMenu'
import { EmailView } from './components/EmailView'

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
