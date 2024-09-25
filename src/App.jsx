import "./styles/App.css";

import HeaderComponent from "./components/HeaderComponent";
import ToolbarButtonComponent from "./components/ToolbarButtonComponent";
import SearchBar from "./components/SearchBarComponent";
import NavBarLeft from "./components/NavBarLeftComponent";
import EmailBody from "./components/EmailBodyComponent";
import ReplyComponent from "./components/ReplyComponent";
import EmailHeaderComponent from "./components/EmailHeaderComponent";
import EmaiIcons from "./components/EmailActionIconsComponent";
import EmailTitle from "./components/EmailTitleComponent";

function App() {
  return (
    <div className="app">
      <header className="header">
        <HeaderComponent></HeaderComponent>
        <SearchBar></SearchBar>
      </header>
      <NavBarLeft></NavBarLeft>
      <main className="email-view">
        <ToolbarButtonComponent></ToolbarButtonComponent>
        <article className="email-content">
          <EmailTitle></EmailTitle>
          <header className="email-content--header">
            <EmailHeaderComponent></EmailHeaderComponent>
            <EmaiIcons></EmaiIcons>
          </header>
          <EmailBody></EmailBody>
          <ReplyComponent></ReplyComponent>
        </article>
      </main>
    </div>
  );
}

export default App;
