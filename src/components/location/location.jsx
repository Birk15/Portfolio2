import React from "react";
import "./location.css";
import Ort from "../../assets/Ort.svg";

const Location = () => {
  return (
    <div className="location" id="location">
      <div className="headline">
        <h1>Location</h1>
        <a
          href="https://www.google.com/maps/place/Michaelskirche/@49.462181,8.987123,9156m/data=!3m1!1e3!4m6!3m5!1s0x4797ee2af76d6d99:0x8c3c1bbbc0d8a4d3!8m2!3d49.4621805!4d8.9871225!16s%2Fg%2F12203mhj?hl=de&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" // öffnet link in neuer Seite
          rel="noopener noreferrer" // mehr Sicherheit
        >
          <img src={Ort} alt="" />
        </a>
      </div>
      <div className="loc">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20745.453964166576!2d8.949013674316415!3d49.46218049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797ee2af76d6d99%3A0x8c3c1bbbc0d8a4d3!2sMichaelskirche!5e0!3m2!1sde!2sde!4v1734702664547!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Location;
