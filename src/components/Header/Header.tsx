import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">LIPTEX</div>
        <div className="links">
          <span className="item active">Úvod</span>
          <span className="item">O nás</span>
          <span className="item">Poptávka</span>
        </div>
        <div className="menu">
          <button className="menu--btn">Kontakt</button>
          <div className="toggle-menu"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
