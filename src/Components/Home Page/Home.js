import React from 'react'
import './Home.css'
import './team.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import AOS from 'aos';

function Home() {
  return (


    <div>

      {/* Create div for frame bg */}

      <div id="hero">
        {/* Controll all layout design */}

        <div class="container">
          {/* Sub container controll  */}
          <div class="icon-container">
            {/* Cpntainer 1 */}
            <div class="icon-box">
              <i class="bi bi-card-icon"></i>
              <h3 className='jour'><a href="#">Journals</a></h3>
              <div className='card-banner'>
                <h1 className='darklight pt-3 pb-3'>Will be publish Soon</h1>
              </div>
            </div>

            {/* Container 2 */}
            <div class="icon-box">
              <i class="bi bi-card-icon"></i>
              <h3><a href="https://qudspub.com/">Publishing House
              </a></h3>
              <div className='card-banner'>
                <h1>Check out serveses for publication in best Q1 and Q2 jornals</h1>
              </div>
            </div>

            {/* Container 3 */}
            <div class="icon-box">
              <i class="bi bi-card-icon"></i>
              <h3><a href="#">In-silico Servics</a></h3>
              <div className='card-banner'>
                <h1 className='darklight pt-3 pb-3'>Will be publish Soon</h1>
              </div>
            </div>
            {/* End of container 3 */}

          </div>
          {/* End of whole frame controller */}
        </div>
        {/* End of bf frame */}
      </div>
{/* End Of fisrt banner  */}


{/* /* Team member cards  */ }
 <div id="login-container">
  <div class="profile-img"></div>
  <h1>
    Maddie
  </h1>
  <div class="description">
    Maddie is a front end web developer in New York. She has worked in the field for 10 years now. Check out her projects in the links below. She is available for hire as well.
  </div>
  <div class="social">
    <a>GitHub</a>
    <a>Twitter</a>
    <a>LinkedIn</a>
  </div>
  <button>Hire Me</button>
  <footer>
    <div class="likes">
      <p><i class='fa fa-heart'></i></p>
      <p>1.5K</p>
    </div>
    <div class="projects">
      <p>Projects</p>
      <p>154</p>
    </div>
  </footer>
</div>

{/*  end Team Member Cards*/}

      {/* <div className='team-card'> */}

        {/* <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn">Know More</a>
          </div>
        </div>
               </div> 
              */}

</div>


  




    // {/* <section id="hero" className="d-flex align-items-center justify-content-center">
    // <div className="container" data-aos="fade-up"> */}
    //   {/* Move the icon section below the paragraph section */}
    // {/* <div className="row gy-4 mt-5 icon justify-content-center" data-aos="zoom-in" data-aos-delay="280">
    //   <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-facebook"></i>
    //         <h3><a href="https://web.facebook.com/profile.php?id=100091503754228">facebook</a></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-instagram"></i>
    //         <h3><a href="https://instagram.com/qudspublisher?igshid=MzNlNGNkZWQ4Mg==">instagram</a></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-linkedin"></i>
    //         <h3><a href="https://www.linkedin.com/in/quds-publisher-8885b8277/">linkedin</a></h3>
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-twitter"></i>
    //         <h3><a href="https://twitter.com/QudsPublisher">twitter</a></h3>
    //         <i className="bi bi-facebook"></i></a> 
    //       </div>
    //     </div>
    //     <div className="col-xl-2 col-md-4">
    //       <div className="icon-box">
    //         <i className="bi bi-envelope-open"></i>
    //         <h3><a href="https://www.qudspublisher@gmail.com">mail</a></h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>


  )
}

export default Home