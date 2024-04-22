import './styles/App.css'
import Header from './Header'
import Nav from './Nav'
import MainContent from './MainContent'

export default function App() {
  return (
    <div className="app">
      <Header />

      <Nav />
      
      <MainContent />
    </div>
  )
}