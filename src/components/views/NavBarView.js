import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/campuses" className="nav-link">
        Campuses
      </Link>
    </nav>
  );
};

export default NavBarView;
