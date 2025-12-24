import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/shared/Footer";

const RootLayout = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // 50px scroll হলে effect হবে
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <div className="">
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-3xl' : 'bg-black'}`}>
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
