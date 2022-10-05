import { Baselayout } from "@/Layouts";
import { LightNovels } from "@/Pages/LightNovels";
import React from "react";
import { Route, Routes } from "react-router-dom";
export interface LightNovelsRouterInterface {}

const LightNovelsRouter: React.FC<LightNovelsRouterInterface> = () => {
  return (
    <Routes>
      <Route path="/" element={<Baselayout />} />
      <Route index element={<LightNovels />} />
    </Routes>
  );
};

export default LightNovelsRouter;
