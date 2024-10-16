import  { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="container container-header">
        <a href="#" className="logo">YourCompany</a>
        <nav className={`header_nav ${isActive ? 'active' : ''}`}>
          <a href="#" className="nav_link" onClick={toggleMenu}>Home</a>
          <a href="#" className="nav_link" onClick={toggleMenu}>Our Company</a>
          <a href="#" className="nav_link" onClick={toggleMenu}>Services</a>
          <a href="#" className="nav_link" onClick={toggleMenu}>Contact</a>
        </nav>
        <div className={`menu-toggle ${isActive ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
