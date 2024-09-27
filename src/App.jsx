import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import EmailToolbar from './components/EmailToolbar';
import EmailContent from './components/EmailContent';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  );
}

export default App;
