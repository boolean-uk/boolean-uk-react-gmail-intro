import './styles/App.css'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
// import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import LeftMenu from './components/LeftMenu'
import Content from './components/Email'

function App() {
  return (
    <div className="app">
     <Header />
      <LeftMenu />
      <main className="email-view">
        <Toolbar />
        <Content />
      </main>
    </div>
  )
}

export default App
