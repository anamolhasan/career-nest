import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo/career-nest.png";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="footer sm:footer-horizontal text-base-content p-10 ">
        <aside>
          <Link
            className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-400 flex items-center justify-center"
            to={"/"}
          >
            <img src={logo} alt="" className="w-48 " />
            Career Nest
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
      <div className="p-10 border-t">
        <p className="text-center">
          {" "}
          ACME Industries Ltd. Providing reliable tech since 1992
        </p>
        <p className="text-center pt-3">
          ( © By {new Date().getFullYear()} ) ANAMOL HASAN
        </p>
      </div>
    </div>
  );
};

export default Footer;
