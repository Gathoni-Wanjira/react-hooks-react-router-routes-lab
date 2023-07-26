import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return <div>
    <NavLink>
                <Link to = '/'>Home</Link>
    </NavLink>
    <NavLink to="/movies" >
        Movies
      </NavLink>
      <NavLink to="/directors" >
        Directors
      </NavLink>
      <NavLink to="/actors" >
        Actors
      </NavLink>
  </div>;
}

export default NavBar;
