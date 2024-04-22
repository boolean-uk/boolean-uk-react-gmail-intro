import './styles/App.css'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Header searchPlaceHolder='search for mail...' />
      <Navigation />
      <Main />
    </div>
  )
}

export default App
