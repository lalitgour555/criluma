import React from 'react'
import './Gallarycard.css';

const GallaryCard = () => {
  return (
    <div>
<div class="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div class="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>


        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div class="carousel-item">
    <img src={process.env.PUBLIC_URL + '/image/c2.png'} />
    </div>
    <div class="carousel-item">
    <img src={process.env.PUBLIC_URL + '/image/c3.png'} />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

{/* <div class="cards-wrapper">
  <div class="card">
  <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card">
  <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card">
  <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div> */}

    </div>
  )
}

export default GallaryCard