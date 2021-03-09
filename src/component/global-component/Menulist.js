import React from "react";
import { NavLink } from "react-router-dom";

const Menulist = ({ handleClick }) => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          activeClassName="activeMenu"
          onClick={handleClick}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeMenu" onClick={handleClick} to="/men">
          Men
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeMenu" onClick={handleClick} to="/women">
          Women
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeMenu" onClick={handleClick} to="/kids">
          Kids
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="activeMenu"
          onClick={handleClick}
          to="/homeandLiving"
        >
          Home & Living
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeMenu" onClick={handleClick} to="/offer">
          Offer
        </NavLink>
      </li>
    </ul>
  );
};

export default Menulist;
