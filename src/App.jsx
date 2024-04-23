import './styles/App.css'
import EmailView from './EmailView.jsx'
import Header from './Header.jsx'
import LeftMenu from './LeftMenu.jsx'

function App() {
  return (
    <div className="app">
      <Header />
        
      <LeftMenu/>
      
      <EmailView/>
    </div>
  )
}

export default App
