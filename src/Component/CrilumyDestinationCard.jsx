import React from 'react'
import { Link } from 'react-router-dom'
const CrilumyDestinationCard = () => {
  return (
    <div>  <div className="card text-color b-none ">
    <div className="card-body p-0">
<div className=" m-3">
<ul className="list-group text-left br-none">
  <li className="list-group-item pbcolor fs-4 text-center text-white text1">CRILUMY</li>
  <li className="list-group-item">
    <div className="row ">
      <div className="col-sm-2 text-right">
        <img alt="img_alt_text"
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
  <li className="list-group-item">
    <div className="row  ">
      <div className="col-sm-2 text-right">
        <img alt="img_alt_text"
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
  <li className="list-group-item">
    <div className="row ">
      <div className="col-sm-2 text-right">
        <img alt="img_alt_text"
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
  <li className="list-group-item">
    <div className="row ">
      <div className="col-sm-2 text-right">
        <img alt="img_alt_text"
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
  <li className="list-group-item">
    <div className="row ">
      <div className="col-sm-2 text-right">
        <img alt="img_alt_text"
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
  </div> </div>
  )
}

export default CrilumyDestinationCard