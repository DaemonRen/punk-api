import React, { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";
import NavMenu from "../../Components/NavMenu/NavMenu";

const Nav = props => {
    const { handleSubmit } = props;
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showNav, setShowNav] = useState(true);
  
    const toggleNavMenu = () => {
      setShowNavMenu(!showNavMenu);
      setShowNav(!showNav);
    };
  
    return (
      <div>
        {showNavMenu && <NavMenu toggleNavMenu={toggleNavMenu} handleSubmit={handleSubmit} />}
        {showNav && <nav className="nav">
          <h2 className="nav__heading">Punk API Logo</h2>
          <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNavMenu} />
        </nav>}
      </div>
    );
  };

  export default Nav;