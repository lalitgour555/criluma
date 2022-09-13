import React from 'react'
import './Card.css';
import GallaryCard from './GallaryCard';
import HomeSlideCard from "./HomeSlideCard"

const Card = () => {
  return (
    <div className='container'>
        <div className='row '>
        <div className="col  mb-2">
          <div class="card text-color desbgcolor  " >
            <img src={process.env.PUBLIC_URL + "/image/c1.png"} />
            <div class="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex ">
                  <i class="bi bi-clock-history pwatchi "></i>
                  <p>duration</p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href="" className="text-color f-6">
                    {" "}
                    € 5.146,50
                  </a>{" "}
                </p>
                </div>
            </div>
          </div>
          </div> 
          <div className="col   mb-2">
          <div class="card text-color desbgcolor " >
            <img src={process.env.PUBLIC_URL + "/image/c2.png"} />
            <div class="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex  ">
                  <i class="bi bi-clock-history pwatchi "></i>
                  <p>duration </p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href="" className="text-color f-6">
                    {" "}
                    € 5.146,50
                  </a>{" "}
                </p>
                </div>
            </div>
          </div>
          </div>
          <div className="col   mb-2">
          <div class="card text-color desbgcolor " >
            <img src={process.env.PUBLIC_URL + "/image/c3.png"} />
            <div class="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex ">
                  <i class="bi bi-clock-history pwatchi "></i>
                  <p>duration</p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i class='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href="" className="text-color f-6">
                    {" "}
                    € 5.146,50
                  </a>{" "}
                </p>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div className='p-4'>

<button type="button" class="btn btn-primary br pbcolor">VIEW MORE OFFERS</button>
        </div>
        <HomeSlideCard/>

<div className=' p-2'>
    <h3>POPULAR DESTINATIONS</h3>
    <p>Browse through our most popular tours!</p>
</div>


{/* Gallery part */}
<GallaryCard/>


{/* <div className='p-4'>
    <div>

    <h5>GALLERY</h5>
    <p>The world as told by our customers</p>
    </div>

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div class="carousel-item">
    <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div class="carousel-item">
    <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div class="carousel-item">
    <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
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
</div> */}

<div class="row mx-auto my-auto justify-content-center">
  <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                      <img src={process.env.PUBLIC_URL + '/image/c1.png'} />
                      </div>
                      <div class="card-img-overlay">Slide 1</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                      <img src={process.env.PUBLIC_URL + '/image/c2.png'} />
                      </div>
                      <div class="card-img-overlay">Slide 2</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                      <img src={process.env.PUBLIC_URL + '/image/c3.png'} />
                      </div>
                      <div class="card-img-overlay">Slide 3</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400?text=4" class="img-fluid"/>
                      </div>
                      <div class="card-img-overlay">Slide 4</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400/aba?text=5" class="img-fluid"/>
                      </div>
                      <div class="card-img-overlay">Slide 5</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-3">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400/fc0?text=6"class="img-fluid"/>
                      </div>
                      <div class="card-img-overlay">Slide 6</div>
                  </div>
              </div>
          </div>
      </div>
      <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
  </div>
</div>
















  </div>
  )
}

export default Card