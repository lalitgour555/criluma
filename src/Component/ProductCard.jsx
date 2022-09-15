import React from "react";
import "./Product.css";
const ProductCard = () => {
  return (
    <div className="row p-4 container    ">
      <div className="col-9 p-2">
        <ul className="nav   nav-justified bg-nav">
          <li className="nav-item ">
            <a className="nav-link active " aria-current="page" href="Rooms">
              Rooms
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link btncolor" href="Restaurant">
              Restaurant/Bar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btncolor" href="Activities">
              Activities/Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btncolor" href="Star">
              Star prestige
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btncolor " href="Why">
              Why to go
            </a>
          </li>
        </ul>
        <div>
          <p className="p-2 text-left bg-nav1">
            In the early afternoon guided tour of the city of Ancona, settled by
            the Greeks who named it “Ankon” (elbow); the ancient Ancona in fact
            stands on a promontory shaped like a bent elbow, offering a perfect
            natural protection to the port. The visit will begin from the
            millenary Cathedral of San Ciriaco which rises in a spectacular
            location at the top of the Guasco hill , then you will go down to
            the Lazzaretto (Lazaret hospital) of Ancona, also known as Mole
            Vanvitelliana from the name of its architect Luigi Vanvitelli (van
            Wittel) . It stands on an artificial pentagonal island located in
            the port. Inside the Mole we will visit the Omero Museum , one of
            the few tactile museums existing in the world. I n the evening,
            arrival at our hotel in the Ancona area, dinner and overnight stay.
          </p>
        </div>
        <div className="table-responsive ">
          <table className="table text-color">
            <thead>
              <tr>
                <th scope="col">General services</th>
                <th scope="col">Indoor & outdoor services</th>
                <th scope="col">Catering services</th>
                <th scope="col">Cleaning services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Common room / TV area </td>
                <td>Outdoor furniture</td>
                <td>On-site coffee shop</td>
                <td>Daily cleaning service</td>
              </tr>
              <tr>
                <td> Air conditioning </td>
                <td>Solarium terrace</td>
                <td>Bar</td>
                <td>
                  Ironing service{" "}
                  <a href="for a fee" className="tc-nav">
                    for a fee
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <td>Entirely non-smoking facility</td>
                <td>Terrace</td>
                <td>Restaurant</td>
                <td>
                  Dry wash{" "}
                  <a href=" for a fee" className="tc-nav">
                    for a fee
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <td>Heating</td>
                <td>Garden</td>
                <td></td>
                <td>Laundry service</td>
              </tr>
              <tr>
                <td>Possibility of packed lunch</td>
                <td>Swimming pool</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Elevator</td>
                <td>Gym</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Rooms / facilities for disabled guests</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Room service</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Room service</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container divShadow ">
          <div className="d-flex">
            <div className="dCenter">
              <h3>CAMERA STANDARD S05</h3>
            </div>
            <div className="vr"></div>
            <div className="row ">
              <div className="d-flex">
                <div className="col d-grid ">
                  <a href=" Trattamento" className="textstynone">
                    Trattamento:
                  </a>
                  <a href="Sistemazione" className="textstynone">
                    Sistemazione:
                  </a>
                  <a href=" Arrivo" className="textstynone">
                    Arrivo:
                  </a>
                  <a href=" Camera" className="textstynone">
                    Camera:
                  </a>
                  <a href=" Max persone" className="textstynone">
                    Max persone:
                  </a>
                </div>
                <div className="col">
                  <p>HARD ALL INCLUSIVE</p>
                  <p>CAMERA STANDARD - S05</p>
                  <p>SHARM EL SHEIKH</p>
                  <p>Camera: 1 matrimoniale</p>
                  <p>Max. persone: 2</p>
                </div>
              </div>
              <p>Prodotto venduto a pacchetto</p>
            </div>
            <div className="vr"></div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/image/airplane copia.png"}
                className="p-2"
              />
              <p>Dal 2022-10-23 al 2022-10-30 classNamee Y</p>
              <div className="row">
                <div className="col">
                  <a href=" ANDATA">ANDATA:</a>
                </div>
                <div className="col">
                  <p>
                    Partenza (BERGAMO): 16:55:00 Arrivo (SHARM EL SHEIKH):
                    20:55:00
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a href="ANDATA">ANDATA:</a>
                </div>
                <div className="col">
                  <p>
                    Partenza (BERGAMO): 16:55:00 Arrivo (SHARM EL SHEIKH):
                    20:55:00
                  </p>
                </div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="p-4">
              <h3>Volo + soggiorno</h3>
              <h1>€ 1.159,50</h1>
              <button type="button" className="btn btn-primary br-none pbcolor">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 p-5 ">
        <div className="card" style={{ width: "25rem" }}>
          <h1>€ 1.159,50</h1>
          <p>
            √ Instant confirmation √ Cancel up to 3 days √ Best Price Guarantee
          </p>
          <img
            src={process.env.PUBLIC_URL + "/image/Rectangle 54.png"}
            className="pabs"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="Go somewhere" className="btn btn-primary w-100 br-none p-0 m-0">
              Go somewhere
            </a>
          </div>
        </div>
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="Action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Another action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Something else here">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="Action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Another action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Something else here">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="Action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Another action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Something else here">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="Action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Another action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="Something else here">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
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
        <span
          className="input-group-text b-color flex-end m-2"
          style={{ width: "25rem" }}
        >
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
        <button
          type="button"
          className="btn btn-secondary btn-lg m-2 br-none"
          style={{ width: "88vh" }}
        >
          Large button
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
