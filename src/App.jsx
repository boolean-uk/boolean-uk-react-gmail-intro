import './styles/App.css';
import Header from './Header'
import Toolbar from './Toolbar'
import EmailContent from './EmailContent'
import Leftmenu from './Leftmenu';
function App() {
  return (
    <div className="app">
      <Header/>
      <Leftmenu/>
      <Toolbar/>
      <EmailContent/>
    </div>
  )
}

export default App
