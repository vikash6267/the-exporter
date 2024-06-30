import axios from "axios";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddProduct = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
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

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("image", formData.image);

      const response = await axios.post(
        `${BASE_URL}/product/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Product created successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          name: "",
          category: "",
          image: null,
        });
      }
    } catch (error) {
      Swal.close();
      toast.error("Oops, something went wrong!");
    }
  };

  const categories = [
    "DryFruits",
    "Millet",
    "Pulses",
    "Spices",
    "Vegetable",
    "Powders",
    "Rice",
    "Fruits",
  ];

  return (
    <>
      <h1 className="text-blue-600 text-center text-3xl border border-b-2 border-blue-600 pb-2">
        Add Products
      </h1>
      <form
        onSubmit={handleSubmit}
        className="sm:grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-20 mt-10"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Name : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
  <label
    className="block text-gray-700 text-xl font-bold mb-2"
    htmlFor="category"
  >
    Category : <span className="text-red-500">*</span>
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
    name="category"
    id="category"
    value={formData.category}
    onChange={handleChange}
    required
  >
    <option value="" disabled>Select a category</option>
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl border-none"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex items-center justify-between mt-5">
          <button
            className="px-8 py-4 bg-black text-white rounded-md text-sm"
            type="submit"
          >
            Create Product
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
