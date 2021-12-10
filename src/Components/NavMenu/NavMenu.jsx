import React from "react";
import "./NavMenu.scss"
import whiteCross from "../../assets/images/white-cross.png";

const NavMenu = props => {
    const { toggleNavMenu } = props;
  
    return (
      <div className="nav-menu">
        <div className="nav-menu__content">
          <img src={whiteCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNavMenu} />
          <input className="nav-menu__search" type="text" name="" id="" />
          <div className="nav-menu__content-check">
            <label htmlFor="">ABV</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">pH</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Classic</label>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
    );
  };

  export default NavMenu;