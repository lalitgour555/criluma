import React from "react";
import CrilumyDestinationCard from "./CrilumyDestinationCard";
const CrilumyHeader = () => {
  return (
    <div>
      <div className="row  p-4">
        <div className="card text-color desbgcolor  "></div>
        <div className="col-sm-4 m-1 px-sm-4  caResp">
          <CrilumyDestinationCard />
        </div>
        <div className="col-sm-7 colm-9 container p-1 ">
          <div className="row   ">
            <div className="col-sm-4 caResp3 p-1 ">
              <div className="card text-color  ">
                <img
                  alt="img_alt_text"
                  src={process.env.PUBLIC_URL + "/image/c1.png"}
                />
                <div className="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i className="bi bi-clock-history pr-xl-2 "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  </div>
                  <p className="text-left">Prezzo per due persone</p>
                </div>
                <hr className="bt-2" />
                <div className="d-flex row">
                  <div id="" className="p-2 col">
                    <p>
                      {" "}
                      <a href="" className="text-color f-6">
                        {" "}
                        € 5.146,50
                      </a>{" "}
                    </p>
                  </div>
                  <div className="text-right col">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 caResp3 p-1  ">
              <div className="card text-color ">
                <img
                  alt="img_alt_text"
                  src={process.env.PUBLIC_URL + "/image/c2.png"}
                />
                <div className="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i className="bi bi-clock-history pr-xl-2 "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  </div>
                  <p className="text-left">Prezzo per due persone</p>
                </div>
                <hr className="bt-2" />
                <div className="d-flex row">
                  <div id="" className="p-2 col">
                    <p>
                      {" "}
                      <a href="" className="text-color f-6">
                        {" "}
                        € 5.146,50
                      </a>{" "}
                    </p>
                  </div>
                  <div className="text-right col">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 caResp3  p-1">
              <div className="card text-color ">
                <img
                  alt="img_alt_text"
                  src={process.env.PUBLIC_URL + "/image/c3.png"}
                />
                <div className="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i className="bi bi-clock-history pr-xl-2 "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  </div>
                  <p className="text-left">Prezzo per due persone</p>
                </div>
                <hr className="bt-2" />
                <div className="d-flex row">
                  <div id="" className="p-2 col">
                    <p>
                      {" "}
                      <a href="" className="text-color f-6">
                        {" "}
                        € 5.146,50
                      </a>{" "}
                    </p>
                  </div>
                  <div className="text-right col">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrilumyHeader;
