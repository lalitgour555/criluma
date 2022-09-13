import React from "react";
import IncomingNav from './IncomingNav';
const Incoming = () => {
    const navData1={
       menu: [
        {
            heading:"DAY 1",
            header:"Ancona",
            data:"In the early afternoon we shall take a stroll through the  medieval center of Ascoli Piceno, birthplace of the “olive  all’ascolana”(meat-stuffed fried olives) . The “white city a hundred towers” is rich in architectural treasures including squares paved with travertine marble, Romanesque churches and noble palaces. Guided tour of the historic center, with its splendid squares Piazza del Popolo and Piazza Arringo, the church of Santa Maria della Carità also known as “la Scopa” (the Broom) - a wonderful example of Baroque - and the Malatesta fortress with its museum thathouses the Treasure of the Lombards. To end the day, youcannot miss the streetfood-style taste of the famous friedolives “all’ascolana”. In the evening, arrival at the hotelin Ascoli Piceno, dinner and overnight stay.."
        },
        {
            heading:"DAY 2",
            header:"The Riviera del Conero (boat excursion),Loreto and Recanati " ,
            data:"After breakfast we will leave for an exciting crewed boat excursion,that will reveal the Riviera del Conero in all its splendor.We will start from Numana Tourist Port and sail along the coast admiringthe beautiful beaches of Numana and Sirolo until arriving to theSassi Neri ( black stones) beach, then it will be the turn of the famousbeach of the Due Sorelle (two sisters) with its two white sea stacksemerging from the sea. Ater a short stop at the Gabbiani (seagulls)beach, you will admire Portonovo with its Napoleonic Fortress, crossMezzavalle bay and finally stop at the Trave beach , a natural underwatertongue that acts as a reef, creating an emerald green natural swimmingpool where you will find it impossible not to to dive.Back on board, surrounded by that fantastic and relaxing panorama, an aperitif based on drinks and snacks awaits you , to recover lostenergy. Duration of the excursion: 3 and a half hours. Free lunch.Afternoon wholly dedicated to a guided tour of two “pearls” of regionMarche : Loreto and Recanati.In Loreto we will visit the outstanding Renaissance architectural complexof the Basilica of the Holy House, one of the main places of Marianworship and one of the most important and visited Marian shrinesin the Catholic world . Afterwards we will reach Recanati, birthplace tothe famous poet Giacomo Leopardi ; we will visit his noble residence ,with its library, the reception rooms, the garden, the poet’s apartmentsand the Leopardi museum. At the end of the visit we will take a walkthrough a Leopardian place par excellence: the garden on the “lonelyhill” of the ‘Infinity” poem .Return to hotel, dinner and overnight stay. " 
        }
    ]

    }
  return (
    <div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            style={{ width: "100%", height: "" }}
            src={
              process.env.PUBLIC_URL +
              "/image/jcob-nasyr-ppMxyOhPtd8-unsplash 1.png"
            }
          />
          <div className="p-2 bg-inconme">
            {" "}
            <h1 className="text-color text-left p-4">Le Marche</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" p-4">
          <h1 className="h1 ptcolor f-30">FROM MAY TO OCTOBER</h1>
          <p>4 NIGHTS / 5 DAYS</p>
          <div class="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div class="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
          <div>
            <h1 className="h1 text-color f-30 ">FAMILY-ACTIVE ITINERARY</h1>
            <p>BASE HOTEL ZONA ANCONA/GENGA</p>
          </div>
          <div className="p-4">
            <div className="row text-left">
              <div className="col-sm-6  text-color">
                <h3 className="">INDIVIDUAL PARTICIPATION FEES</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>ON A 2 PAX BASIS</p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>BASIC FEE - EURO 290</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row text-left">
              <div className="col-sm-6 text-color ">
                <h3 className="">The rates do not include</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    Meals not mentioned, drinks at the meals; admissions where
                    not specified and anything not mentioned under the heading
                    “the fee includes”.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>SILVER FEE - EURO 410</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row text-left text-color">
              <div className="col-sm-6 text-color">
                <h3 className="">On request</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    Single room supplement Optional insurance against
                    cancellation penalties
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>GOLD FEE - EURO 550</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; the guided tour of the city of Ancona (entrance
                    fees not included); boat trip on the Conero Riviera with
                    aperitif on board; guided tour of Loreto and Recanati
                    (admissions not included); entrance and guided tour of the
                    caves of Camerano; entrance and visit to the Frasassi caves;
                    aperitif based on Fabriano salami, beer and aged honey on
                    the third day; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div>
              <ul class="nav  nav-justified pbcolor ">
                <li class="nav-item ">
                  <a class="nav-link active" aria-current="page" href="#">
                    DAY 1
                  </a>
                </li>

                <li class="nav-item text-white">
                  <a class="nav-link" href="#">
                    DAY 2
                  </a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link" href="#">
                    DAY 3
                  </a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link " href="#">
                    DAY 4
                  </a>
                </li>
                <li class="nav-item text-white">
                  <a class="nav-link " href="#">
                    DAY 5
                  </a>
                </li>
              </ul>
              <div className="row bg-nav1 p-2 " style={{ margin: "2px" }}>
                <div className=" col-sm-9 text-left pl-2 ">
                  <h1 className="ptcolor p-1 ">
                    Ancona
                  </h1>
                  <p className="text-color">
                    In the early afternoon we shall take a stroll through the
                    medieval center of Ascoli Piceno, birthplace of the “olive
                    all’ascolana”(meat-stuffed fried olives) . The “white city
                    of a hundred towers” is rich in architectural treasures
                    including squares paved with travertine marble, Romanesque
                    churches and noble palaces. Guided tour of the historic
                    center, with its splendid squares Piazza del Popolo and
                    Piazza Arringo, the church of Santa Maria della Carità also
                    known as “la Scopa” (the Broom) - a wonderful example of
                    Baroque - and the Malatesta fortress with its museum that
                    houses the Treasure of the Lombards. To end the day, you
                    cannot miss the streetfood-style taste of the famous fried
                    olives “all’ascolana”. In the evening, arrival at the hotel
                    in Ascoli Piceno, dinner and overnight stay..
                  </p>
                </div>
                <div className="col-3 col-sm-3 ">
                  <img
                    className="img-fluid"
                    src={process.env.PUBLIC_URL + "/image/image 10.png"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="row text-left">
              <div className="col-sm-6  text-color">
                <h3 className="">INDIVIDUAL PARTICIPATION FEES</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>ON A 2 PAX BASIS</p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>BASIC FEE - EURO 290</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row text-left">
              <div className="col-sm-6 text-color ">
                <h3 className="">The rates do not include</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    Meals not mentioned, drinks at the meals; admissions where
                    not specified and anything not mentioned under the heading
                    “the fee includes”.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>SILVER FEE - EURO 410</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row text-left text-color">
              <div className="col-sm-6 text-color">
                <h3 className="">On request</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    Single room supplement Optional insurance against
                    cancellation penalties
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>GOLD FEE - EURO 550</h3>
                <div className="d-flex">
                  <i class="bi bi-check ptcolor"></i>
                  <p>
                    The fee includes : nr. 4 nights half board in a double /
                    twin room; the guided tour of the city of Ancona (entrance
                    fees not included); boat trip on the Conero Riviera with
                    aperitif on board; guided tour of Loreto and Recanati
                    (admissions not included); entrance and guided tour of the
                    caves of Camerano; entrance and visit to the Frasassi caves;
                    aperitif based on Fabriano salami, beer and aged honey on
                    the third day; medical / baggage insurance.
                  </p>
                </div>
              </div>
            </div>
            <hr />
<IncomingNav data={navData1}/>
            
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

export default Incoming;
