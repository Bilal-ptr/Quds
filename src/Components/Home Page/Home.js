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


function Home() {
  const logo = imageData.map((item) => (
    <CarouselLogo
      name={item.name}
      url={item.imageurl}
    />
  ));
  return (
      <>
    <div className="inner-banner img-bg">
        <div className="overlay">
            <div class="container py-3">
                <Row className="text-center">
                    <Col className="py-4">
                        <h1 className="fs-1 fw-bold" style={{color:'dark'}}>Home</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    
  
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
      ,
      <br />
      <br />
      <br />
      <div className="">
        <h1>React multi carousel</h1>
        <Carousel showDots={true} responsive={responsive}>
          {logo}
        </Carousel>
      </div>
    </>

    // <section id="hero" className="d-flex align-items-center justify-content-center">
    // <div className="container" data-aos="fade-up">
    //   {/* Move the icon section below the paragraph section */}
    //   <div className="row gy-4 mt-5 icon justify-content-center" data-aos="zoom-in" data-aos-delay="280">
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-facebook"></i>
    //         <h3><Link to="https://web.facebook.com/profile.php?id=100091503754228">facebook</Link></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-instagram"></i>
    //         <h3><Link to="https://instagram.com/qudspublisher?igshid=MzNlNGNkZWQ4Mg==">instagram</Link></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-linkedin"></i>
    //         <h3><Link to="https://www.linkedin.com/in/quds-publisher-8885b8277/">linkedin</Link></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-twitter"></i>
    //         <h3><Link to="https://twitter.com/QudsPublisher">twitter</Link></h3>
    //         {/* <!-- <i className="bi bi-facebook"></i></Link> --> */}
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-envelope-open"></i>
    //         <h3><Link to="https://www.qudspublisher@gmail.com">mail</Link></h3>
    //       </div>
    //     </div>

    //   </div>

    // </div>
    // </section>
  );
}

export default Home;
