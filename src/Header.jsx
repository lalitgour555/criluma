import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       
            <nav class="navbar navbar-expand-lg bg-white p-2 navtb font-family">
            <div className= "col-sm-11 ">
                <div class="container-fluid ">
                <div className='text-left'>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <Link  to="/"className="navbar-brand text-left"> <img style={{ width:"118px" , height:"69px"}}  src={process.env.PUBLIC_URL + '/image/criluma-logo-mailchimp 1.png'} /></Link>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
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
      <Link  to="/product" className="nav-link active p-2">  <i class="bi bi-search p-2"></i></Link>

     

     
    </div>
    </div>
                 </div>
            </div>
            <div className='col-sm-1  dCenter ' style={{height:"6.5rem" , background:"#00A6DB"}}>
     <div class="listynone bg-red w-10 h-10  ">
        <li class="nav-item m-auto">
        <Link  to="crilumydestination" className="nav-link active p-2">CRILUMY</Link>

          <a class="nav-link disabled align-middle "></a>
        </li>
        </div>
   
            </div>

</nav>

 

            





       
    


    </div>
  
  )
}

export default Header