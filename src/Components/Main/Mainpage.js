import React from 'react'
import './Mainpage.css'
import about from '../../img/about.jpg'
import clint1 from '../../img/clients/client-1.png'
import clint2 from '../../img/clients/client-2.png'
import clint3 from '../../img/clients/client-3.png'

function Mainpage() {
  return (
    <>
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={about} class="img-fluid" alt=""/>
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
    {/* <!-- End About Section --> */}
    <section id="clients" class="clients">
      <div class="container" data-aos="zoom-in">

        <div class="clients-slider swiper" >
         <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src={clint1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint2} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint3} class="img-fluid" alt=""/></div>
            {/* <div class="swiper-slide"><img src={clint4} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint5} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint6} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint7} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint8} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={clint9} class="img-fluid" alt=""/></div> */}
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Mainpage