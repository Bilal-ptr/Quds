import React from 'react'
import  './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import AOS from 'aos';

function Home() {
  return (
    
    <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">
  
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1 style={{ color: 'yellowgreen', padding: '30px' }}>Quds Publisher<span style={{ color: 'yellowgreen' }}>'s</span></h1>
          <h2 style={{ padding: '0px 100px' }}>
            <div>We excel at guiding researchers towards successful publication in prestigious journals. With our expertise in various indexing systems (Elsvair, Frontiers, Scopus, WOS) and recognition from esteemed bodies (HJRS, UGC, JCR), we ensure your work receives the visibility and recognition it deserves.</div>
          </h2>
        </div>
      </div>
  
      {/* Move the icon section below the paragraph section */}
      <div className="row gy-4 mt-5 icon justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-facebook"></i>
            <h3><a href="https://web.facebook.com/profile.php?id=100091503754228">facebook</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-instagram"></i>
            <h3><a href="https://instagram.com/qudspublisher?igshid=MzNlNGNkZWQ4Mg==">instagram</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-linkedin"></i>
            <h3><a href="https://www.linkedin.com/in/quds-publisher-8885b8277/">linkedin</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-twitter"></i>
            <h3><a href="https://twitter.com/QudsPublisher">twitter</a></h3>
            {/* <!-- <i className="bi bi-facebook"></i></a> --> */}
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="bi bi-envelope-open"></i>
            <h3><a href="https://www.qudspublisher@gmail.com">mail</a></h3>
          </div>
        </div>
      

      </div>
  
    </div>
  </section>
  
    
    
    )
}

export default Home