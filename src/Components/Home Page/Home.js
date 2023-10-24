import React from 'react'
import './Home.css'
// import './team.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
  return (


    <>

      {/* Create div for frame bg */}

      <div id="hero">
        {/* Controll all layout design */}

        <div class="container">
          {/* Sub container controll  */}
          <div class="icon-container">
            {/* Cpntainer 1 */}
            <div class="icon-box">
              <i class="bi bi-card-icon"></i>
              <h3>Journals</h3>
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
             <span>In-silico Servics</span>
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



</>
  )
}

export default Home