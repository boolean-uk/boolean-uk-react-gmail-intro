import './styles/App.css'
import Header from './header'
import NavLeft from './nav_Left'
import Main from './body'
function App() {
  return (
    <div className="app">
      <Header/>
      <NavLeft/>
      <Main/>
    </div>
  )
}

export default App
