import React from "react";

const Wedding = () => {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            alt="img_alt_text"
            style={{ width: "100%", height: "" }}
            src={process.env.PUBLIC_URL + "/image/offerta vacanze1.png"}
          />
        </div>
      </div>
      <div className="container text-color p-4">
        <h1>you're going to say yes</h1>
        <h3>Let our wedding travel specialist help you</h3>
        <div className="progress d-inline-flex proghe" style={{ width: "rem" }}>
          <div
            className="progress-bar pbcolor  p-3"
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
        <div className="p-3">
          <img
            alt="img_alt_text"
            style={{ width: "100%", height: "" }}
            src={process.env.PUBLIC_URL + "/image/image 21.png"}
          />
        </div>
        <div className="p-3">
          <p>
            Se il momento della scelta del viaggio si sta avvicinando e non
            sapete da che parte iniziare, ogni volta che viene fuori l’argomento
            c’è chi parla di una meta e chi parla di un’altra, chi preferisce
            prenotare tutto subito e chi invece vuole pensarci bene....il nostro
            staff è a vostra disposizione! Un team di oltre 15 persone formate
            come sarti e sarte per cucirvi addosso il viaggio di nozze e super
            informate su ogni attrazione, prezzo, struttura alberghiera,
            escursione, attività, volo, transfert, usanza, costume e must visit
            di ogni angolo della terra.
          </p>
        </div>
        <div
          className="p-4"
          style={{ background: "rgba(0, 0, 0, 0.3)", color: " #00A6DB" }}
        >
          <div className="row">
            <div className="col-sm-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control b-none br-none"
                  placeholder="Name"
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
                    src={process.env.PUBLIC_URL + "/icons/dog-tag.png"}
                    alt="Cinque Terre"
                  />
                </span>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control b-none br-none"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text b-color">
                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                    }}
                    src={process.env.PUBLIC_URL + "/icons/email.png"}
                    alt="Cinque Terre"
                  />
                </span>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control b-none"
                  placeholder="Phone"
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
                    src={process.env.PUBLIC_URL + "/icons/phone-call.png"}
                    alt="Cinque Terre"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn"
              style={{ background: "#00A6DB" }}
              type="button"
            >
              Find Offers
            </button>
          </div>
        </div>
        <div className="text-left">
          <div className="  p-4">
            <p>
              {" "}
              Ti stai chiedendo com’è possibile che noi di Criluma abbiamo
              deciso di metterci a disposizione e di mettere a disposizione i
              nostri Wedding Travel specializzati in maniera totalmente gratuita
              per creare il vostro viaggio di nozze?
            </p>
            <p>
              La risposta è semplice: al giorno d’oggi in pochi (giustamente) si
              fidano di ciò che leggono on-line e noi ci teniamo in primis a far
              capire il nostro metodo di lavoro che ci porta ad immedesimarci in
              voi e prenderci cura di ogni minimo dettaglio facendo si che
              nulla, nulla, nulla venga lasciato al caso.
            </p>
            <h5 className="h1 text-color pt-4 pb-4">
              Proprio per questo offriamo sempre:
            </h5>
            <p>Assistenza prima, durante e dopo la luna di miele</p>
            <p>La miglior selezione di tour operator italiani</p>
            <p>Disponibilità oraria</p>
            <p>Assistenza telefonica 24 ore al giorno.</p>
            <p>
              Lista viaggi di nozze gratuita online e in agenzia con
              aggiornamenti in tempo reale: gli invitati potranno collegarsi al
              sito www.viaggilistanozze.com, entrare all’interno della vostra
              lista e versare la quota regalo.
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="m-3 p-3 text-color">
        <h1>REVIEWS</h1>
        <p>What do you think of us</p>
        <div className="row p-5">
          <div className="col-sm">
            {" "}
            <div className="card b-none" style={{ width: "14rem" }}>
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
                <div className=" col  text-left">
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                </div>
                <div>
                  <p className="text-left">
                    Ringrazio Valentina che mi ha seguito per diversi viaggi e
                    semplici prenotazioni di alberghi per week end. Si distingue
                    per la sua efficienza, professionalità e cortesia. È un
                    piacere farsi seguire da lei, ogni richiesta è soddisfatta
                    in brevissimo tempo! Brava e grazie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm ">
            {" "}
            <div className="card b-none" style={{ width: "14rem" }}>
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
                <div className=" col  text-left">
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                </div>
                <div>
                  <p className="text-left">
                    Per un viaggio saltato per COVID sto aspettando ancora il
                    rimborso dell'anticipo. Comunicazioni superficiali e scuse
                    palesemente imbarazzanti. Il tutto per qualche centinaio di
                    euro....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm ">
            {" "}
            <div className="card b-none">
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
                <div className=" col  text-left">
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                </div>
                <div>
                  <p className="text-left">
                    Ottima organizzazione, Antonio (il titolare) simpaticissimo.
                    Le guide preparatissime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm ">
            {" "}
            <div className="card b-none">
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
                <div className=" col  text-left">
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#D9D9D9" }}></i>
                </div>
                <div>
                  <p className="text-left">
                    Da apprezzare la cortesia per i viaggi la scelta è personale
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm ">
            {" "}
            <div className="card b-none">
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
                <div className=" col  text-left">
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#00A6DB" }}></i>
                  <i className="fa fa-star " style={{ color: "#D9D9D9" }}></i>
                  <i className="fa fa-star " style={{ color: "#D9D9D9" }}></i>
                  <i className="fa fa-star " style={{ color: "#D9D9D9" }}></i>
                </div>
                <div>
                  <p>
                    Poco intuitivo non sono riuscita a trovare quello che
                    cercavo
                  </p>
                </div>
              </div>
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

export default Wedding;
