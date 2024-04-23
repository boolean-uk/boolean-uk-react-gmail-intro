// === CSS
import "./styles/base/reset.css";
import "./styles/base/typography.css";
import "./styles/components/email/email-content.css";
import "./styles/components/email/email-toolbar.css";
import "./styles/components/header.css";
import "./styles/components/left-menu.css";
// ===
import EmailView from "./components/EmailView/EmailView";
import Header from "./components/Header/Header";
import Nav from "./components/LeftSideNav/Nav";
function App() {
	return (
		<div className="app">
			<Header></Header>
			<Nav></Nav>
			<EmailView></EmailView>
		</div>
	);
}

export default App;
