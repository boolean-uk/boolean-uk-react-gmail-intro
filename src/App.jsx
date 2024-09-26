import './styles/App.css'
import './styles/LeftMenu.css';
import './styles/SearchBar.css';
import './styles/Toolbar.css';
import './styles/EmailContent.css';
import './styles/Header.css';



import InboxList from './components/InboxList'
import SearchBar from './components/SearchBar'
import LeftMenu from './components/LeftMenu'
import EmailToolbar from './components/EmailToolbar'
import EmailContent from './components/EmailContent'

function App() {
  return (
    <div className="app">
      <header className="header">
        <LeftMenu />
        <SearchBar />
      </header>
      <InboxList />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  );
}

export default App
