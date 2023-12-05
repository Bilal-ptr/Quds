import React from "react";
import "../App.css";
import "./Nav";
import logo from "../img/testimonials/favicon.png";
// import { useState } from "react";
// import { NavDropdown, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-expand-lg text-uppercase fixed-top">
        <div className="nav-container">
          <NavLink exact to="/main" className="nav-logo">
            <span className="icon">
              <i className="fas fa-code ml-3"></i>
            </span>
            <img src={logo} alt="Logo" className="img" width={42} height={40} />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Project
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/team"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleClick}
              >
                Team
              </NavLink>
              {click && (
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item active" to="/team">
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Collaboratives">
                      Collaboratives
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/events">
                      Events
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Humburg Open & Closing */}

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
