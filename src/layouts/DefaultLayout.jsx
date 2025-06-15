import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import MainContent from "../components/common/MainContent";

const DefaultLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-row p-5 gap-3">
      <Sidebar />
      <div className="flex flex-col gap-3 flex-1">
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  );
};

export default DefaultLayout;
