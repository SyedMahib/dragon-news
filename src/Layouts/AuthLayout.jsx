import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto py-10">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
