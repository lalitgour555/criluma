import React from 'react'

const Test = () => {
  return (
    <div>
    {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true"> */}
      
      {/* <div class="carousel-inner"> */}
        <div class="carousel-item active">
          <img src={process.env.PUBLIC_URL + "/image/3.png"} class="d-block w-100" alt="..."/>
          <div>
     <div class="carousel-caption d-none d-md-block">
              <div className=" d-md-block container p-4 btncolor rResp">
               
                <div>
                  <div className="d-flex">
                    <img
                      alt="img_alt_text"
                      src={process.env.PUBLIC_URL + "/icons/pin.png"}
                    />
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="btnNextPrev" aria-hidden="true"> &#62;</span>
        <span class="visually-hidden">Next</span>
      </button>
                    <h3 className=""> Medagaskar</h3>
                  </div>
                  <h1 className="hxl text-left eResph1 ">
                    WALKING AROUND THE ISLANDS
                  </h1>
                </div>
                <div className="container">
                  <div className="row ">
                    <div className="col-sm-6 rRespow">
                      {" "}
                      <div className="d-flex">
                        <i className="bi bi-clock-history pr-xl-2"></i>
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
                    <img
                      alt="img_alt_text"
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
        </div>
        <div class="carousel-item">
          <img  src={process.env.PUBLIC_URL + "/image/Exclusive.png"} class="d-block w-100" alt="..."/>
          {/* <div class="carousel-caption d-none d-md-block"> */}
          <div className="">
              <div className=" d-md-block container p-4 btncolor rResp">
               
                <div>
                  <div className="d-flex">
                    <img
                      alt="img_alt_text"
                      src={process.env.PUBLIC_URL + "/icons/pin.png"}
                    />
                    <h3 className=""> Medagaskar</h3>
                  </div>
                  <h1 className="hxl text-left eResph1 ">
                    WALKING AROUND THE ISLANDS
                  </h1>
                </div>
                <div className="container">
                  <div className="row ">
                    <div className="col-sm-6 rRespow">
                      {" "}
                      <div className="d-flex">
                        <i className="bi bi-clock-history pr-xl-2"></i>
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
                    <img
                      alt="img_alt_text"
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
          
          {/* </div> */}
    
        </div>
        <div class="carousel-item">
          <img src={process.env.PUBLIC_URL + "/image/Exclusive.png"}  class="d-block w-100" alt="..."/>
        </div>
      {/* </div> */}
     
    
    
    {/* </div> */}
    
    
     
    </div>
  )
}

export default Test