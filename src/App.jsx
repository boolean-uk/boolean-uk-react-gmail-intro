import './styles/App.css'

import Header from './Header'
import Middle from './Middle'
import LeftMenu from './Middle/LeftMenu'


function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu/>
      <Middle />
    </div>
  )
}

export default App
