import React from "react";
import { Route } from "react-router-dom";
import Gagplants from "../../../../pages/gamepages/roblox/gag/plants.gag.jsx";
import Gagpets from "../../../../pages/gamepages/roblox/gag/pets.gag.jsx";
import Gagmutations from "../../../../pages/gamepages/roblox/gag/mutations.gag.jsx";
import Gagpetmutations from "../../../../pages/gamepages/roblox/gag/petmutations.gag.jsx";

const Gagrouter = () => {
  return (
    <>
      <Route path="/plants" element={<Gagplants />} />
      <Route path="/pets" element={<Gagpets />} />
      <Route path="/mutations" element={<Gagmutations />} />
      <Route path="/petmutations" element={<Gagpetmutations />} />

      <Route path="/calculate-plant-value" element={<div></div>} />
      <Route path="/calculate-pet-value" element={<div></div>} />
    </>
  );
};

export default Gagrouter;
