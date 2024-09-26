import './styles/App.css'
import TopHeaderComponent from './Components/TopHeaderComponent'
import MenuComponent from './Components/MenuComponent'
import ToolbarComponent from './Components/ToolbarComponent'
import EmailContentComponent from './Components/EmailContentComponent'
import WriteEmailComponent from './Components/WriteEmailComponent'

function App() {
  return (
    <div className="app">
      <TopHeaderComponent/>
      <MenuComponent/>
      <main className="email-view">
        <ToolbarComponent/>
        <EmailContentComponent/>
        <WriteEmailComponent/>
      </main>
    </div>
  )
}

export default App
