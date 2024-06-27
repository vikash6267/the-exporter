// SupplyChain.js

import React from 'react';
import PieChart from '../common/Piachart'; // Assuming PieChart component is imported

const SupplyChain = () => {
    return (
        <section className="supply-chain-section mt-[40px]">
            <div className="supply-chain-overlay"></div>
            <div className="relative z-10 flex  flex-col lg:flex-row items-center justify-center h-screen lg:w-[80%] mx-auto">
                {/* Left content section with Pie Chart */}
                <div className="lg:w-1/2 w-11/12 mx-auto shadow-lg rounded-lg  mb-8 lg:mb-0 grid grid-cols-2 lg:gap-20">
                    <PieChart percent={80} title="Millets" color="#e2571a" />
                    <PieChart percent={90} title="Grains" color="#e2571a" />
                    <PieChart percent={70} title="Frozen Foods" color="#e2571a" />
                    <PieChart percent={87} title="Spices" color="#e2571a" />
                </div>

                {/* Right content section */}
                <div className="lg:w-1/2 w-screen  shadow-lg rounded-lg p-6">
                    <p className="text-[#e2571a] font-sans italic lg:text-xl mt-4">Supply Chain Technology & Customized Solutions</p>
                    <h2 className="text-white lg:text-4xl text-2xl font-sans font-bold mt-2">Elevating Global Cuisine with Millets, Grains, Spices, Frozen Culinary Marvels</h2>
                    <p className="text-white mt-2 leading-relaxed text-[11px] lg:text-base ">
                   The Bharat Exporter pioneers a culinary journey like no other, sourcing the finest millets, spices, grains, frozen delights, and spices from around the world. With an unwavering commitment to quality, we are your premier grain and spices supplier in Surat, ensuring that each ingredient surpasses expectations. We redefine excellence in every aspect of our offerings, setting new standards in taste and satisfaction.


                    </p>
                 
                </div>
            </div>
        </section>
    );
};

export default SupplyChain;
