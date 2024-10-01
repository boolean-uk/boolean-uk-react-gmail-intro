import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import Menu from './components/menu'
import Left_Menu from './components/left_menu'
import Email_Toolbar from './components/email-toolbar'
import Title from './components/email_title'
import Email_Info from './components/email_info'
import Time from './components/time_and_date'
import Email_Actions from './components/email_actions'
import Email_Content from './components/email_content'
import Email_Actions2 from './components/email_actions2'

function App() {
  return (
    <div className="app">
      <Menu/>
      <Left_Menu/>
      <main className="email-view">
        <Email_Toolbar/>
        <article className="email-content">
          <Title/>
          <header className="email-content--header">
            <div className="avatar"></div>
            <Email_Info/>
            <Time/>
            <Email_Actions/>
          </header>
          <Email_Content/>
          <Email_Actions2/>
        </article>
      </main>
    </div>
  )
}

export default App
