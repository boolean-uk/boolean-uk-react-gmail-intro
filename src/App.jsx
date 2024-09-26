import './styles/App.css'
import TopHeaderComponent from './Components/TopHeaderComponent'
import MenuComponent from './Components/MenuComponent'
import ToolbarComponent from './Components/ToolbarComponent'
import EmailContentComponent from './Components/EmailContentComponent'

function App() {
  return (
    <div className="app">
      <TopHeaderComponent/>
      <MenuComponent/>
      <main className="email-view">
        <ToolbarComponent/>
        <EmailContentComponent/>
      </main>
    </div>
  )
}

export default App
