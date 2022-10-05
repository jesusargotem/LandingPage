import { Baselayout } from "@/Layouts";
import { Movies } from "@/Pages/Movies";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface MovieRouterInterface {}

const MovieRouter: React.FC<MovieRouterInterface> = () => {
  return (
    <Routes>
      <Route path="/" element={<Baselayout />} />
      <Route index element={<Movies />} />
    </Routes>
  );
};

export default MovieRouter;
