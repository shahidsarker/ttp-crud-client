import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const NavBarView = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/campuses" className="nav-link">
        Campuses
      </Link>
      <Link to="/students" className="nav-link">
        Students
      </Link>
    </Navbar>
  );
};

export default NavBarView;
