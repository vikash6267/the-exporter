import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../component/Header/Navbar";
import ProductCard from "../component/common/ProductCard";
import two from "../assests/home/corn.png";
import four from "../assests/home/peral.png";
import bean1 from "../assests/home/black.png";
import bean2 from "../assests/home/soyabean.png";
import bean3 from "../assests/home/kabuli.png";
import bean4 from "../assests/home/mung.png";
import one from "../assests/home/rice.png";
import Footer from "../component/common/Footer";
import contact from "../assests/contact.jpg"

const grains = [
  { imageUrl: one, title: "Rice", category: "Grains" },
  { imageUrl: two, title: "Maize (Corn)", category: "Grains  " },
  { imageUrl: four, title: "Pearl Millet (Bajra)", category: "Grains" },
  ,
];

const beans = [
  {
    name: "Mung bean",
    category: "Beans & Peas",
    image: bean4,
  },
  {
    name: "Kabuli chickpeas ",
    category: "Beans & Peas",
    image: bean3,
  },
  {
    name: "Black Chickpeas",
    category: "Beans & Peas",
    image: bean1,
  },
  {
    name: "Soya bean ",
    category: "Beans & Peas",
    image: bean2,
  },
];

function AllProduct() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const [product, setProduct] = useState([]);
  const [dryFruits, setDryFruits] = useState([]);
  const [millet , setMillet ] = useState([]);
  const [pulses , setPulses ] = useState([]);
  const [spices , setSpices ] = useState([]);
  const [vegetable , setVegetable ] = useState([]);
  const [powders , setPowders ] = useState([]);



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

  useEffect(() => {
    const dryFruitsProducts = product.filter(item => item.category === "DryFruits");
    const Millet  = product.filter(item => item.category === "Millet");
    const Pulses  = product.filter(item => item.category === "Pulses");
    const Spices  = product.filter(item => item.category === "Spices");
    const Vegetable  = product.filter(item => item.category === "Vegetable");
    const powders  = product.filter(item => item.category === "Powders");
   
   
   
   
    setDryFruits(dryFruitsProducts);
    setMillet(Millet)
    setPulses(Pulses)
    setSpices(Spices)
    setVegetable(Vegetable)
    setPowders(powders)
   
  }, [product]);
  return (
    <>
      <Navbar />




      <div className=" w-screen">
      <div className="relative flex justify-center items-center w-full min-h-[50vh] -mt-2 bg-gradient-to-r bg-black">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
    style={{ backgroundImage: `url(https://www.nuskhakitchen.com/public/img/uploads/products/75701693206563.jpg)` }}
  />
  <div className="relative z-50 text-[#fff5f5] font-semibold text-5xl bg-[#e2571a] p-1 rounded-2xl">
    Products
  </div>
</div>
{
product.length===0 ? (   <div className="flex w-screen min-h-[200px] items-center justify-center">
        <div className="spinner"></div>
      </div>) : (<>

            {/* Dry Fruites */}
            <div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Dry Fruits</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {dryFruits?.map((product, index) => (
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



          {/* Millet */}
        <div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Millet</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {millet?.map((product, index) => (
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
          {/* Pulses */}
        <div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Pulses</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center  mt-12 ">
              {pulses?.map((product, index) => (
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


    {/* Spices */}
    <div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Spices</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {spices?.map((product, index) => (
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




{/* Vegetable */}
<div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Vegetable</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {vegetable?.map((product, index) => (
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

{/* powders */}
<div className=" w-11/12 mx-auto  mt-[60px]">
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Powders</h3>
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12 ">
              {powders?.map((product, index) => (
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






      </>)
}



      </div>
      <Footer />
    </>
  );
}

export default AllProduct;
