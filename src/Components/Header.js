import React from "react";
import "../App.css";
import "./Nav";
import logo from "../img/testimonials/favicon.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const toggleNav = () => {
  //   setIsNavExpanded((prev) => !prev);
  // };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg text-uppercase fixed-top">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <i className="fas fa-code ml-3"></i>
            </span>
            <img src={logo} alt="Logo" className="img" width={42} height={40} />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
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

      {/* <div className="col-12 col-md-4 text-center">
            <NavLink to="/" className="navbar-brand">
            </NavLink>
          </div> */}
      {/* <div className="col-12 col-md-8 ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/service" className="nav-link">
                    Service
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to="/team"
                    className="nav-link dropdown-toggle dark"
                    data-bs-toggle="dropdown"
                  >
                    Team
                  </NavLink>
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
                      <NavLink className="dropdown-item" to="#">
                        Collaboratives
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Events
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Project Gallery
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/project" className="nav-link">
                    Project
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul> */}
    </>
  );
};

export default Header;
