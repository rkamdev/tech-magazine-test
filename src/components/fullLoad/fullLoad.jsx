import React from "react";
import "./styles/fullLoad.scss";
import logo from "../../../public/favicon-16x16.png"

function FullLoad(){
  return(
    <div className="fullLoad">
      <div className="container">
        <img src={logo} alt="Computer and Telephone online magazine" />
      </div>
    </div>
  )
}

export default FullLoad;