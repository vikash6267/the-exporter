import React from "react";
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
  return (
    <>
      <Navbar />
      <div className=" w-screen">
        <div className="text-center flex justify-center items-center text-[#33536B] w-full font-semibold text-5xl min-h-[140px] mt-2 bg-gradient-to-r from-teal-400 to-cyan-500">
          Products
        </div>

        <div className=" w-11/12 mx-auto mt-[60px]">
          {/* Grains */}
          <div>
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">Grains</h3>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center w-full place-items-center ">
              {grains.map((product, index) => (
                <ProductCard
                  index={index}
                  key={index}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  category={product.category}
                />
              ))}
            </div>
          </div>

          <div className=" mt-[60px]">
            {/* Heading */}
            <div className=" flex flex-col  w-full items-center">
              <h3 className="  text-4xl font-fjalla text-[#33536B]">
                Beans & Peas
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
            </div>

            {/* Products */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center w-full place-items-center ">
              {beans.map((product, index) => (
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
      <Footer />
    </>
  );
}

export default AllProduct;
