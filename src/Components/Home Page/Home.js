import React from 'react'
import  './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
// import AOS from 'aos';

function Home() {
  return (


<>
<div id="hero">
    <div class="container">
      
    

 

  <div class="icon-container">
    <div class="icon-box">
      <i class="bi bi-card-icon"></i>
      <h3><Link to="#">Journals</Link></h3>
    </div>
    <div class="icon-box">
      <i class="bi bi-card-icon"></i>
      <h3><Link to="#">Publishing House
</Link></h3>
    </div>
    <div class="icon-box">
      <i class="bi bi-card-icon"></i>
      <h3><Link to="#">In-silico Servics
</Link></h3>
    </div>
  </div>
  </div>
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
  
    
    
    )
}

export default Home