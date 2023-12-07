import React from "react";
import "../App.css";
import "./Nav";
import { Link } from "react-router-dom";

import logo from "../img/testimonials/favicon.png";

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            <img src={logo} className="mt-6 pb-2" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <img src={logo} alt="Logo" to="/main" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    Service
                  </Link>
                </li>
                                <li className="nav-item">
                  <Link className="nav-link" to="/project">
                    Project
                  </Link>
                </li>

                <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Team
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Team</Link></li>
            <li><Link className="dropdown-item" to="#">Collaboratives</Link></li>
            <li><Link className="dropdown-item" to="#">Events</Link></li>
            <li><Link className="dropdown-item" to="#">Gallery</Link></li>
          </ul>
        </li>
{/* 
                <li className="nav-item dropdown-center">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/team"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Team
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/collaborative">
                        Collaboratives
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/events">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li> */}

                
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar">          
            <NavLink exact to="" className="nav-logo">
              <img src={logo} alt="Logo" />
           </NavLink>
          
        <ul className={click ? "nav-menu-active" : "nav-menu"}>
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
              to="/team"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Team
              <ul className="">
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
              </ul>
            </NavLink>
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
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}> */}
      {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
      {/* {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
        </div>
      </nav> */}
    </>
  );
};

export default Header;
