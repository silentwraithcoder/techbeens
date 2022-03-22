import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div className="items-center  mx-6 my-6  box-border outline outline-offset-2 outline-2 shadow-sm shadow-lgrey outline-lgrey h-10 rounded-lg  text-md text-dgrey">
        <section>
          <form className="grid grid-cols-7 mx-2 justify-centre rounded-lg">
            <input
              type="text"
              className="col-span-2  rounded-lg mx-2 outline-none"
              placeholder=" Search by Name"
            />
            <input
              type="text"
              className="col-span-2  rounded-lg mx-2 outline-none"
              placeholder=" Search by Category"
            />
            <input
              type="text"
              className="col-span-2  rounded-lg mx-2 outline-none"
              placeholder=" Search by Vendor"
            />
            <Link
              className="col-span-1 flex  justify-center items-center box-border outline  outline-2 outline-blue-500 bg-blue-600 rounded-lg h-10 text-white hover:bg-white hover:text-blue-500"
              to="/"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http//www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;
