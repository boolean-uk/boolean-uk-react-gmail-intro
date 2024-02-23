//import './styles/App.css'
import { NavLeftMenu, DivLeftMenu } from './components/Menu'
import Search from './components/Search'
import { ArticleEmailContent, NavEmailToolbar } from './components/Email'
import Text from './components/Text'


function App() {
  return (
    <div className="app">
      <header className="header">
        <DivLeftMenu />

        <Search />
      </header>
      <NavLeftMenu />
      <main className="email-view">
      <NavEmailToolbar />  
       <ArticleEmailContent />
      <Text />
      </main>
      
     
      
      
      



    </div>
    
  )
}

export default App
