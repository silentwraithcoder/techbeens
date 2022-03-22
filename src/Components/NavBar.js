import React from "react";
import { Link } from "react-router-dom";
import t2 from "../images/tech2.png";

const NavBar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-20 box-border outline-1 outline-offset-1 outline-blue-600 p-4  bg-blue-600 text-white  text-xl  "
      role="navigation"
    >
      <Link to="/" className="pl-8  rounded-xl">
        <img src={t2} alt="Techbeens" className="h-14 rounded-lg bg-white " />
      </Link>
      <div className="px-4 cursor xl:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-4 xl:block hidden">
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500 "
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500"
          to="/"
        >
          Software Categories
        </Link>
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500"
          to="/"
        >
          For vendors
        </Link>
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500"
          to="/"
        >
          Guides and Searches
        </Link>
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500"
          to="/"
        >
          Write a Review
        </Link>
        <Link
          className="p-4 mx-1 rounded-2xl hover:bg-white hover:text-blue-500"
          to="/"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;