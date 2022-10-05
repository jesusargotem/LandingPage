import React from "react";
import { Outlet } from "react-router-dom";
export interface BaselayoutInterface {}

const Baselayout: React.FC<BaselayoutInterface> = () => {
  return <Outlet />;
};

export default Baselayout;
