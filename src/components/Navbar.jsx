import React from "react";
import "boxicons";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import whiteLogo from "../assets/whitelogo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="navbar-left">
          <div className="logo-container">
            <Link to="/">
              <img src={whiteLogo} className="logo-icon"></img>
            </Link>
          </div>
          <Searchbar />
        </div>

        <div className="navbar-right">
          <div className="nav-link links">
            <Link to="/explore">Explore</Link>
          </div>
          <div className="nav-link links">
            <Link to="/about">About</Link>
          </div>
          <div className="user-icon-container links">
            <i className="bx bxs-user user-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
