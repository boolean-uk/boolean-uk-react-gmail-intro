//import './styles/App.css'
import './styles/base.css'
import './styles/toolbar.css'
import './styles/layout.css'
import './styles/sidebar.css'
import './styles/content.css'
import './styles/header.css'
import './styles/actions.css'
import './styles/body.css'
import './styles/emailReply.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

const RenderEmailToolbar = () => {
  return (
    <nav className="email-toolbar">
        <ul>
          <li>
            <img className="icon" src={backArrow} alt="reply button" />
          </li>
          <li>
            <img className="icon" src={downloadButton} alt="archive button" />
          </li>
          <li>
            <img className="icon" src={rubbishButton} alt="delete button" />
          </li>
        </ul>
        <div className="space"></div>
        <div>
          <p>1 of 25</p>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </nav>
  )
}

const RenderIcon = ({ src, alt }) => {
  return (
    <img 
      className="icon" 
      src={src} 
      alt={alt} 
    />
  )
}

const RenderEmailContent = () => {
  return (
    <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            <div className="email-action-icons">
              <ul>
                <li>
                  <RenderIcon src={backArrow} alt={"reply button"}/>
                </li>
                <li>
                  <RenderIcon src={rateStarButton}alt={"star button"}/>
                </li>
                <li>
                  <RenderIcon src={rubbishButton} alt={"delete button"}/>
                </li>
              </ul>
            </div>
          </header>
          <ul className = "horizontal-list">
            <RenderEmailBody/>
            <RenderEmailReply/>
          </ul>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
  )
}

const RenderEmailBody = () => {
  return (
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  )
}

const RenderEmailReply = () => {
  return (
    <div className="email-container">
      <div className="email-header">
          <input type="text" className="recipient-input" placeholder="Recipients"></input>
      </div>
      <div className="text-body">
          <textarea className="email-textarea" placeholder="Compose your email"></textarea>
      </div>
      <div className="email-footer">
          <button className="send-button">Send</button>
          <button className="formatting-button">A</button>
          <button className="attach-button">&#128206;</button>
          <button className="link-button">&#128279;</button>
          <button className="emoji-button">&#128578;</button>
          <button className="image-button">&#128247;</button>
      </div>
    </div>
  )
}

const RenderSidebar = () => {
  return (
    <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">3</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">2</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
          </li>
        </ul>
      </nav>
  )
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>
        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      </header>
      <RenderSidebar/>
      <main className="email-view">
        <RenderEmailToolbar/>
        <RenderEmailContent/>
      </main>
    </div>
  )
}

export default App
