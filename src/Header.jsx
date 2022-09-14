import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       
            <nav className="navbar navbar-expand-lg bg-white p-2 navtb font-family">
            <div className= "col-sm-11 ">
                <div className="container-fluid ">
                <div className='text-left'>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Link  to="/"className="navbar-brand text-left"> <img alt="img_alt_text" style={{ width:"118px" , height:"69px"}}  src={process.env.PUBLIC_URL + '/image/criluma-logo-mailchimp 1.png'} /></Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link  to="/offer" className="nav-link active p-2">  OFFERS</Link>
            </li>
            <li>

            <Link  to="/incoming"className="nav-link active  p-2"> INCOMING</Link>
            </li>
            <li>

            <Link  to="/wedding" className="nav-link active p-2"> WEDDING</Link>
            </li>
            <li>

            <Link  to="/about-us" className="nav-link active p-2"> ABOUT-US</Link>
            </li> <li>
            <Link  to="/contact" className="nav-link active p-2"> CONTACT</Link>
        
        </li>
      </ul>
      <Link  to="/product" className="nav-link active p-2">  <i className="bi bi-search p-2"></i></Link>

     

     
    </div>
    </div>
                 </div>
            </div>
            <div className='col-sm-1  dCenter ' style={{height:"6.5rem" , background:"#00A6DB"}}>
     <div className="listynone bg-red w-10 h-10  ">
        <li className="nav-item m-auto">
        <Link  to="crilumydestination" className="nav-link active p-2">CRILUMY</Link>

          {/* <a className="nav-link disabled align-middle "></a> */}
        </li>
        </div>
   
            </div>

</nav>

 

            





       
    


    </div>
  
  )
}

export default Header