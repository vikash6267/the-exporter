import React from 'react';
import { FaSeedling, FaGlobe, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';


const sections = [
    {
      icon: <FaBalanceScale className="text-[150px] text-green-600 mr-4" />,
      title: 'Superior Quality',
      description:
        'As a premier grain and spices supplier in Surat, Saivleen International meticulously selects and sources only the finest ingredients, ensuring that each product meets our stringent quality standards.'
    },
    {
      icon: <FaGlobe className="text-[150px] text-blue-600 mr-4" />,
      title: 'Global Diversity',
      description:
        'At Saivleen International, we are dedicated to sustainable practices, from responsible sourcing to eco-friendly packaging. Our commitment to sustainability ensures that our products not only meet high-quality standards but also contribute positively to the environment.'
    },
    {
      icon: <FaSeedling className="text-[150px] text-green-600 mr-4" />,
      title: 'Commitment to Sustainability',
      description:
        'Our extensive range of offerings, including millets, rice, frozen foods, and spices, makes us a top choice as a grain and spices exporter in Surat. We provide a diverse selection to cater to every palate and culinary preference.'
    },
    {
      icon: <FaHandsHelping className="text-[150px] text-blue-600 mr-4" />,
      title: 'Exceptional Customer Service',
      description:
        'When you choose Saivleen International as your grain and spices supplier, you can expect exceptional customer service at every step of the journey. We prioritize customer satisfaction above all else, offering prompt and personalized service to meet your needs and exceed your expectations.'
    }
  ];

const WhyChoose = () => {
  return (
    <div className="w-11/12 mx-auto py-8 px-4">

<div className=' w-full flex justify-between flex-wrap gap-3'>
    <div className=' '>
        <p className=' text-[#df794d] font-fjalla italic lg:text-2xl text-xl'>Why Choose Us</p>
        <p className=' lg:text-5xl text-4xl text-[#33536B] font-semibold font-sans'>Why Choose Us</p>
    </div>

    <div className=' lg:w-[50%] w-full'>
    Explore the reasons why Saivleen International stands out as your premier choice for sourcing premium quality culinary delights

    </div>
</div>

<div className="flex flex-wrap justify-center -mx-4 mt-[50px]">
        {sections.map((section, index) => (
          <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
            <div className="flex items-center">
              {section.icon}
              <div>
                <h2 className="text-xl  mb-2 text-[#33536B] font-fjalla ">{section.title}</h2>
                <p className="text-[#5A5A5A] text-sm">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
