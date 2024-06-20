import React from "react";
import "./styles/App.css";
import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import Header from "./components/header";
import Sidebar from "./SidebaarComponents/Sidebar";
import EmailToolbarComponent from "./EmailToolbarComponent/EmailToolbar";
import EmailContent from "./EmailContentComponent/EmailContent";
import WriteEmail from "./components/WriteEmail";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="email-view">
        <EmailToolbarComponent />
        <EmailContent />
        <WriteEmail />
      </main>
    </div>
  );
}

export default App;
