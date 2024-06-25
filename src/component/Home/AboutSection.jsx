import React, { useEffect, useState } from 'react';
import image from "../../assests/home/about.jpg";
import { Link } from 'react-router-dom';
function AboutSection() {
    const [count, setCount] = useState(1);

 
    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => (prevCount >= 25 ? 25 : prevCount + 1));
        }, 10);
    
        if (count === 25) {
          clearInterval(interval); // Clear interval when count reaches 25
        }
    
        return () => clearInterval(interval); // Cleanup function to clear interval on unmount
      }, [count]); // Dependency on count ensures useEffect runs on count change
    
  return (
    <div className="w-11/12 mx-auto mt-20 mb-40 flex justify-between  flex-wrap-reverse">

      {/* Image Section */}
      <div className="relative lg:w-[44%] md:w-[44%] w-full">
        <img
          src={image}
          alt="Background"
          className="w-full h-[40vh] lg:h-full object-cover"
        />
  

  <div className="absolute top-8 left-4 text-white font-bold text-lg z-10 text-center bg-white lg:p-4 p-1 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <p className="lg:text-6xl text-[#e2571a]">{count}+</p>
        <p className=' text-[#5A5A5A]'>Years of Experience</p>
      </div>
      </div>

      

      {/* Data Section */}
      <div className="lg:w-1/2 md:w-1/2 w-11/12 mx-auto bg-white shadow-lg rounded-lg p-6">
        <p className="text-[#e2571a] font-fjalla italic text-lg">About The Bharat Exporter</p>
        <h2 className="text-[#33536B] text-4xl font-sans font-bold mt-2">GRAIN AND SPICES SUPPLIER IN SURAT</h2>
        <p className="text-[#5A5A5A] mt-2 leading-relaxed">
          Saivleen International is an active import-export enterprise dedicated
          to enabling seamless global trade. With a firm commitment to goodness,
          we specialize in connecting businesses worldwide, bridging gaps in the
          market with efficiency and reliability. We prioritize ethical business
          practices and foster trust-based relationships with clients and
          partners. Our extensive network and a deep understanding of
          international trade regulations ensure smooth transactions and mutually
          beneficial partnerships. As a premier grain and Spice supplier in
          Surat, we provide top-quality products to our clients on time.
          Leveraging our expertise, we also excel as Grain and Spices exporters
          in Surat, delivering excellence in every shipment. At Saivleen
          International, we strive to exceed expectations, driving growth and
          prosperity for our clients and stakeholders.
        </p>
        <div className="mt-4">
          <Link
            to="/product"
            className="bg-[#e2571a] text-white py-2 px-6 rounded-lg uppercase font-sans font-semibold hover:bg-[#5A5A5A] transition duration-300 ease-in-out"
          >
            Discover All Products
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default AboutSection;
