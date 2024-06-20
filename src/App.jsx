import "./styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import EmailToolbar from "./EmailToolbar";
import EmailContent from "./EmailContent";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    </div>
  );
}

export default App;
