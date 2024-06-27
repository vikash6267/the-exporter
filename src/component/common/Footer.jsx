import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-400 pt-8 pb-6 mt-[100px]">
    <div className="container mx-auto px-4">
      {/* <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold text-blue-700">
            The Bharat Exporter
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-blue-600">
            Delivery within 4-7 working days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6 flex">
            <button
              className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FaFacebookF />
            </button>
            <button
              className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FaWhatsapp />
            </button>
            <button
              className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FaInstagram />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto justify-center flex flex-col ">
              <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    Admin Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                About Us
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    The Bharat Exporter Vill. Dhadhani Ghazipur Uttar Pradesh
                    232336
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                  >
                    7827992155
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <hr className="my-6 border-blue-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1 flex gap-2">
            Copyright © <span id="get-current-year">2024</span>
            <div className="">
              Powered By -
              <a
                href="https://mahi-technocrafts.vercel.app/"
                className="text-white hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                I-NEXT-ETS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
