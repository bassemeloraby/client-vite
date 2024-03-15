import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
