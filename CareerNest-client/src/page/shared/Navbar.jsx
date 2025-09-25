import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/Auth/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
     .then(()=> {
      console.log('signOut')
     })
     .catch(error => {
      console.log(error)
     })
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={""}>Submenu 2</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Career Nest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-5">
        {user ? (
          <>
            {/* <img src="" alt="" /> */}
            <button onClick={handleSignOut} className="btn btn-neutral">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to={"/register"} className="btn">
              Register
            </NavLink>
            <NavLink to={"/signIn"} className="btn">
              SignIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
