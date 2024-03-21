import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
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
