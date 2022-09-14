import React from "react";
// import { Link } from "react-router-dom";
import CrilumyHeader from "./CrilumyHeader";
import ImageHover from "./ImageHover";

const CrilumyDestination = () => {
  return (
    <div>
      <ImageHover />
      <CrilumyHeader/>

     
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
