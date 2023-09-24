import React from "react";
import banner from "../images/banner.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 py-32 px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
      <div className="absolute inset-x-0 bottom-0 h-12 bg-blue-200 wave-border"></div>

      <div className="lg:w-1/2">
        <img
          src={banner} // Replace with your image URL
          alt="Planner Image"
          className="w-full h-auto"
        />
      </div>

      <div className="lg:w-1/2 text-gray-800 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-6">
          Organize Your Work, Collaborate with Ease
        </h1>
        <p className="mb-8">
          PlannerPlus helps you streamline tasks, collaborate with teammates,
          and manage your tools effortlessly.
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-l-lg border-none outline-none bg-white text-gray-800 w-full max-w-xs"
          />
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-lg">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
