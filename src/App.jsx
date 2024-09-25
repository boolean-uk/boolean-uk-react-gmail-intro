
import './styles/App.css';
import Header from './Header';
import  { LeftMenuNavigation } from './LeftMenu'
import EmailContent from'./emailcontent'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenuNavigation />
      <main className="main-container">
        <EmailContent />
      </main>
    </div>
  );
}

export default App;
