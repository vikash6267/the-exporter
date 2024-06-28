import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard"; // Assuming this is where your ProductCard component is located
import { Link } from "react-router-dom";
import axios from "axios";
import { FaAppleAlt, FaSeedling, FaLeaf, FaPepperHot, FaCarrot, FaFlask } from 'react-icons/fa';

const categories = [
  { name: 'Dry Fruits', icon: <FaAppleAlt />, link: '/DryFruits' },
  { name: 'Millets', icon: <FaSeedling />, link: `/Millet ` },
  { name: 'Pulses', icon: <FaLeaf />, link: '/Pulses' },
  { name: 'Spices', icon: <FaPepperHot />, link: '/Spices' },
  { name: 'Vegetables', icon: <FaCarrot />, link: '/Vegetable' },
  { name: 'Powders', icon: <FaFlask />, link: '/Powders' },
];




const ProductSection = () => {


  return (
    <>
      <div className="container mx-auto mt-8 w-screen">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-4 lg:w-[60%] w-[90%] text-center text-[#33536B]">
            Discover Our Premium Selection
          </h3>
          <div className="flex items-center w-[75px]">
            <div className="h-0.5 bg-[#e2571a]"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div
              className="h-[4px] rounded-full w-[10px] flex-grow"
              style={{ backgroundColor: "#e2571a" }}
            ></div>
          </div>

          <div className="text-[#5A5A5A] mt-3 lg:w-[60%] w-[90%] text-center">
            Explore a handpicked collection of premium grains, sourced and
            crafted with tradition and quality in mind.
          </div>
        </div>

        <div className="bg-gray-100 p-8">
  



        <div className="bg-gray-100 p-1">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link to={`category${category.link}`} key={index} className="transform transition-transform hover:scale-105">
            <div className="bg-white p-1 rounded-lg shadow-md flex flex-col items-center hover:bg-gray-200">
              <div className="text-4xl text-gray-700 mb-4 hover:text-blue-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>





    </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          className="bg-[#333333] text-white py-2 px-6 rounded-sm uppercase font-sans font-semibold hover:bg-[#e2571a] transition duration-300 ease-in-out"
          to="/product"
        >
          View All Products
        </Link>
      </div>
    </>
  );
};

export default ProductSection;
