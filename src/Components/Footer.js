import React from "react"
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function footer()
{
    return (
      <div className="grid grid-cols-4 text-gray-200 w-full static bottom-0">
        <a
          href="#"
          className="text-md bg-blue-700 col-span-4 h-13 flex justify-center py-4 hover:bg-blue-600"
        >
          <div className="">BACK TO TOP</div>
        </a>
        <div className=" bg-cyan-800 col-span-4 h-64">
          <br></br>
          <div className="flex justify-evenly">
            <ul className="list-none">
              <li className="text-md font-semibold text-gray-100 py-3 hover:text-yellow-200 hover:text-xl">
                GENERAL
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">About</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Market Radar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Review Rewards</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Contact Us</p>
                </a>
              </li>
            </ul>
            <ul className="list-none">
              <li className="text-md font-semibold text-gray-100 py-3 hover:text-yellow-200 hover:text-xl">
                RESOURCES
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Blog</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Research & Guides</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Free Report Library</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">To be filled</p>
                </a>
              </li>
            </ul>
            <ul className=" list-none">
              <li className="text-md font-semibold text-gray-100 py-3 hover:text-yellow-200 hover:text-xl">
                VENDORS
              </li>
              <li>
                <a href="#">
                  <button>
                    <p className="text-sm bg-blue-700 rounded-sm p-1 w-32 hover:bg-blue-600">
                      Become a Vendor
                    </p>
                  </button>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Vendor login</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Claim a listing</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 hover:text-yellow-200">Vendor Policy</p>
                </a>
              </li>
            </ul>
            <ul className="px-16 list-none">
              <li className="text-md font-semibold text-gray-100 py-3 hover:text-yellow-200 hover:text-xl">
                FOLLOW
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 flex gap-1 hover:text-yellow-200">
                    <AiOutlineTwitter />
                    Follow us Twitter
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 flex gap-1 hover:text-yellow-200">
                    <FaFacebookF />
                    Follow us Facebook
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-sm py-1 flex gap-1 hover:text-yellow-200">
                    <FaLinkedinIn />
                    Find us on LinkedIn
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default footer;