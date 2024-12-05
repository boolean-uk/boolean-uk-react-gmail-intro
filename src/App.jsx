import './styles/App.css'
import Header from './Components/Header/Header.jsx'
import LeftMenu from './Components/Left-Menu/Left-Menu.jsx'
import Main from './Components/Main/MainBody.jsx'


function App() {
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <Main></Main>
    </div>
  )
}

export default App
