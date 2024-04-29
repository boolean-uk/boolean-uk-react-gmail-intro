import React from 'react';
import './styles/Header.css';
import LeftMenu from './LeftMenu';
import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <LeftMenu />
      <Search />
    </header>
  );
};

export default Header;