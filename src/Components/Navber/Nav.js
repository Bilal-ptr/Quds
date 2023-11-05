import "./Nav.css";
import "../../App.css";
// import icon from "../../img/favicon.png";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Home Page/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
// import Project from "../Project/Project";
// import Team from "../Team/Team";
// import Events from "../Team/Events";

// function Nav() {
//   return (
//     <div className="App" id="header">
//       <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={icon} alt="Logo" />
//       </div>
//         {/* <ul className="navbar-menu"> */}
//           <Link to="/" class="">
//             Home
//           </Link>
//           <Link to="./About" class="">
//             About
//           </Link>
//           <Link to="./Events" class="">
//             Events
//           </Link>
//           <Link to="/Team" class="">
//             Team
//           </Link>
//           <Link to="/Project" class="">
//             Project
//           </Link>
//           <Link to="/Contact" class="">
//             Contact
//           </Link>
//         {/* </ul> */}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Team" element={<Team />} />
//         <Route path="/Events" element={<Events />} />
//         <Route path="/Project" element={<Project />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </div>

//   );
// }

// export default Nav;

import { Component } from "react";
import {
  Navbar,
  // NavDropdown,
  // Form,
  // FormControl,
  // Button,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Routes path="/about">
              <About />
            </Routes>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
