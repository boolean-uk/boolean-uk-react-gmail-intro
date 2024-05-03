import './styles/App.css';
import Header from './Header';
import Leftmenu from './Leftmenu';
import MainEmailView from './MainEmailView';

function App() {
  return (
    <div className="app">
      <Header />
      <Leftmenu />
      <MainEmailView />
    </div>
  );
}

export default App;