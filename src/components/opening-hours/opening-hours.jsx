import React, { useEffect } from "react";
import "./opening.css";

const OpeningHours = () => {
  return (
    <div className="paralax" id="opening-hours">
      <h1 style={{ fontSize: 40 }}>OpeningHours</h1>
      <div className="weekdays">
        <div className="weekday">
          <p>Montag:</p>
          <b>9:00 - 18:00</b>
        </div>
        <div className="weekday">
          <p>Dienstag:</p>
          <b>9:00 - 18:00</b>
        </div>
        <div className="weekday">
          <p>Mittwoch:</p>
          <b>9:00 - 18:00</b>
        </div>
        <div className="weekday">
          <p>Donnerstag:</p>
          <b>9:00 - 18:00</b>
        </div>
        <div className="weekday">
          <p>Freitag:</p>
          <b>9:00 - 18:00</b>
        </div>
        <div className="weekday">
          <p>Samstag:</p>
          <b>9:00 - 13:00</b>
        </div>
        <div className="weekday">
          <p>Sonntag:</p>
          <b>geschlossen</b>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
