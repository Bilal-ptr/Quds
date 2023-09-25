import './Nav.css'
import icon from '../../img/favicon.png'
function Nav() {
    return (
      <div> 
        <header id="header" className=" ">
    <div className="">

<nav className="navbar">
      <div className="navbar-logo">
        <img src={icon} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">We Offer</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Contact</a></li>

      </ul>
    </nav>

    </div>
  </header>
  {/* svgXtraDoc = d.contentDocument.documentElement;  */}
       </div>
    )
  }
  
  export default Nav;
  