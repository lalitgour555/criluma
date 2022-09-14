import React from "react";
import Card from "./Card";

import "./Home.css";
const Home = () => {
  return (
    <div >
     
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
         <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> 
        <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
         
           <div className="bgImg">
            <div className=" d-md-block container p-4 btncolor rResp">
              <div >
                <div className="d-flex">
                <img alt="img_alt_text" src={process.env.PUBLIC_URL + "/icons/pin.png"} />
                  <h3 className=""> Medagaskar</h3>
                </div>
                <h1 className="hxl text-left eResph1 ">
                  WALKING AROUND THE ISLANDS
                </h1>
              </div>
              <div className="container">
              <div className="row ">
                <div className="col-sm-6 rRespow"> <div className="d-flex">
                <i className="bi bi-clock-history pwatchi"></i>
                <p>duration</p>
                <p>8 days 7 nights</p>
              </div>
             
              <button
                    className="pbcolor br-none f-left btncolor h1"
                    type="button"
                  >
                    € 5.146,50
                  </button>
              </div>
                <img alt="img_alt_text"
              style={{ width: "15.5rem", height: "9rem" }}
              src={process.env.PUBLIC_URL + "/icons/redtext.png"}
            />                           
              </div> 
              </div>
              <div
                className=" rRespdiv"
                style={{ background: "rgba(0, 0, 0, 0.3)", color: " #00A6DB" }}
              >
                <div className="row">
                  <div className="col-sm-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="TIPOLOGIA"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img 
                          style={{
                            width: "15px",
                            height: "15px",
                            background: "white",
                          }}
                          src={process.env.PUBLIC_URL + "/icons/1.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div>
                     <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="PARTENZA"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                            background: "white",
                          }}
                          src={process.env.PUBLIC_URL + "/icons/4.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div> 
                  </div>
                  <div className="col-sm-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="DESTINAZIONE"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                           
                          }}
                          src={process.env.PUBLIC_URL + "/icons/2.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="RITORNO"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                            background: "white",
                          }}
                          src={process.env.PUBLIC_URL + "/icons/4.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="AEREOPORTO"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                            background: "white",
                          }}
                          src={process.env.PUBLIC_URL + "/icons/3.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control b-none"
                        placeholder="FASCIA DI PREZZO"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text b-color">
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                            background: "white",
                          }}
                          src={process.env.PUBLIC_URL + "/icons/6.png"}
                          alt="Cinque Terre"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn pbcolor btncolor "
                     style={{ background: "#00A6DB" }}
                    type="button"
                  >
                    Find Offers
                  </button>
                </div>
              </div>   
          
          </div>
          </div>
      </div>
      <div className="p-4">
        <div>
        
        
          <h1 className="h1">OUR MOST POPULAR PACKAGES</h1>
          <p>Browse through our most popular tours!</p>
    
<div className="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div className="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img  src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>
  </div>
</div>


         
        </div>
        <Card />
        <div className=" text-color p-4">
          <h1 className="h1">REVIEWS</h1>
          <p>What do you think of us</p>
          <div className="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div className="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img  src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
          <div className="row">
            <div className="col">
              {" "}
              <div className="card b-none" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img
                        style={{ width: "3rem", height: "3rem" }}
                        src={process.env.PUBLIC_URL + "/image/3.png"}
                        className="rounded-circle p-2"
                        alt="Cinque Terre"
                      />
                    </div>
                    <p className="p-2">Erica Delfine</p>
                  </div>
                  <div className=' col  text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>

</div>
                  <div>
                    <p className="text-left">
                      Ringrazio Valentina che mi ha seguito per diversi viaggi e
                      semplici prenotazioni di alberghi per week end. Si
                      distingue per la sua efficienza, professionalità e
                      cortesia. È un piacere farsi seguire da lei, ogni
                      richiesta è soddisfatta in brevissimo tempo! Brava e
                      grazie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card b-none" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img
                        style={{ width: "3rem", height: "3rem" }}
                        src={process.env.PUBLIC_URL + "/image/3.png"}
                        className="rounded-circle p-2"
                        alt="Cinque Terre"
                      />
                    </div>
                    <p className="p-2">Fabio Musicco</p>
                  </div>
                  <div className=' col  text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>

</div>
                  <div>
                    <p className="text-left">
                    Per un viaggio saltato per COVID  sto aspettando ancora  il rimborso dell'anticipo. Comunicazioni superficiali e scuse palesemente imbarazzanti. Il tutto per qualche centinaio di euro....
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card b-none" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img
                        style={{ width: "3rem", height: "3rem" }}
                        src={process.env.PUBLIC_URL + "/image/3.png"}
                        className="rounded-circle p-2"
                        alt="Cinque Terre"
                      />
                    </div>
                    <p className="p-2">Donato Bertuccioli</p>
                  </div>
                  <div className=' col  text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>

</div>
                  <div>
                    <p className="text-left">
                    Ottima organizzazione, Antonio (il titolare) simpaticissimo. Le guide preparatissime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card b-none" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img
                        style={{ width: "3rem", height: "3rem" }}
                        src={process.env.PUBLIC_URL + "/image/3.png"}
                        className="rounded-circle p-2"
                        alt="Cinque Terre"
                      />
                    </div>
                    <p className="p-2">Annarosa Giaccaglia</p>
                  </div>
                  <div className=' col  text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#D9D9D9"}}></i>

</div>
                  <div>
                    <p className="text-left">
                    Da apprezzare  la cortesia per i viaggi la scelta è  personale
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card b-none" style={{ width: "15rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <div>
                      {" "}
                      <img
                        style={{ width: "15px", height: "15px" }}
                        src={process.env.PUBLIC_URL + "/image/3.png"}
                        className="rounded-circle"
                        alt="Cinque Terre"
                      />
                    </div>
                    <p>Silvia Standardi</p>
                  </div>
                  <div className=' col  text-left' >
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#00A6DB"}}></i>
<i className='fa fa-star ' style={{color:"#D9D9D9"}}></i>
<i className='fa fa-star ' style={{color:"#D9D9D9"}}></i>
<i className='fa fa-star ' style={{color:"#D9D9D9"}}></i>

</div>
                  <div>
                    <p>
                    Poco intuitivo non sono riuscita a trovare quello che cercavo
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          </div>
        
        </div>
        <div className="textl-right p-2">
          <div className=" rounded-circle pbcolor pt-1 float-right" style={{width:"5rem" , height:"5rem"}}>
         
          <img  src={process.env.PUBLIC_URL + "/icons/chat.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>
           
          </div>
          </div>
          <div className="container">

         
          </div>
    </div>
  );
};

export default Home;
