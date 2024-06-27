import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard"; // Assuming this is where your ProductCard component is located
import { Link } from "react-router-dom";
import axios from "axios";

const ProductSection = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/getAll`);
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = () => {
    if (loading) {
      return (
        <div className="flex w-screen min-h-[200px] items-center justify-center">
          <div className="spinner"></div>
        </div>
      );
    }

    return products.slice(0, 4).map((product, index) => (
      <ProductCard
        key={index}
        index={index}
        imageUrl={product.image}
        title={product.name}
        category={product.category}
      />
    ));
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderProducts()}
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
