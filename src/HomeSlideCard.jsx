import React from 'react'
import './HomeSlideCard.css';
const HomeSlideCard = () => {
  return (
    <div className="container p-5 bg-inconme">
     <div className=' p-2'>
    <h3>POPULAR DESTINATIONS</h3>
    <p>Browse through our most popular tours!</p>
</div>
<div class="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div class="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
     <div className="row  btncolor container">
     
     <div className="col-sm-3 homeSlideCard-resp p-1 centerd"> <div class="project-card">
        <img  className='img-fluid w-100' src={process.env.PUBLIC_URL + '/image/Rectangle 28 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Italia</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
      <div className="col-sm-3 homeSlideCard-resp  p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 29 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Santo Domingo</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp  p-1 "> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 30 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Jamaica</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp  p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 31 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Cuba</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp  p-1  centerd"> <div class="project-card">
        <img  className='img-fluid '  src={process.env.PUBLIC_URL + '/image/Rectangle 32 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Maldive</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp  p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 33 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Zanzibar</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 34 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Malta</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 35 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Croazia</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp p-1 "> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 36 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Canarie</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 37 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Baleari</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp p-1  centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 38 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Mar Rosso</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     <div className="col-sm-3 homeSlideCard-resp  p-1 centerd"> <div class="project-card">
        <img  className='img-fluid ' style={{width:"87vh"}} src={process.env.PUBLIC_URL + '/image/Rectangle 39 (1).png'} />
 <div class="card-img-overlay mt-16vh">
    <h5 class="card-title p-1  h1" >Grecia</h5>
<div>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>
    <i class="fa fa-star p-1" aria-hidden="true"></i>

</div>
        <div class="achievement-label ">A PARTIRE DA
€ 350,00</div>
      </div></div>
     </div>
     
    

    </div>
    </div>
  )
}

export default HomeSlideCard