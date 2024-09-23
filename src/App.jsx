import React from 'react'
import EmailView from './components/EmailView'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import EmailSender from './components/EmailSender'
import './styles/App.css'


function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <main className="email-view">
        <EmailView />
        <EmailSender />
      </main>
    </div>
  );
}

export default App
