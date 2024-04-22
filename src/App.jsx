import './styles/App.css';
import Header from './Header';
import LeftMenu from './LeftMenu';
import EmailView from './EmailView';

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  );
}

export default App;