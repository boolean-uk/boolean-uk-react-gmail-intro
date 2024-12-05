import './styles/App.css'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import MainContent from './components/main/MainContent.jsx'




function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <MainContent />  
    </div>
  )
}

export default App
