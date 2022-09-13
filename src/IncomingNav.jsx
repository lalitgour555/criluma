import React from 'react'

const IncomingNav = ({data}) => {
  return (
    
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
              <div className="row bg-nav1 p-3" style={{ margin: "2px" }}>
                <div className=" col-sm-9 text-left ">
                  <h1 className="ptcolor p-1 ">
                    Ascoli Piceno: the historic city center
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
   
  )
}

export default IncomingNav