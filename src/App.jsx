import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import Header from './header'
import LeftMenu from './left-menu'
import Toolbar from './email_toolbar'
import EHeader from './EHeader'
import EBody from './EBody'
import EActions from './EActions'
import Title from './title'

function App() {
  return (
    <div className="app">
      
      <Header />
      <LeftMenu />
      <main className="email-view">
        <Toolbar />
        <article className="email-content">
          <Title/>
          <EHeader />
          <EBody />
          <EActions />
        </article>
      </main>
    </div>
  )
}

export default App
