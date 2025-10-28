import React from "react";
import { Route } from "react-router-dom";
import Robloxrouter from "./roblox/robloxrouter.jsx";

const Gamerouter = () => {
  return (
    <>
      <Route path="/roblox" element={<Robloxrouter />} />;
    </>
  );
};

export default Gamerouter;
