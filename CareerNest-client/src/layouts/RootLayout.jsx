import React from "react";
import { Outlet } from "react-router";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <nav className="bg-black">
        <Navbar />
      </nav>
      <main  className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
