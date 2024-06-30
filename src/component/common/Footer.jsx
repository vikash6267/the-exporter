import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="lg:flex">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h4 className="text-3xl font-semibold text-gray-100 mb-4">
              The Bharat Exporter
            </h4>
            <p className="text-lg mb-4">
              Quality products delivered within 4-7 working days.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61553494371060"
                className="text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://wa.me/917827992155"
                className="text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/thebharatexporter?igshid=MTQ1dXY5eDRoejducQ=="
                className="text-gray-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="flex justify-center lg:justify-end">
              {/* Useful Links */}
              <div className="w-full lg:w-2/3">
                <h5 className="text-lg font-semibold mb-4 text-gray-100">
                  Useful Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="hover:text-white transition duration-300"
                    >
                      Admin Login
                    </a>
                  </li>
                </ul>
              </div>
              {/* Address Section */}
              <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                <h5 className="text-lg font-semibold mb-4 text-gray-100">
                  Contact Us
                </h5>
                <p className="text-sm">
                  The Bharat Exporter <br />
                  Vill. Dhadhani Ghazipur <br />
                  Uttar Pradesh 232336 <br />
                  +91 7827992155
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Bharat Exporter. All Rights
            Reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Powered By{" "}
            <a
              href="https://mahitechnocrafts.in"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              I-NEXT-ETS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
