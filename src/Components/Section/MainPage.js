import React from 'react'
// import '../Home Page/Home.css'
import { Link,Route,Routes } from 'react-router-dom';
import Home from '../Home Page/Home';
import './Main.css';
import Clientsec from './Clientsec';


const Default = () => {
  return (
    <>
 <div className='container-fluid p-5 m-auto'>
  <div className='row img-bg pt-5'>
    <div className='col-12 text-center'>
      <h2 className='large'>Quds Publisher's</h2>

    </div>
  </div>
    <div className="row py-3 mt-5 " >
      {/* Card 1 */}
      <div className="col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Journals</h5>
            <p className="card-text align-content-center">Will be publish Soon.</p>
            <Link to= "#" target='_blank'>
          <button className="btn btn-primary">Live Soon</button>
 </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">Publishing
House</h5>
            <p className="card-text">Check out serveses for publication in best Q1 and Q2 jornals.</p>
            <Link to= "https://www.qudspub.com" target='_top'>
            <button className="btn btn-primary" to="">Visit To Site</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">In-silico Servics</h5>
            <p className="card-text">Will be publish Soon.</p>
            <Link to= "#" target='_blank'>
            <button className="btn btn-primary" to="">Live Soon</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>,
    <Clientsec/>
    <Routes>
         <Route path="/home" element={<Home />} />
    </Routes>
    </>
   
  )
}

export default Default