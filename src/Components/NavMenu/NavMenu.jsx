import React from "react";
import "./NavMenu.scss"
import blackCross from "../../assets/images/black-cross.png";

const NavMenu = props => {
    const { toggleNav } = props;
  
    return (
      <div className="nav-menu">
        <div className="nav-menu__content">
          <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />
          <p>Search bar</p>
        </div>
      </div>
    );
  };

  export default NavMenu;