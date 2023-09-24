import React from 'react';
import image from '../images/8401.jpg'
const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-16 px-4 lg:px-32">
        <h2 className="text-3xl font-semibold text-center mb-8">
          About PlannerPlus
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={image} 
              alt="About PlannerPlus"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <p className="text-gray-800 mb-4">
              PlannerPlus is your all-in-one task management solution designed
              to streamline your work and enhance collaboration with your team.
            </p>
            <p className="text-gray-800 mb-4">
              With PlannerPlus, you can effortlessly plan, execute, and track
              your projects, manage tasks and deadlines, and schedule meetings
              for better team collaboration.
            </p>
            <p className="text-gray-800">
              We are dedicated to providing you with the tools you need to
              achieve your goals and improve your productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
