import React from 'react';
import { FaStar, FaLeaf } from 'react-icons/fa';
import Navbar from "../component/Header/Navbar";
import Footer from "../component/common/Footer";
import image from "../assests/home/v.jpg"; // Import your background image

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed', // Optional: Adjust attachment as needed
        }}
      >
        <div className="bg-white bg-opacity-80"> {/* Adjust opacity and color */}
          <div className="max-w-5xl mx-auto py-8 px-4 text-gray-800">
            <section className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to The Bharat Exporter</h1>
              <p className="text-lg mb-8">Your Trusted Source for Quality Agricultural Products and Spices</p>
              <p className="text-lg mb-8">
                The Bharat Exporter is a leading manufacturer and supplier of agricultural products and spices, committed to delivering excellence worldwide. With a legacy of quality and customer satisfaction, we ensure that every product meets the highest standards from farm to table.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Discover Our Range</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                  <FaStar className="text-4xl text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Agricultural Commodities</h3>
                    <p className="text-gray-700">
                      Explore our diverse selection of grains, beans, and pulses, sourced from the best farms and processed to perfection for superior taste and nutrition.
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                  <FaLeaf className="text-4xl text-gray-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium-Quality Spices</h3>
                    <p className="text-gray-700">
                      Indulge in our exquisite range of spices, handpicked and carefully processed to preserve their natural aroma and flavor, enhancing every culinary creation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality</h2>
              <p className="text-lg mb-8 text-gray-800">
                At The Bharat Exporter, quality is paramount. From sourcing the finest ingredients to rigorous quality control measures, we ensure that every product reflects our dedication to excellence.
              </p>
              <p className="text-lg mb-8 text-gray-800">
                Our commitment extends beyond quality. We embrace sustainable practices and ethical sourcing to support local communities and preserve the environment for future generations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Customer Satisfaction Guaranteed</h2>
              <p className="text-lg mb-8 text-gray-800">
                We prioritize customer satisfaction with every interaction. Our responsive service and timely delivery ensure that your needs are met with efficiency and care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
              <p className="text-lg mb-8 text-gray-800">
                Whether you are a wholesaler, retailer, or distributor, partner with The Bharat Exporter for premium agricultural products and spices. Experience the difference of working with a company driven by integrity, quality, and customer satisfaction.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
