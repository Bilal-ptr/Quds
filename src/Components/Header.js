import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
// import "./Nav";

import logo from "../img/testimonials/favicon.png";

const Header = () => {
  return (
    <nav className="flex navbar navbar-expand-lg bg-body-tertiary text-uppercase">
      <div className="container-fluid flex navbar navbar-expand-lg bg-body-tertiary">
        <div className="row">
          <div className="col-4 text-center">
            <Link to="/" className="navbar-brand">
              <img src={{ logo }} alt="Logo" />
            </Link>
          
          </div>
          <div
            className="col-8 collapse navbar-collapse bg-color text-sm-end text-md-end text-lg-end text-xl-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li
                className="nav-item dropdown dropdown-toggle dark"
                data-bs-theme="dark"
                id="dropdownMenuButtonDark"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Link to="/team" className="nav-link ">
                  Team
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButtonDark"
                  >
                    <li>
                      <Link class="dropdown-item active" to="#">
                        Team
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <Link class="dropdown-item" to="#">
                       Collaboratives
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                      Events
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Project Gallery
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/project" className="nav-link">
                  Project
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
