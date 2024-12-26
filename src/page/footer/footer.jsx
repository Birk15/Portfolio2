import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import { IMPRESSUM_ROUTE, DATASECURITY_ROUTE } from "../../const/const";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="mit">
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
        </div>
        <div className="right">
          <Link className="link" to={IMPRESSUM_ROUTE}>
            Impressum
          </Link>
          <hr />
          <Link className="link" to={DATASECURITY_ROUTE}>
            Datenschutz
          </Link>
        </div>
      </div>
      <div className="bottom">@I dont know what to write</div>
    </footer>
  );
};

export default Footer;
