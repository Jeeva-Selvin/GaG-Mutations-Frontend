import React from "react";
import Notfound from "../pages/notfound.jsx";
import Home from "../pages/normfiles/home.jsx";
import About from "../pages/normfiles/about.jsx";
import Gamerouter from "./games/gamesrouter.jsx";
import Contact from "../pages/normfiles/contact.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

const Mainrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/about" element={<About />} />;
      <Route path="/contact" element={<Contact />} />;
      <Route path="/games" element={<Gamerouter />} />;
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/signin" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Mainrouter;
