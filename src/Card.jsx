import React from 'react'
import './Card.css';
import HomeSlide4Card from './HomeSlide4Card';
import HomeSlideCard from "./HomeSlideCard"

const Card = () => {
  return (
    <div className='container'>
        <div className='row '>
        <div className="col  mb-2">
          <div className="card text-color desbgcolor  " >
            <img alt="img_alt_text" src={process.env.PUBLIC_URL + "/image/c1.png"} />
            <div className="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex ">
                  <i className="bi bi-clock-history pr-xl-2 "></i>
                  <p>duration</p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href=" € 5.146,50" className="text-color f-6">
                    {" "}
                    € 5.146,50
                  </a>{" "}
                </p>
                </div>
            </div>
          </div>
          </div> 
          <div className="col   mb-2">
          <div className="card text-color desbgcolor " >
            <img alt="img_alt_text" src={process.env.PUBLIC_URL + "/image/c2.png"} />
            <div className="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex  ">
                  <i className="bi bi-clock-history pr-xl-2 "></i>
                  <p>duration </p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href="€ 5.146,50" className="text-color f-6">
                    {" "}
                    € 5.146,50
                  </a>{" "}
                </p>
                </div>
            </div>
          </div>
          </div>
          <div className="col   mb-2">
          <div className="card text-color desbgcolor " >
            <img alt="img_alt_text" src={process.env.PUBLIC_URL + "/image/c3.png"} />
            <div className="card-body ">
              <h3 className="text-left m-0 h1 ">Torre del mar</h3>
              <p className="text-left ">Isole Baleari - Spagna</p>
       
            <div className="d-flex ">
                  <i className="bi bi-clock-history pr-xl-2 "></i>
                  <p>duration</p>
                  <p>8 days 7 nights</p>
                </div>

               
                <p className='text-left'>Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa D’en Bossa. </p>
</div>
            <hr className="bt-2" />
            <div className="d-flex row">
              <div id="" className="p-2 col">
              <div className=' col cpleft text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
</div>
              </div>
              <div className="text-right col">
              <p className='p-2'>
                  {" "}
                 
                  <a href="€ 5.146,50" className="text-color f-6">
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

<button type="button" className="btn btn-primary br pbcolor">VIEW MORE OFFERS</button>
        </div>
        <HomeSlideCard/>

<div className='p-2 mt-4'>
    <h1 className='h1'>POPULAR DESTINATIONS bgffff</h1>
    <p>Browse through our most popular tours!</p>
</div>
<div className="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div className="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img  src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
<HomeSlide4Card/>

{/* <div className='p-4'>
    <div>

    <h5>GALLERY</h5>
    <p>The world as told by our customers</p>
    </div>

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div className="carousel-item">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div className="carousel-item">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
    </div>
    <div className="carousel-item">
    <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
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
</div> */}

{/* <div className="row mx-auto my-auto justify-content-center">
  <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                      <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c1.png'} />
                      </div>
                      <div className="card-img-overlay">Slide 1</div>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                      <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c2.png'} />
                      </div>
                      <div className="card-img-overlay">Slide 2</div>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                      <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/image/c3.png'} />
                      </div>
                      <div className="card-img-overlay">Slide 3</div>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                          <img alt="img_alt_text" src="https://via.placeholder.com/500x400?text=4" className="img-fluid"/>
                      </div>
                      <div className="card-img-overlay">Slide 4</div>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                          <img alt="img_alt_text" src="https://via.placeholder.com/500x400/aba?text=5" className="img-fluid"/>
                      </div>
                      <div className="card-img-overlay">Slide 5</div>
                  </div>
              </div>
          </div>
          <div className="carousel-item">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-img">
                          <img alt="img_alt_text" src="https://via.placeholder.com/500x400/fc0?text=6"className="img-fluid"/>
                      </div>
                      <div className="card-img-overlay">Slide 6</div>
                  </div>
              </div>
          </div>
      </div>
      <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
  </div>
</div> */}
















  </div>
  )
}

export default Card