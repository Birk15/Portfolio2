import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  OFFERS_ROUTE,
  CONTACT_ROUTE,
  OPENING_ROUTE,
  LOCATION_ROUTE,
} from "../../const/const";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const handleResize = () => {
    window.innerWidth <= 740 ? setShowLinks(false) : setShowLinks(true);
  };
  window.addEventListener("resize", handleResize);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        {showLinks && (
          <div className="links">
            <Link className="link" to={HOME_ROUTE}>
              Home
            </Link>
            <Link className="link" to={ABOUT_ROUTE}>
              About
            </Link>
            <Link className="link" to={OFFERS_ROUTE}>
              Offers
            </Link>
            <Link className="link" to={CONTACT_ROUTE}>
              Contact
            </Link>
            <ScrollLink
              className="link"
              to="section1"
              smooth={true}
              duration={500}
            >
              Opening Hours
            </ScrollLink>
            <ScrollLink
              className="link"
              to="section1"
              smooth={true}
              duration={500}
            >
              Location
            </ScrollLink>
          </div>
        )}
        {!showLinks && (
          <img
            className="menu"
            onClick={() => setShowLinks(true)}
            src={Menu}
            alt=""
          />
        )}
        {showLinks && (
          <img
            className="menu close"
            onClick={() => setShowLinks(false)}
            src={Close}
            alt=""
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
