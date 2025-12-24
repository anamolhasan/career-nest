import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from '../../assets/logo/career-nest.png'

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
     .then(()=> {
      console.log('successful signOut')
     })
     .catch(error => {
      console.log(error,' failed to sign out stay here. ')
     })
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/my-applications"}>My Applications</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto ">
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
        <Link to={'/'} className="flex justify-center items-center text-xl">
        <img src={logo} alt="" className="w-20 p-0 m-0" />
        Career Nest
        </Link>
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
