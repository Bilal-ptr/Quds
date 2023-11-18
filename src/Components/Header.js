import React from "react";
import "../App.css";
import "./Nav";
import logo from "../img/testimonials/favicon.png";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const toggleNav = () => {
  //   setIsNavExpanded((prev) => !prev);
  // };

  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const toggleNav = () => {
  //   setIsNavExpanded(!isNavExpanded);
  // };
  return (
    <>
 {/* Navigation bar start */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-uppercase fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-center">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-12 col-md-8 ">
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
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link">
                    Service
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/team"
                    className="nav-link dropdown-toggle dark"
                    data-bs-toggle="dropdown"
                  >
                    Team
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item active" to="/team">
                        Team
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Collaboratives
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Events
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Project Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/project" className="nav-link">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>,
    <br/>

 
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary text-uppercase fixed-top">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 text-center">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="col-12 col-md-8 " >
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavExpanded}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div
            className={`collapse navbar-collapse nav ${
              isNavExpanded ? 'show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/team"
                  className="nav-link dropdown-toggle dark"
                  data-bs-toggle="dropdown"
                  data-bs-target="#teamDropdown"
                  aria-controls="teamDropdown"
                  aria-expanded={isNavExpanded}
                >
                  Team
                </Link>
                <ul
                  className={`dropdown-menu ${
                    isNavExpanded ? 'show' : ''
                  }`}
                  id="teamDropdown"
                  aria-labelledby="teamDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Collaboratives
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Events
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Project Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav> */}
  </>
  );
};

export default Header;
