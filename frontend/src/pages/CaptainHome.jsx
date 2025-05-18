import React from "react";
import map from "../assets/map.gif";
import { Link } from "react-router-dom";
import hover_black from "./hover-black.png";
import CaptainDetails from "./CaptainDetails";
import RidePopUp from "./RidePopUp";

function CaptainHome() {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={hover_black} alt="hover-black"></img>
        <Link
          to="/captain-login"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="w-full h-full object-cover" src={map} alt="home"></img>
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10"
      >
        <RidePopUp />
      </div>
    </div>
  );
}

export default CaptainHome;
