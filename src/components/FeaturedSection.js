import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-16 px-4 lg:px-32 text-black">
      <div className="container mx-auto">
        <div className="text-left mb-6">
          <h2 className="text-3xl font-semibold mb-2">PlannerPlus Features</h2>
          <p className="text-gray-800 italic">
            Your All-In-One Task Management Solution
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="bg-blue-200 p-6 rounded-lg flex-1">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Project Management
              </h3>
              <p className="text-gray-700">
                Effectively plan, execute, and track your projects with
                PlannerPlus.
              </p>
            </div>
          </div>

          <div className="bg-blue-200 p-6 rounded-lg flex-1">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Task Management
              </h3>
              <p className="text-gray-700">
                Stay organized by managing tasks, deadlines, and priorities in
                one place.
              </p>
            </div>
          </div>

          <div className="bg-blue-200 p-6 rounded-lg flex-1">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Meeting
              </h3>
              <p className="text-gray-700">
                Schedule and organize meetings effortlessly for better
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
