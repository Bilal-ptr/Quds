import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap-icons";

const Clientsec = () => {
  // const image = [
  //   {
      
  //   }
  // ];
  return (
    <>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-60"
               src="../../img/testimonials/testimonials-2.jpg"
              alt="quds publisher"
            
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, at pharetra augue. Donec id elit eget
                nibh et magna faucibus consectetuer. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="../../img/testimonials/testimonials-2.jpg"
              alt="quds publisher"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                Praesent commodo cursus magna, vel semper lacus faucibus sed.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="../../img/testimonials/testimonials-2.jpg"
              alt="quds publisher"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel semper lacus faucibus sed.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <section className="clients">
        <div className="container" data-aos="zoom-in">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75img-fluid"
                src="#"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block justify-content-center w-75 img-fluid"
                src="#"
                alt="Third slide"
              />
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
          </Carousel>
        </div>
      </section>

    </>
  );
};

export default Clientsec;
