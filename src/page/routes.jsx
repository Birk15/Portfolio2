import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import About from "../components/about/about";
import Offers from "../components/offers/offers";
import Contact from "../components/contact/contact";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  OFFERS_ROUTE,
  CONTACT_ROUTE,
} from "../const/const";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={OFFERS_ROUTE} element={<Offers />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
