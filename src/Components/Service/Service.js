import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "react-bootstrap-icons";
import "./Service.css";
import CarouselLogo from "./CarouselLogo";
import { imageData,  responsive } from "./data";
import { Button, Row, Col } from 'react-bootstrap';
// import { Servcard } from '../Section/Servcard';

const Service = () => {
  const [services, setService] = useState([]);
  // using useEffect for data load
  useEffect(() => {
      fetch('./servicesData.json')
      .then(res => res.json())
      .then(data => setService(data))

  }, []);

  const logo = imageData.map((item) => (
    <CarouselLogo
      // name={item.name}
      url={item.imageurl}
      
    />
  ));
  return (
    <>
    {/* Header Layout Page Title */}
   
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div class="container py-5">
                <Row className="text-center">
                    <Col className="py-5">
                        <h1 className="fs-1 fw-bold" style={{color:'red'}}>Our Services</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    {/* services section */}
        <div className="text-center mb-5">
            <div className="mt-5">
                {/* services header */}
                <div className="container">
                    <h3 className="text-danger fw-light">Our Departments</h3>
                    <h1 className="fw-bold">DEPARTMENTAL SERVICES</h1>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    {/* get service by mapping */}
                    <div className="row service-section">
                        {
                            services.map(service => <Service
                            key={service.key}
                            service={service}
                            ></Service>)
                        }
                    </div>
                    <Button variant="outline-danger" className="mt-5 px-5 fw-bold">See All</Button>
                </div>
            </div>
        </div>

    {/* -------------------------------------- */}
    <section id="services" className="services">
      <div className="container-fluid" data-aos="fade-up" style={{ backgroundColor: 'rgb(210, 221, 241)' }}>

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>
        <div className="row">
          {/* Service 1 */}
         
           <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-dribbble"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p>
                Elevate your research to new heights with our peer review
                submission service, where our team of experts provide insightful
                feedback, rigorous evaluation, and unparalleled support to help
                your work stand out in the competitive academic landscape
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-file"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p>
                Transform your writing into a masterpiece with our substantive
                editing service, where our skilled editors delve deep into your
                work, refining your ideas, enhancing your language, and
                elevating your message to captivate and engage your readers like
                never before
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="col-lg-4 col-md-6 d-flex  mt-4 mt-lg-0 " 
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-speedometer"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p className="">
                Unleash the power of research with our top-notch research
                writing services, where our team of experts provide in-depth
                analysis, insightful perspectives, and exceptional writing
                skills to help you make breakthrough discoveries, establish your
                authority, and advance your academic or professional career
              </p>
            </div>
          </div>
          </div>

          {/* Second Row Element */}
        <div className="row">
          {/* Service 1 */}
         
           <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-slideshow"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p>
                Elevate your research to new heights with our peer review
                submission service, where our team of experts provide insightful
                feedback, rigorous evaluation, and unparalleled support to help
                your work stand out in the competitive academic landscape
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-file"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p>
                Transform your writing into a masterpiece with our substantive
                editing service, where our skilled editors delve deep into your
                work, refining your ideas, enhancing your language, and
                elevating your message to captivate and engage your readers like
                never before
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="col-lg-4 col-md-6 d-flex  mt-4 mt-lg-0 " 
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-speedometer"></i>
              </div>
              <h4>
                <a href="/" className="">
                  Live Soon
                </a>
              </h4>
              <p className="">
                Unleash the power of research with our top-notch research
                writing services, where our team of experts provide in-depth
                analysis, insightful perspectives, and exceptional writing
                skills to help you make breakthrough discoveries, establish your
                authority, and advance your academic or professional career
              </p>
            </div>
          </div>

          {/* Add more services as needed */}
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <div className="">
    <h1 style={{color:'goldenrod'}}>Our Trusted Clients</h1>
    <Carousel showDots={true} responsive={responsive}>
      {logo}
    </Carousel>
    </div>

    </>
  );
};

export default Service;





