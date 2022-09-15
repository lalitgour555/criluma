import React from 'react'
import './Gallarycard.css';
const GallaryCard = () => {
  return (
    <div>
<div className="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div className="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img  src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div className="carousel-item">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c2.png'} />
    </div>
    <div className="carousel-item">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c3.png'} />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default GallaryCard