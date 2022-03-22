import React from "react";
import Three from "../images/3.jpg";
import Four from "../images/4.jpg";
import Five from "../images/5.jpg";
import Six from "../images/6.webp";

const Hero = () => {
  return (
    <div className=" bg-gray-100 w-full h-36   ">
      <div className="font-bold text-xl mx-3 my-3 ">
        <h1>Top/Featured Softwares</h1>
      </div>
      <div className=" grid grid-cols-4 mx-5 justify-center items-center rounded-lg ">
        <div className="flex justify items-center bg-white rounded-lg mx-5 hover:animate-bounce">
          <img
            src={Three}
            alt="img"
            className="h-20 w-20 col-span-1 rounded-lg"
          />
          <p className="text-base font-bold mx-5">Accounting software</p>
        </div>
        <div className="flex justify items-center bg-white rounded-lg mx-5 hover:animate-bounce">
          <img
            src={Four}
            alt="img"
            className="h-20 w-20 col-span-1 rounded-lg"
          />
          <p className="text-base font-bold mx-5">Finance and operations</p>
        </div>
        <div className="flex justify items-center bg-white rounded-lg mx-5 hover:animate-bounce">
          <img
            src={Five}
            alt="img"
            className="h-20 w-20 col-span-1 rounded-lg"
          />
          <p className="text-base font-bold mx-5">CRM Software</p>
        </div>
        <div className="flex justify items-center bg-white rounded-lg mx-5 hover:animate-bounce">
          <img
            src={Six}
            alt="img"
            className="h-20 w-20 col-span-1 rounded-lg "
          />
          <p className="text-base font-bold mx-5">Database Management</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
