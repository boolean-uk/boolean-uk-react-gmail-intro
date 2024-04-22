import HeaderLeftMenu from "./HeaderLeftMenu"
import Search from "./Search"

function Header() {
    return (
        <header className="header">
            <HeaderLeftMenu />
            <Search />
        </header>
    )
}

export default Header