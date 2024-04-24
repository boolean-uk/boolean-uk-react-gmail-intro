

import LeftMenu from './LeftMenu.jsx'
import SearchBar from './SearchBar.jsx'


function header() {
    return (
        <header className="header">
            <LeftMenu />
            <SearchBar />
        </header>
    )
}

export default header