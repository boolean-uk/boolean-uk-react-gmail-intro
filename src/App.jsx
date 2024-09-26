// import './styles/App.css'
import './styles/stylesheets/NewApp.css'
import Header from './components/Header'
import LeftMenu from './components/Left-Menu'
import EmailView from './components/Email-View'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
      <EmailView/>
    </div>
  )
}

export default App
