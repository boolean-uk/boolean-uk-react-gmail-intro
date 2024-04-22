import './styles/App.css'
import Header from './styles/Header'
import Navbar from './styles/Navbar'
import Mainsection from './styles/Mainsection'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function App() {
  return (
    <div className="app">
      
        <Header /> 
        <Navbar />
        <Mainsection/>
    
    </div>
  )
}

export default App
