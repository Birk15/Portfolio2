import React from "react";
import "./home.css";
import OpeningHours from "../opening-hours/opening-hours";
import Location from "../location/location";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <OpeningHours />
      <Location />
    </div>
  );
};

export default Home;
