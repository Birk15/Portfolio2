import React from "react";
import "./home.css";
import OpeningHours from "../opening-hours/opening-hours";
import Location from "../location/location";
import StartImg from "../../assets/StartImg.png";

const Home = () => {
  return (
    <div className="home">
      <div className="start">
        <img src={StartImg} alt="" />
        <div className="right">
          <span>
            Max Musterman's <p className="fontstyle">Barbershop</p> <hr /> Der
            größe
            <p className="fontstyle">Eberbachs</p>
          </span>
          <p style={{ fontSize: 20 }}>Wir freuen uns auf dich!</p>
        </div>
      </div>
      <OpeningHours />
      <Location />
    </div>
  );
};

export default Home;
