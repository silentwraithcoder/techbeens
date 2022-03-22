import React from "react";
import jira from "../images/jira.png";
import teams from "../images/teams.png";
import canva from "../images/canva.png";
import platform from "../images/platform.png";
import hubspot from "../images/hubspot.jpg";
import salesforce from "../images/salesforce.png";
import ps from "../images/ps.png";
import grammarly from "../images/grammarly.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
function Page4() {
  return (
    <div className="grid">
      <h1 className="text-4xl p-10 font-bold">Featured Softwares</h1>
      <br></br>
      {/*Nav Bar*/}
      <nav className="grid grid-cols-5 place-items-stretch px-4 text-gray-100 ">
        <div className=" bg-sky-900 rounded-2xl w-72 text-xs h-7 p-1 px-4 mx-2 cursor-pointer flex font-semibold">
          Name
        </div>
        <div className=" bg-sky-900 rounded-2xl w-56 text-xs h-7 p-1 px-4 mx-24 cursor-pointer flex font-semibold">
          Genre
          <div class="px-36 py-1">
            <AiOutlineDown fontSize="1.1em" />
          </div>
        </div>
        <div className="">
          <div className=" bg-sky-900 rounded-2xl w-28 text-xs h-7 p-1 px-4 mx-28 cursor-pointer flex font-semibold absolute">
            Year
            <div class="px-12 py-1">
              <AiOutlineDown fontSize="1.1em" />
            </div>
            <div className=" hidden relative">
              {/* To be used as dropdown */}
              <ul className="bg-sky-900 list-none rounded-md p-3 w-28 px-10">
                <li className="hover:text-gray-400">2022</li>
                <li className="hover:text-gray-400">2021</li>
                <li className="hover:text-gray-400">2020</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" bg-sky-900 rounded-2xl w-56 text-xs h-7 p-1 px-4 mx-2 cursor-pointer flex font-semibold">
          Category
          <div class="px-32 py-1">
            <AiOutlineDown fontSize="1.1em" />
          </div>
        </div>
        <form>
          <div classname="relative flex align-middle text-gray-100 focus-within:text-gray-100">
            <div className="absolute p-1.5 px-2 pointer-events-none">
              <FiSearch />
            </div>
            {/* Search Bar */}
            <input
              id="icon"
              type="text"
              placeholder="Search"
              className="rounded-2xl p-1 px-7 text-xs h-7 bg-sky-900 text-gray-200 w-64"
            ></input>
          </div>
        </form>
      </nav>
      <br></br>
      <br></br>
      <div className="grid grid-cols-3 gap-6 px-6 py-1 xs:grid-cols-1">
        {/* Our Product Details Division */}
        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={jira} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Jira Software
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={teams} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Microsoft Teams
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={canva} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Canva
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={grammarly} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Grammarly
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={hubspot} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Hubspot
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange"/>
                <AiFillStar fontSize="0.9em" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={salesforce} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Salesforce
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange"/>
                <AiFillStar fontSize="0.9em" color="orange"/>
                <AiFillStar fontSize="0.9em" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-72">
          <div className="relative transform hover:scale-110 hover:bg-opacity-50">
            <img src={ps} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Adobe Photoshop
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-72">
          <div className="relative transform hover:scale-110 max-h-40  hover:bg-opacity-50">
            <img src={platform} className="rounded-md select-none"></img>
            <div className="absolute mt-2 px-1 text-md font-semibold text-black">
              Platform
              <div className="flex gap-1 py-1">
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" color="orange" />
                <AiFillStar fontSize="0.9em" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;