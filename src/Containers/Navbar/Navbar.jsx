import React, { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Nav = props => {
    const { handleSubmit } = props;
    const [showNav, setShowNav] = useState(false);
  
    const toggleNav = () => {
      setShowNav(!showNav);
    };
  
    return (
      <nav className="nav">
        {showNav && <NavMenu toggleNav={toggleNav} handleSubmit={handleSubmit} />}
  
        <h2 className="nav__heading">Punk API Logo</h2>
        <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav} />
        
      </nav>
    );
  };

  export default Nav;