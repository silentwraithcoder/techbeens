import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isopen, toggle }) => {
  return (
    <div
      className={
        isopen ? "grid grid-rows-6 text-center items-center " : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/">
        Software Categories
      </Link>
      <Link className="p-4" to="/">
        For vendors
      </Link>
      <Link className="p-4" to="/">
        Guides and Searches
      </Link>
      <Link className="p-4" to="/">
        Write a Review
      </Link>
      <Link className="p-4" to="/">
        Login
      </Link>
    </div>
  );
};

export default Dropdown;