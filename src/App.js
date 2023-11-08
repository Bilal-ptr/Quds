import React from 'react';
import { BrowserRouter, Link,  Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';


import Home from './Components/Home Page/Home';
import Service from './Components/Service/Service';
import Team from "./Components/Team/Team";
import Project from "./Components/Project/Project";
import Events from "./Components/Team/Events";
import Collaboratives from './Components/Team/Collaboratives';
import About from ".//Components/About/About";
import Contact from "./Components/Contact/Contact";



function App() {  
  return (
    <><div id="hero">
        
    <div className="container">
  <div className="icon-container">
    <div className="icon-box">
      <i className="bi bi-card-icon"></i>
      <h3><Link to="#">Journals</Link></h3>
    </div>
    <div className="icon-box">
      <i className="bi bi-card-icon"></i>
      <h3><Link to="#">Publishing House
</Link></h3>
    </div>
    <div className="icon-box">
      <i className="bi bi-card-icon"></i>
      <h3><Link to="#">In-silico Servics
</Link></h3>
    </div>
  </div>
  </div>

  </div>
    </>,
    <BrowserRouter>

      <Nav />
    
        <Routes>
          <Route exact  path="/home"  element={<Home/>} />
          <Route exact  path="/service"  element={<Service />} />
          <Route exact  path="/team" element={<Team />} />
          <Route exact  path="/collaborative"  element={<Collaboratives />} />
          <Route exact  path="/ُevents"  element={<Events />} />
          <Route exact  path="/project"  element={<Project />} />
          <Route exact  path="/about" element={<About />} />
          <Route exact  path="/contact"  element={<Contact />} />
        </Routes>

      <Footer />  

    </BrowserRouter>
  );
}

export default App;
