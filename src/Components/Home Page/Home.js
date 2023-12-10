import React from "react";
import "./Home.css";
import '../../index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import CarouselLogo from "../Service/CarouselLogo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imageData, responsive } from "../Service/data";
import { Card, Col, Container, Row } from 'react-bootstrap';


export const Home = () =>{
  const logo = imageData.map((item) => (
    <CarouselLogo
      name={item.name}
      url={item.imageurl}
    />
  ));
  return (
      <>
      {/* -----------Title Bar Start------------------------- */}
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div className="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 mt-5 fw-bold" style={{color:'black', fontFamily:'fantasy'}}>Home</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    {/* ---------------Titel Bar End --------------------------- */}
  


   {/* Welcome section */}
        <div className="welcome">
            <Container className="py-5 border-bottom border-danger">
                <Row className="">
                    {/*  welcome text  */}
                    <Col sm={12} md={6}>
                    <div className="m-3">
                        <h5 className="text-danger fw-normal">Welcome to your</h5>
                        <h1 className="fw-bold">HEART CARE</h1>
                        <p className="fst-italic fw-light">The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <p className="fst-italic fw-light">Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <h3 className="fw-normal">Monayem Khan</h3>
                        <h6 className="fst-italic"> <span className="text-danger">Heart Care</span> Hospital</h6>
                    </div>
                    </Col>

                     {/* welcome image  */}
                    <Col sm={12} md={6}>
                        <Card className="m-3 border border-4">
                            <Card.Body>
                                <Card.Img variant="top" src="https://i.ibb.co/6tcpLzg/welcome.jpg" />   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      <div id="hero">
        <div className="container">
          <div className="icon-container">
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">Journals</Link>
              </h3>
            </div>
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">Publishing House</Link>
              </h3>
            </div>
            <div className="icon-box">
              <i className="bi bi-card-icon"></i>
              <h3>
                <Link to="#">In-silico Servics</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      
<hr className="divider" />
      <div className="container-fluid p-5 g-2">
        <h1 className="text-center" style={{color:'goldenrod'}}>Our Trusted Clients</h1>
        <Carousel  showDots={true} responsive={responsive} transition="slide 3s">
          {logo}
        </Carousel>
      </div>
    
<hr className="divider" />
    {/* ------------------ Service Card layout Start --------------------- */}
<div className="card-group justify-content-center pt-5 p-5 bg-black rounded">
  <div className="col">
    <div className="card rounded-5"> 
    <div className="icon"><i className="fa fas-dribbble"></i></div>
      <img src="../../img/download.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text bin to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{/* ------------------------------------------------------------ */}


{/* -------------------------- Second Group Services --------------------------------- */}
<div className="card-group bg-black p-5 rounded-bottom">
  <div className="col">
    <div className="card rounded-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

<hr className="divider" />



    
    
    
    

    </>
  );
}


