import "./Header.css";
import MenuIcon from "./MenuIcon";
import HeaderLogo from "./HeaderLogo";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="header">
        <div className="left-menu">
          <MenuIcon />
          <HeaderLogo />
        </div>
        <SearchBar />
      </header>
    );
};

export default Header;