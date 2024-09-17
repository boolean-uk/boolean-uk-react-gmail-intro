import LeftMenu from "./LeftMenu"
import SearchBar from "./Search"
import "./styles.css"

function Header(){
    return(
        <header className="header">
            <LeftMenu /> 
            <SearchBar />
        </header>
    )
}
export default Header