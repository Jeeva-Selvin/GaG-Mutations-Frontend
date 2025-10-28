import React from "react";
import { Route } from "react-router-dom";
import Gagrouter from "./gag/gagrouter.jsx";

const Robloxrouter = () => {
  return (
    <>
      <Route path="/gag" element={<Gagrouter />} />
    </>
  );
};

export default Robloxrouter;
