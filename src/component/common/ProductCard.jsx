import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ProductCard = ({ imageUrl, title, category, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    product: title,
    quantity: "",
    email: "",
    contactNumber: "",
    country: "",
    state: "",
    address: "",
  });

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const buttonColorClass = index % 2 === 0 ? "bg-[#5A5A5A]" : "bg-[#e2571a]";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });

      const response = await axios.post(
        `${BASE_URL}/contact/enquiry`,
        formData
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Inquiry sent successfully!`,
          text: `We will get back to you soon.`,
          icon: "success",
        });
        setFormData({
          name: "",
          companyName: "",
          product: title,
          quantity: "",
          email: "",
          contactNumber: "",
          country: "",
          state: "",
          address: "",
        });
        closeModal(); // Close modal after form submission
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your inquiry. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white text-center">
     <div className="bg-white shadow-md rounded-lg overflow-hidden border-2">
  <img src={imageUrl} alt="Product" className="w-full" />
  <div className="px-6 py-4">
    <div className="font-bold text-2xl mb-2 text-teal-700 font-sans">
      {title}
    </div>
    <p className="text-gray-600 text-base mb-4">
      <span className="font-bold">Category:</span> {category}
    </p>
    <button
      onClick={openModal}
      className={`text-white w-full font-serif py-2 px-4 rounded ${buttonColorClass} hover:bg-opacity-75`}
      
    >
      Send Inquiry
    </button>
  </div>
</div>


      {/* Modal */}
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Send Inquiry
                    </h3>
                    <div className="mt-2">
                      {/* Form Fields */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label htmlFor="name" className="input-label">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="companyName"
                              className="input-label"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="product" className="input-label">
                              Product
                            </label>
                            <input
                              type="text"
                              id="product"
                              name="product"
                              value={formData.product}
                              readOnly
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="quantity" className="input-label">
                              Quantity
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="email" className="input-label">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              autoComplete="email"
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label
                              htmlFor="contactNumber"
                              className="input-label"
                            >
                              Contact Number
                            </label>
                            <input
                              type="tel"
                              id="contactNumber"
                              name="contactNumber"
                              value={formData.contactNumber}
                              onChange={handleInputChange}
                              required
                              autoComplete="tel"
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="country" className="input-label">
                              Country
                            </label>
                            <input
                              type="text"
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="state" className="input-label">
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                          <div className="w-full px-3">
                            <label htmlFor="address" className="input-label">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="input-field"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e2571a] text-base font-medium text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Send Inquiry
                          </button>
                          <button
                            type="button"
                            onClick={closeModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
