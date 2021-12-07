import React, { useState } from "react";
import "./Nav.scss";

const Nav = props => {
    const { handleSubmit } = props;
    const [showNav, setShowNav] = useState(false);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
    };
  
    const toggleNav = () => {
      setShowNav(!showNav);
    };
  
    return (
      <nav className="nav">
        {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit}/>}
        {showNav && <NavMenu toggleNav={toggleNav} />}
  
        <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav} />
        <h2 className="nav__heading">Punk Api</h2>
      </nav>
    );
  };