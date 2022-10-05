import { Baselayout } from "@/Layouts";
import { Anime } from "@/Pages/Anime";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface AnimesRouterInterface {}

const AnimesRouter: React.FC<AnimesRouterInterface> = () => {
  return (
    <Routes>
      <Route path="/" element={<Baselayout />} />
      <Route index element={<Anime />} />
    </Routes>
  );
};

export default AnimesRouter;
