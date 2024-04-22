import "./styles/App.css";
import HeaderElement from "./Header/HeaderElement";
import NavElement from "./NavMenu/NavElement";
import MainElement from "./Main/MainElement";

function App() {
  return (
    <div className="app">
      <HeaderElement />
      <NavElement />
      <MainElement />
    </div>
  );
}

export default App;
