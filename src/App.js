import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Mainpage from './Components/Section/MainPage';

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
    <>
    <BrowserRouter>
 

      <Nav />
    
        <Routes>
          <Route  path="/" exact Component={Mainpage} />
          <Route  path="/home" Component={Home} />
          <Route  path="/service"  Component={Service} />
          <Route  path="/team" Component={Team} />
          <Route  path="/collaborative"  Component={Collaboratives} />
          <Route  path="/ُevents"  Component={Events} />
          <Route  path="/project"  Component={Project} />
          <Route  path="/about" Component={About} />
          <Route  path="/contact"  Component={Contact} />
        </Routes>

      <Footer />  

    </BrowserRouter>
    </>
  );
}

export default App;

