import React from "react";
import { Link } from "react-router-dom";
import CrilumyHeader from "./CrilumyHeader";
import ImageHover from "./ImageHover";

const CrilumyDestination = () => {
  return (
    <div>
      <ImageHover />
      <CrilumyHeader/>

      {/* <div className="row container p-4"> */}
        {/* <div class="card text-color desbgcolor  ">
        </div> */}
        {/* <div className="col-sm-4 m-1 p-1">
              <div class="card text-color ">
                <div class="card-body p-0">
                
          <div className="">
            <ul class="list-group text-left br-none">
            
              <li class="list-group-item pbcolor fs-4 text-center text-white">CRILUMY</li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/3.png"}
                    />
                  </div>
                  <div className="col-sm-10  text-left">
                    <Link
                      to="/crilumyproduct"
                      className="navbar-brand text-left"
                    >
                      {" "}
                      <h4 className="text-color">Destination</h4>
                    </Link>{" "}
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row  ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={
                        process.env.PUBLIC_URL + "/icons/image-gallery 1.png"
                      }
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    <Link
                      to="/crilumypicture"
                      className="navbar-brand text-left"
                    >
                      <h4>Pictures of your travels</h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/network 1.png"}
                    />
                  </div>
                  <div className="col-sm-10  text-left ">
                    <Link
                      to="/crilumyfriends"
                      className="navbar-brand text-left"
                    >
                      {" "}
                      <h4> Find your friends</h4>
                    </Link>
                  </div>{" "}
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/edit 1.png"}
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    <Link to="/product" className="navbar-brand text-left">
                      <h4>Edit Profile</h4>
                    </Link>
                  </div>{" "}
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/logout 1.png"}
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    {" "}
                    <h4>Logout </h4>
                  </div>{" "}
                </div>
              </li>
            </ul>
          </div>
  
                </div>
              </div>
            </div> */}

        {/* <div className="container col-sm-3 p-2  ">
          <div className="container ">
            <ul class="list-group text-left br-none">
            
              <li class="list-group-item pbcolor fs-4 text-center text-white">CRILUMY</li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/3.png"}
                    />
                  </div>
                  <div className="col-sm-10  text-left">
                    <Link
                      to="/crilumyproduct"
                      className="navbar-brand text-left"
                    >
                      {" "}
                      <h4 className="text-color">Destination</h4>
                    </Link>{" "}
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row  ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={
                        process.env.PUBLIC_URL + "/icons/image-gallery 1.png"
                      }
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    <Link
                      to="/crilumypicture"
                      className="navbar-brand text-left"
                    >
                      <h4>Pictures of your travels</h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/network 1.png"}
                    />
                  </div>
                  <div className="col-sm-10  text-left ">
                    <Link
                      to="/crilumyfriends"
                      className="navbar-brand text-left"
                    >
                      {" "}
                      <h4> Find your friends</h4>
                    </Link>
                  </div>{" "}
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/edit 1.png"}
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    <Link to="/product" className="navbar-brand text-left">
                      <h4>Edit Profile</h4>
                    </Link>
                  </div>{" "}
                </div>
              </li>
              <li class="list-group-item">
                <div className="row ">
                  <div className="col-sm-2 text-right">
                    <img
                      className="mat-1 icwh"
                      src={process.env.PUBLIC_URL + "/icons/logout 1.png"}
                    />
                  </div>
                  <div className="col-sm-10 text-left">
                    {" "}
                    <h4>Logout </h4>
                  </div>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className="col-sm-7 p-1 ">
          <div className="row  ">
            <div className="col-sm-4  p-1 ">
              <div class="card text-color  ">
                <img src={process.env.PUBLIC_URL + "/image/c1.png"} />
                <div class="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i class="bi bi-clock-history "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
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
                      class="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4  p-1  ">
              <div class="card text-color ">
                <img src={process.env.PUBLIC_URL + "/image/c2.png"} />
                <div class="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i class="bi bi-clock-history "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
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
                      class="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4  p-1">
              <div class="card text-color ">
                <img src={process.env.PUBLIC_URL + "/image/c3.png"} />
                <div class="card-body ">
                  <h3 className="text-left h1 m-0 ">Torre del mar</h3>
                  <p className="text-left ">Isole Baleari - Spagna</p>

                  <div className="d-flex ">
                    <i class="bi bi-clock-history "></i>
                    <p>duration</p>
                    <p>8 days 7 nights</p>
                  </div>

                  <div className=" col cpleft text-left">
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
                    <i class="fa fa-star " style={{ color: "#00A6DB" }}></i>
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
                      class="btn btn-primary btn-lg br-none pbcolor m-2"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <div className="textl-right p-2">
        <div
          className=" rounded-circle pbcolor pt-1 float-right"
          style={{ width: "5rem", height: "5rem" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/icons/chat.png"}
            style={{ width: "4.5rem" }}
            alt="Cinque Terre"
          />
        </div>
      </div>
    </div>
  );
};

export default CrilumyDestination;
