import React from 'react'
import { faEnvelope, faGlobeAsia, faHospital, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import User from './user.svg';
import './Contact.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Collapse from 'react-bootstrap/Collapse';

function Contact() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className="contact-section">
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div class="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 fw-bold" style={{color:'dark'}}>Contact Us</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

<br />

{/* Submission a Menu script here */}
<div className='contaner '>
        <div className='row'>
             <div className='col'>
                <div className='f-row'>
                   Submit Manuscript
                </div>    
            </div>
        </div>
    <from>    
        <div className='row'>
            <div className='col'>
                <div className='details'>
                   <img className='img' src={User} alt='Editor' width={22} height={22}/>
                   <h2>Auther Details:</h2>
                </div>   
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Auther First Name<sup>*</sup>
                </label>
                      <input type="text" className="form-control" placeholder='Enter First Name'/>             
            </div>
            <div className='col'>
                <label >Auther Last Name<sup>*</sup>
                </label>
                      <input type="text" className="form-control"  placeholder='Enter Last Name'/>
            </div>
            <div className='col'>
                <label >Auther Email<sup>*</sup></label>
                      <input type="email" className="form-control" placeholder='Enter your email'/>
            </div>
        </div>
        <div className='row'>
           <div className='col'>
                <label >Alterrnate Email<sup>*</sup></label>
                      <input type="email" className="form-control" placeholder='Alternate email'/>
            </div>
            <div className='col'>
                <label >Phone Number<sup>*</sup></label>
                      <input type="text" className="form-control" placeholder='Phone number'/>
            </div>
            <div className='col'>
                <label >Choose Your Region<sup>*</sup></label>
                      <select  className="form-select" placeholder='Choose your region'>
                           <option>..Select Your Region--</option>
                           <option>..Select Your Region</option>
                           <option>..Select Your Region</option>
                      </select>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <div className='details'>
                    <i class="bi bi-file-earmark-richtext-fill"></i>
                    <h2>Manuscript Details:</h2>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Title<sup>*</sup></label>
                      <input type="text" class="form-control" placeholder='Enter your title'/>
            </div>
            <div className='col'>
                <label>Article Type<sup>*</sup></label>
                    <select  className="form-select" >
                    <option>..Select Article Type </option>
                    <option>..Select Article Type </option>
                    <option>..Select Article Type </option>
                </select>
            </div>  
        </div>     
        <div className='row'>    
            <div className='col'>
                <label>Issue Type<sup>*</sup></label>
                    <select  className="form-select">
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    </select>
            </div>
            <div className='col'>
                      <label >Special Issue Title<sup>*</sup></label>
                      <input type="text" class="form-control"  placeholder='Enter your title'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
            <label>Classifications <sup>(optional)</sup></label>
                    <select  className="form-select">
                    <option>..Select Classification--</option>
                    <option>..Select Issue Type </option>
                    <option>..Select Issue Type </option>
                    </select>
            </div>
            <div className='col'>
                <label >Suggest Classification<span> [if Classification is not found in the above list]</span></label>
                      <input type="text" class="form-control" placeholder='Enter your classification'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label >Same thing*</label>
                      <textarea className="form-control" />
            </div>
            <div className='col'>
                <label >Key Word*</label>
                      <textarea className="form-control" placeholder='Enter related keywords'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
                <input type="file" className="form-control"/>
            </div>
                <div className='col'>
                <button class="btn btn-danger" >Add More +</button>
                </div>
            {/* <div className='col'>
            </div> */}
            </div>   
        <div className='row'>
            <div className='col-5'>
              <p><b>Note: </b> If you want to uplud more file please chlick on Add More button</p>
            </div>
            <div className='col'>
            </div>
            <div className='col'>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <button onClick={{}} className='btn btn-warning'>Submit Manuscript</button>
            </div>
        </div>
        </from>
    </div>
<br/>
<br/>

<Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Contact US For More
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <body className='container-fluid' >
            
            {/* Contact Details Section */}
    <div className="contact-form my-5 ">
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-3">
                    <h4 className="">Contact Information:</h4>
                    <div className="address border-0 border-bottom mt-4 ">
                        <h6><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faHospital} />Quds Publication House</h6>
                        {/* <h6 className="mx-5"></h6> */}
                        {/* <p className="mx-5 text-secondary">Dhaka, Bangladesh</p> */}
                    </div>
                    <div className="address border-0 border-bottom my-1">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faPhone} />+92 3189050346</h5>
                        <p className="mx-5 text-secondary">24/7 hours</p>
                    </div>
                    <div className="address border-0 border-bottom">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faEnvelope} />For Inquiry:</h5>
                        <p className="mx-5 text-secondary">info@qudspub.com</p>
                    </div>
                    <div className="address border-0 border-bottom">
                        <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faGlobeAsia} />qudspublisher@gmail.com</h5>
                        
                        <p className="mx-5 text-secondary">Send us your query anytime!</p>
                    </div>
                </div>  
                {/* contact form section */}
                <div className="col-md-6 p-3">
                    <h4 className="">Get in Touch</h4>
                    <div className="input-group mt-4">
                        <input className="form-control border-0 border-bottom me-3" placeholder="Your Name *" type="text" />
                        <input className="form-control border-0 border-bottom me-3" placeholder="Email *" type="text" />
                    </div>
                    <div className="input-group my-4">
                        <input className="form-control border-0 border-bottom me-3" placeholder="phone *" type="text" />
                        <input className="form-control border-0 border-bottom me-3" placeholder="Subject" type="text" />
                    </div>

                    <div className="input-group my-4">
                        <textarea className="form-control" placeholder="Massage *" name="" id="" style={{ height: '150px' }}></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-danger fw-bold">Send Us</button>
                    </div>
                </div>
            </div>   
        </div>
    </div>

            </body>
          </div>
        </Collapse>
      </div>

   
</div>
<br />
    
</>
  )
}

export default Contact