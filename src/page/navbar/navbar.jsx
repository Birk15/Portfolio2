import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import Up from "../../assets/Up.svg";
import Down from "../../assets/Down.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  OFFERS_ROUTE,
  CONTACT_ROUTE,
} from "../../const/const";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className={`links ${showLinks ? "showLinks" : ""}`}>
          <div className="home-link">
            <Link className="link" to={HOME_ROUTE}>
              Home
              <img className="dropdown-icon" src={Down} alt="dropdown icon" />
            </Link>

            <div className="dropdown">
              <ScrollLink
                className="down-item"
                to="opening-hours"
                smooth={easeInOutQuad}
                duration={1000}
              >
                Opening Hours
              </ScrollLink>
              <ScrollLink
                className="down-item"
                to="location"
                smooth={easeInOutQuad}
                duration={1000}
              >
                Location
              </ScrollLink>
            </div>
          </div>

          <Link className="link" to={ABOUT_ROUTE}>
            About
          </Link>
          <Link className="link" to={OFFERS_ROUTE}>
            Offers
          </Link>
          <Link className="link" to={CONTACT_ROUTE}>
            Contact
          </Link>
        </div>
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
      <img
        onClick={() => animateScroll.scrollToTop()}
        className="up-img"
        src={Up}
        alt=""
      />
    </header>
  );
};

export default Navbar;
