import './styles/App.css';
import Header from './Header'
import EmailContent from './EmailContent'
import Leftmenu from './Leftmenu';
import EmailToolbar from './EmailToolbar';
function App() {
  return (
    <div className="app">
      <Header/>
      <Leftmenu/>
      <EmailToolbar/>
      <EmailContent/>
    </div>
  )
}

export default App
