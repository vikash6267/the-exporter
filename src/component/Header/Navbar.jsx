import React, { useState } from 'react';
import { NavLink, useLocation, matchPath, Link } from 'react-router-dom';
import logo from "../../assests/logo2.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return matchPath({ path, end: true }, location.pathname);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="  w-screen   font-bold text-lg border-gray-300  ">
     <div className=' w-screen  bg-gradient-to-r from-gray-900 to-white  '>
     <div className="w-11/12 mx-auto flex justify-between items-center h-[80px]   mb-2  ">
        {/* Logo Section */}
        <div className="text-white text-lg font-bold">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[70px]  rounded-xl" />
                    </Link>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`relative text-gray-500 hover:text-gray-700 px-3 py-2 group ${
                isActive(link.path) ? 'active' : ''
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  isActive(link.path) ? 'w-[60%] mb-2' : 'w-0'
                } group-hover:w-[90%]`}
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
     </div>

  
    {/* Mobile Menu */}
    <div
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } transform transition-all duration-700 ease-in-out md:hidden overflow-hidden`}
      >
    <div className=' w-screen m-0 flex flex-col gap-2'>
    {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={`block  py-1 pl-2 rounded-lg ${isActive(link.path) ? 'bg-blue-950 text-white' : 'text-gray-900 '}`}
          >
            {link.name}
          </NavLink>
        ))}
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
