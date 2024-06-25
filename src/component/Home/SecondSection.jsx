import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { SlPlane } from "react-icons/sl";
import { GiForkKnifeSpoon } from "react-icons/gi";

const object = [
    {
        id: 1,
        title: "Global Flavor Fusion",
        icon: <AiOutlineGlobal />,
        desc: "Indulge in a harmonious blend of international culinary traditions, expertly crafted to tantalize your taste buds and transport you around the world"
    },
    {
        id: 2,
        title: "Exotic Epicurean Exports",
        icon: <SlPlane />,
        desc: "Indulge in a harmonious blend of international culinary traditions, expertly crafted to tantalize your taste buds and transport you around the world"
    },
    {
        id: 3,
        title: "Sustainable Gastronomic Delights ",
        icon: <GiForkKnifeSpoon />,
        desc: "Delight in guilt-free indulgence with our commitment to eco-conscious practices, offering you premium experience"
    },
];

function SecondSection() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {object.map(item => (
                    <div key={item.id} className="flex flex-col items-center text-center">
                        <div className="text-5xl text-[#df794d] mb-4 mt-4">
                            {item.icon}
                        </div>
                        <h2 className="text-xl  mb-2 text-[#33536B] font-fjalla">{item.title}</h2>
                        <p className=' text-[#5A5A5A] text-[14px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondSection;
