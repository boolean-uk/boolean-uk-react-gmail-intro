import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const backArrowUrl = new URL('../assets/icons/back-arrow.png', import.meta.url).href;
  const searchIconUrl = new URL('../assets/icons/image.png', import.meta.url).href;

  return (
    <div className="header">
      <div className="left-menu">
        <img src={backArrowUrl} alt="Back" className="menu-icon" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search mail" className="search-bar" />
        <img src={searchIconUrl} alt="Search" className="search-icon" />
      </div>
    </div>
  );
};

export default Header;
