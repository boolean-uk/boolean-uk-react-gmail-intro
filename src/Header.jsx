import './styles/Header.css'
import { HeaderMenu } from "./HeaderMenu"
import { SearchBar } from "./SearchBar"

export default function Header() {
    return (
        <header className="header">
            <HeaderMenu />

            <SearchBar />
        </header>
    )
}