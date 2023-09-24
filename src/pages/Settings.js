import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import axios from "axios";
import { config } from "../config";

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setFormData((prevData) => ({
        ...prevData,
        email: storedEmail,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${config.api}/api/auth/update`,
        formData
      );
      alert("Profile updated");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded w-1/2 p-2 text-base md:text-lg lg:text-xl"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded w-1/2 p-2 text-base md:text-lg lg:text-xl"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded w-1/2 p-2 text-base md:text-lg lg:text-xl"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border border-gray-300 rounded w-1/2 p-2 text-base md:text-lg lg:text-xl"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-base md:text-lg lg:text-xl"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
