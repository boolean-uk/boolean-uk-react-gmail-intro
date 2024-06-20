import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailView from './components/EmailView';
import EmailActions from './components/EmailActions';
import WriteEmail from './components/WriteEmail';

const App = () => (
  <div className="app">
    <Header />
    <div className="main-content">
      <Sidebar />
      <div className="emails">
        <EmailList />
        <EmailView />
        <EmailActions />
        <WriteEmail />
      </div>
    </div>
  </div>
);

export default App;
