import HeaderLeftMenu from './HeaderLeftMenu'
import SearchBar from './SearchBar'

export default function Header () {
    return (
        <header className="header">
          <HeaderLeftMenu />
          <SearchBar />
      </header>
    )
}