import React from "react";
// import '../Home Page/Home.css'
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Home Page/Home";
import "./Main.css";
import '../../index.css'
import Clientsec from "./Clientsec";
import {Row, Col} from 'react-bootstrap';


const Default = () => {
  return (
    <>
    <div className="inner-banner img-bg">
        <div className="overlay ">
            <div class="container py-5">
                <Row className="text-center">
                    <Col className="py-5">
                        <h1 className="fs-1 fw-bold" style={{color:'dark'}}>Quds Publisher's</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    
  
      {/* <div className="container-fluid p-5 m-auto">
        <div className="row img-bg mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h2 className="large">Quds Publisher's</h2>
          </div>
        </div> */}

          <div className="row py-3 mt-5">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card upper">
                <div className="card-body upper">
                  <h5 className="card-title">Journals</h5>
                  <p className="card-text">
                    Will be publish Soon.
                  </p>
                  <Link to="#" target="_blank">
                    <button className="btn ">Live Soon</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 ">
              <div className="card upper">
                <div className="card-body upper">
                  <h5 className="card-title">Publishing House</h5>
                  <p className="card-text">
                    Check out services for publication in best
                    jornals.
                  </p>
                  <Link to="https://www.qudspub.com" target="_top">
                    <button className="btn " to="">
                      Visit To Site
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 ">
              <div className="card upper">
                <div className="card-body upper">
                  <h5 className="card-title">In-silico Servics</h5>
                  <p className="card-text">Will be publish Soon.</p>
                  <Link to="#" target="_blank">
                    <button className="btn " to="">
                      Live Soon
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      
      <hr className="red-dark-line"/>
      ,
      <Clientsec />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Default;
