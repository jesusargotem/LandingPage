import { Baselayout } from "@/Layouts";
import { Series } from "@/Pages/Series";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface SeriesRouterInterface {}

const SeriesRouter: React.FC<SeriesRouterInterface> = () => {
  return (
    <Routes>
      <Route path="/*" element={<Baselayout />} />
      <Route index element={<Series />} />
    </Routes>
  );
};

export default SeriesRouter;
