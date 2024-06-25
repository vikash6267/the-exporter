import React from 'react';
import { FaStar, FaLeaf, FaTruck, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">The Bharat Exporter</h1>
        <p className="text-lg text-center mb-8">Your Trusted Source for Quality Agricultural Products and Spices</p>
        <p className="text-lg text-center mb-8">
          The Bharat Exporter is a leading manufacturer and supplier of agricultural products and spices, dedicated to providing high-quality goods to customers worldwide. With years of experience in the industry, we have established ourselves as a trusted name known for our commitment to excellence and customer satisfaction.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center">
            <FaStar className="text-4xl text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Quality Agricultural Commodities</h3>
              <p className="text-gray-700">
                Our company specializes in the production and distribution of a diverse range of agricultural commodities, including grains, beans, and peas.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLeaf className="text-4xl text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Premium-Quality Spices</h3>
              <p className="text-gray-700">
                We offer an extensive selection of premium-quality spices, carefully sourced and processed to preserve their natural flavor and aroma.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <p className="text-lg mb-8">
          At The Bharat Exporter, we prioritize quality and adhere to stringent standards throughout the manufacturing process. From sourcing raw materials to packaging the final products, every step is meticulously monitored to ensure consistency and freshness.
        </p>
        <p className="text-lg mb-8">
          In addition to our focus on quality, we are also dedicated to sustainability and ethical business practices. We work closely with farmers and suppliers to promote responsible farming methods and support local communities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customer Satisfaction</h2>
        <p className="text-lg mb-8">
          Our commitment to customer satisfaction extends beyond the quality of our products. We strive to provide exceptional service, with prompt delivery and responsive support, to meet the unique needs of our clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
        <p className="text-lg mb-8">
          Whether you are a wholesaler, retailer, or distributor, The Bharat Exporter is your trusted partner for premium agricultural products and spices. Experience the difference of working with a company that values integrity, quality, and customer satisfaction above all else.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
