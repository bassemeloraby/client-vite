import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around shadow-lg">
      <div className="navbar-left d-sm-none">
        <Sidebar/>
      </div>
      <div className="navbar-center ">
        <Link to="/">
          <h2>Mederma</h2>
        </Link>
      </div>
      <div className="navbar-right d-none d-sm-block">
        <ul className="d-flex">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
