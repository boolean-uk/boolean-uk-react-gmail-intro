import './styles/App.css'

import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Toolbar from "./components/Toolbar.jsx";
import EmailContent from "./components/EmailContent.jsx";
import MuiTextField from "./components/MuiTextField.jsx";

function App() {
  return (
      <div className="app">
        <Header />
        <Navigation />
        <main className="email-view">
          <Toolbar />
          <EmailContent />
          <MuiTextField />
        </main>
      </div>
  )
}

export default App
