import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className=" p-5 grid grid-cols-3 text-white ">
      <Link className=" " to="/">
        <div className="relative flex p-5 mx-5 rounded-lg  col-span-1 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50">
          <p className="text-base font-bold mx-5 ">
            Save your overhead business expenses by 70%
          </p>
          <div className="absolute bottom-0 right-0 h-10 w-10 mx-3 my-3 ">
            <GiTakeMyMoney color="white" fontSize="2em" className="" />
          </div>
        </div>
      </Link>
      <Link className=" " to="/">
        <div className="relative p-5 mx-5 rounded-lg  col-span-1 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50">
          <p className="text-base font-bold mx-5 \">
            Browse different categories, read verified reviews, compare and
            quote
          </p>
          <div className="absolute bottom-0 right-0 h-10 w-10 mx-3 my-3">
            <FaBalanceScale color="white" fontSize="2em" className="" />
          </div>
        </div>
      </Link>
      <Link className=" " to="/">
        <div className="relative p-5 mx-5 rounded-lg  col-span-1 h-28 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50">
          <p className="text-base font-bold mx-5 ">100% free to use</p>
          <div className="absolute bottom-0 right-0 h-10 w-10 mx-3 my-3">
            <FiPercent color="white" fontSize="2em" className="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
