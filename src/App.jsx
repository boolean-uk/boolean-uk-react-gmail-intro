import Header from './components/common/Header'
import Navigation from './components/common/Navigation'
import MainContent from './components/common/MainContent'

import './styles/App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainContent />
    </div>
  )
}

export default App
