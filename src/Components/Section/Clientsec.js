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
       <Carousel interval={5000} controls indicators>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/team-6.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/team-6.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/team-6.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>

            {/* ----------------Card 5 -------------------------- */}

      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/testimonials-4.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>

            {/* ----------------Card 6 -------------------------- */}

      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/testimonials-5.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>

            {/* ----------------Card 7 -------------------------- */}
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/team-5.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>

      {/* ----------------Card 8 -------------------------- */}
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img
            className="rounded-circle mt-4"
            src="../../img/testimonials/team-6.jpg"
            alt="Person 1"
          />
          <div className="mt-4">
            <h5 className="mb-0">John Doe <span className="text-warning">⭐⭐⭐⭐⭐</span></h5>
            <Carousel.Caption className="text-muted">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
    


    </Carousel>
    </>
  );
};

export default Clientsec;
