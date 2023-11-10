import React from 'react'
import './About.css'


function About() {
  return (
    <>
    {/* About Section  */}
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="../../img/about.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Maximize your chances of getting published.</h3>
            <p class="fst-italic">
              Are you tired of receiving constant rejections from journals and paying high APC (article processing charges)? Are you struggling to get your research noticed and published in high-impact journals? Look no further! We are here to help maximize your chances of getting published. Our publication service provides a tailored approach to publishing, ensuring that your research is seen by the right audience and in the right journals. With our years of experience in the publishing industry, we have the expertise to help you craft a compelling manuscript and navigate the complex submission process. Our team of experts is dedicated to providing personalized support, giving your research the best chance of success. Don't let your hard work go unnoticed; choose our publication service and take the first step towards achieving your publishing goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
    
  );
}

export default About;