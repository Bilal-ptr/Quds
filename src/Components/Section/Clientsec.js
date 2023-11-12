import React from 'react'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'react-bootstrap-icons';


const Clientsec = ( )=>
{
  return (
    

<>

    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-60"
            src="https://picsum.photos/200/300?image=100"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, at pharetra augue. Donec id elit eget nibh et
              magna faucibus consectetuer. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60"
            src="https://picsum.photos/200/300?image=200"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Praesent commodo cursus magna, vel semper lacus faucibus sed. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60"
            src="https://picsum.photos/200/300?image=300"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel semper lacus faucibus sed. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


    <section className="clients">
      <div className="container" data-aos="zoom-in">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50 img-fluid"
              src="img/clients/client-1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 img-fluid"
              src="img/clients/client-2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 img-fluid"
              src="img/clients/client-3.png"
              alt="Third slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>
    </section>

 
    {/* <section  className="clients">
      <div className="container" data-aos="zoom-in">

        <div className="clients-slider swiper" >
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src="../../img/clients/client-1.png" classNameName="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-2.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-3.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-4.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-5.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-6.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-7.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-8.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="../../img/clients/client-9.png" className="img-fluid" alt="" /></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section> */}
     {/* End Clients Section  */}

</>   
  )
  };

export default Clientsec