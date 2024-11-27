

import LeftMenu from './subHeaderComponents/LeftMenu.jsx'
import SearchBar from './subHeaderComponents/SearchBAr.jsx'
import './header.css'


function header() {
    return (
        <header className="header">
            <LeftMenu />
            <SearchBar />
        </header>
    )
}

export default header