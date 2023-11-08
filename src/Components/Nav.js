import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';



const Nav = () => {
  
  return (
    <header>
      <NavLink  to="/" >
           <Header/>
      </NavLink>
    </header>
  
  );
};

export default Nav;





















// import "./Nav.css";
// import "../App.css";
// // import icon from "../../img/favicon.png";
// import { Link, Route, Routes } from "react-router-dom";
// import React from "react";
// import Home from "./Home Page/Home";
// import Contact from "./Contact/Contact";
// import About from "./About/About";
// import Project from "./Project/Project";
// import Team from "./Team/Team";
// import Events from "./Team/Events";

// function Nav(){
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link to="/" className="navbar-brand">Your Company Name</Link>
//     <div className="collapse navbar-collapse" id="navbarNav" >
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/Home" className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/About" className="nav-link">About</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Contact" className="nav-link">Contact</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Service" className="nav-link">Service</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Team" className="nav-link">Team</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/Project" className="nav-link">Project</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Team" element={<Team />} />
//         <Route path="/Events" element={<Events />} />
//         <Route path="/Project" element={<Project />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
   
// </>
//   );
// }

// export default Nav;