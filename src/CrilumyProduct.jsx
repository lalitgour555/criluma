import React from "react";
import ImageHover from "./ImageHover";

const CrilumyProduct = () => {
  return (
    <div className="bg-inconme">
      {/* <div className='d-flex'>
        <img  className='w-33' src={process.env.PUBLIC_URL + '/image/I_345138 1.png'} />
        <img className='w-33'  src={process.env.PUBLIC_URL + '/image/I_744513.png'} />
        <img className='w-33'  src={process.env.PUBLIC_URL + '/image/I_744512.png'} />

        </div> */}
      <ImageHover />

      <div className="p-2 text-color bg-inconme">
        <h1 className="text-left  p-2">Torre del mar</h1>
        <div className="text-left  p-2">
          <p>
            Un Ambiente Intimo E Rilassato, Dove Lo Sguardo, Dalla Piscina, Può
            Spaziare Fino All’orizzonte Libero Da Costrizioni; Allo Stesso
            Tempo, Fuori Da Quest’oasi, Si Dipana La Movida Di Ibiza E Di Playa
            D’en Bossa.{" "}
          </p>
        </div>
      </div>

      <div className="row container-fluid  p-4  b-color  ">
        <div className="col-sm-1"></div>
        <div className="col-sm-7 ml-3 pl-2">
          <ul class="nav  nav-justified bg-nav">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#">
                Rooms
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btncolor" href="#">
                Restaurant/Bar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btncolor" href="#">
                Activities/Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btncolor " href="#">
                Star prestige
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btncolor " href="#">
                Why to go
              </a>
            </li>
          </ul>
          <div>
            <p className="p-2 text-left  b-color">
              In the early afternoon guided tour of the city of Ancona, settled
              by the Greeks who named it “Ankon” (elbow); the ancient Ancona in
              fact stands on a promontory shaped like a bent elbow, offering a
              perfect natural protection to the port. The visit will begin from
              the millenary Cathedral of San Ciriaco which rises in a
              spectacular location at the top of the Guasco hill , then you will
              go down to the Lazzaretto (Lazaret hospital) of Ancona, also known
              as Mole Vanvitelliana from the name of its architect Luigi
              Vanvitelli (van Wittel) . It stands on an artificial pentagonal
              island located in the port. Inside the Mole we will visit the
              Omero Museum , one of the few tactile museums existing in the
              world. I n the evening, arrival at our hotel in the Ancona area,
              dinner and overnight stay.
            </p>
          </div>
          <div class="table-responsive ">
            <table class="table text-left text-color">
              <thead>
                <tr>
                  <th scope="col">
                    <i class="bi bi-check2 ptcolor pwatchi"></i>General services
                  </th>
                  <th scope="col">
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Indoor & outdoor
                    services
                  </th>
                  <th scope="col">
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Catering
                    services
                  </th>
                  <th scope="col">
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Cleaning
                    services
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Common room / TV
                    area{" "}
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Outdoor
                    furniture
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>On-site coffee
                    shop
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Daily cleaning
                    service
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Air conditioning{" "}
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Solarium terrace
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Bar
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Ironing service{" "}
                    <a href="" className="tc-nav textstynone">
                      for a fee
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Entirely
                    non-smoking facility
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Terrace
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Restaurant
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Dry wash{" "}
                    <a href="" className="tc-nav textstynone">
                      for a fee
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Heating
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Garden
                  </td>
                  <td></td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Laundry service
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Possibility of
                    packed lunch
                  </td>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Swimming pool
                  </td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Elevator
                  </td>
                  <td>
                    {" "}
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Gym
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>
                    Rooms / facilities for disabled guests
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Room service
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-check2 ptcolor pwatchi"></i>Room service
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card br-none">
            <div class="card-body p-3">
              <h1>€ 1.159,50</h1>
              <p className="m-0">√ Instant confirmation </p>
              <p className="m-0">√ Cancel up to 3 days</p>
              <p className="m-0">√ Best Price Guarantee</p>
              {/* <img src={process.env.PUBLIC_URL + '/image/Rectangle 54.png'}  className="pabs img-fluid" style={{width:"100%"}}/> */}
            </div>
            <a
              href="#"
              class="btn btn-primary w-100 br-none p-0 m-0 pbcolor btcolor"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div className=" container p-4">
        <div className="m-4">
          <h1 className="h1">YOUR SOLUTIONS</h1>
          <h4>A solution for every need</h4>
        </div>
        <div class="progress d-inline-flex proghe" style={{ width: "rem" }}>
          <div
            class="progress-bar pbcolor  p-3"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            style={{ width: "100%" }}
            aria-valuemax=""
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/r.png"}
              style={{ width: "4.5rem" }}
              alt="Cinque Terre"
            />
          </div>
        </div>
        <div className="table-responsive divShadow m-5 p-1">
          <tbody class="table-group-divider">
            <tr className="b-none">
              <td className="align-middle border-right col-sm-3">
                {" "}
                <div className="">
                  <h6>CAMERA STANDARD</h6> <h6>S05</h6>
                </div>
              </td>
              <td className="border-right">
                <div className="row ">
                  <div className="d-flex m-2">
                    <div className="col-sm-3 d-grid ">
                      <a href="" className="textstynone">
                        Trattamento:
                      </a>
                      <a href="" className="textstynone">
                        Sistemazione:
                      </a>
                      <a href="" className="textstynone">
                        Arrivo:
                      </a>
                      <a href="" className="textstynone">
                        Camera:
                      </a>
                      <a href="" className="textstynone">
                        Max persone:
                      </a>
                    </div>
                    <div className="col-sm-9">
                      <p>HARD ALL INCLUSIVE</p>
                      <p>CAMERA STANDARD - S05</p>
                      <p>SHARM EL SHEIKH</p>
                      <p>Camera: 1 matrimoniale</p>
                      <p>Max. persone: 2</p>
                    </div>
                  </div>
                  <p>Prodotto venduto a pacchetto</p>
                </div>
              </td>
              <td className="border-right col-sm-3">
                <div className="m-2 ">
                  <img
                    src={process.env.PUBLIC_URL + "/image/airplane copia.png"}
                    className="p-2"
                  />
                  <p>Dal 2022-10-23 al 2022-10-30 classe Y</p>
                  <div className="row">
                    <div className="col-sm-3 text-left">
                      <a href="">ANDATA:</a>
                    </div>
                    <div className="col-sm-9 p-0">
                      <h6>Partenza (BERGAMO): 16:55:00</h6>
                      <h6>Arrivo (SHARM EL SHEIKH): 20:55:00</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3  ">
                      <a href="">ANDATA:</a>
                    </div>
                    <div className="col-sm-9 p-0">
                      <p>
                        Partenza (BERGAMO): 16:55:00 Arrivo (SHARM EL SHEIKH):
                        20:55:00
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="align-middle ">
                {" "}
                <div style={{ width: "18rem" }}>
                  <h3 className="m-2">Volo + soggiorno</h3>
                  <h1 className="m-2">€ 1.159,50</h1>
                  <button
                    type="button"
                    class="btn btn-primary br-none pbcolor m-2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>

      {/* RELEATED OFFER */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div class="card text-color br-alblu" >
              <img src={process.env.PUBLIC_URL + "/image/c1.png"} />
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card text-color br-alblu" >
              <img src={process.env.PUBLIC_URL + "/image/c1.png"} />
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card text-color br-alblu" >
              <img src={process.env.PUBLIC_URL + "/image/c1.png"} />
            </div>
          </div>
        </div>
      </div>

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

export default CrilumyProduct;
