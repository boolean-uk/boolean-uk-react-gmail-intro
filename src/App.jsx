import "./styles/App.css";

import Header from "./Header";
import LeftMenu from "./Left-Menu";
import MainEmail from "./MainEmail";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainEmail />
    </div>
  );
}

export default App;
