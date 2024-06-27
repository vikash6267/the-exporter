import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard"; // Assuming this is where your ProductCard component is located
import one from "../../assests/home/rice.png"; // Adjust the path as per your actual folder structure
import two from "../../assests/home/corn.png";
import three from "../../assests/home/mung.png";
import four from "../../assests/home/peral.png"; // Adjust the variable name to lowercase 'four'
import { Link } from "react-router-dom";
import axios from "axios";

const ProductSection = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [product, setProduct] = useState([]);
  
  const getAllProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/getAll`);

      console.log(response)
      if (response?.data?.success) {
        setProduct(response.data.products);
        console.log(response.data.products)
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const products = product?.slice(0, 4);
  return (
    <>
      <div className="container mx-auto mt-8 w-screen  ">
        <div className=" flex flex-col items-center ">
          <h3 className="text-3xl font-bold mb-4 lg:w-[60%] w-[90%] text-center text-[#33536B]">
            Our Products Emporium Celebrating Quality and Tradition
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

          <div className=" text-[#5A5A5A] mt-3 lg:w-[60%] w-[90%] text-center">
            Our Products Emporium offers a curated selection of premium grains,
            honoring traditional cultivation methods
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
         {
         product.length===0 ? (
          <div className="flex w-screen min-h-[200px] items-center justify-center">
        <div className="spinner"></div>
      </div>
          ):(
            products.map((product, index) => (
            <ProductCard
              index={index}
              key={index}
              imageUrl={product.image}
              title={product.title}
              category={product.category}
            />
          ))
          )
         }
        </div>
      </div>

      <div className=" flex justify-center mt-[50px]">
        <Link
          className="bg-[#333333] text-white py-2 px-6 rounded-sm uppercase font-sans font-semibold hover:bg-[#e2571a] transition duration-300 ease-in-out"
          to="/product"
        >
          View All
        </Link>
      </div>
    </>
  );
};

export default ProductSection;
