import React, { useEffect, useState } from "react";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/common/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "../component/common/ProductCard";
import axios from "axios";

function Category() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const { cate } = useParams();
  const [display, setDisplay] = useState([]);
  const [product, setProduct] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getAllProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/getAll`);

      console.log(response);
      if (response?.data?.success) {
        setProduct(response.data.products);
        console.log(response.data.products);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    const displa = product.filter((item) => item.category === cate);
    setDisplay(displa);
  }, [product]);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar></Navbar>

      <div>
        <div className="relative flex justify-center items-center w-full   -mt-2 bg-gradient-to-r bg-black">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: `url(https://www.umaexports.net/images/ttm-pagetitle-bg.jpg)`,
            }}
          />
          <div className="relative z-50 text-[#fff5f5] font-semibold text-5xl  p-1 rounded-2xl py-[80px] ">
            {cate}
            <div className="flex items-center w-[100px] mt-[10px]">
                <div className="h-0.5 bg-[#e2571a]"></div>
                <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
                <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
                <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
                <div
                  className="h-[4px] rounded-full w-[10px] flex-grow"
                  style={{ backgroundColor: "#e2571a" }}
                ></div>
              </div>
          </div>
        </div>

        <div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
           

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {display?.map((product, index) => (
                <ProductCard
                  index={index}
                  key={index}
                  imageUrl={product.image}
                  title={product.name}
                  category={product.category}
                />
              ))}
            </div>
          </div>

       



        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Category;
