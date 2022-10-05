import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
export interface LayoutInterface {}

const Layout: React.FC<LayoutInterface> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
