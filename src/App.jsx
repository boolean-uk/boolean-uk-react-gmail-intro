import "./styles/App.css";
import Header from "./components/Header/Header";
import LeftNavMenu from "./components/LeftNav/LeftNavMenu";
import Toolbar from "./components/EmailContent/Toolbar";
import EmailContent from "./components/EmailContent/EmailContent";
import WriteEmail from "./components/WriteEmail";

function App() {
  return (
    <div className="app">
      <Header />

      <LeftNavMenu />

      <main className="email-view">
        <Toolbar />
        <EmailContent />
        <WriteEmail />
      </main>
    </div>
  );
}

export default App;
