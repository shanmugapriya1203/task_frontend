import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { config } from "../config";

const Team = () => {
  const [projectName, setProjectName] = useState("");
  const [teamMemberName, setTeamMemberName] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [projectUpdates, setProjectUpdates] = useState([]);

  const fetchTeamUpdates = async () => {
    try {
      const response = await axios.get(`${config.api}/api/team/teamUpdates`); // Replace with your backend API URL
      setProjectUpdates(response.data);
    } catch (error) {
      console.error("Error fetching team updates:", error);
    }
  };

  useEffect(() => {
    fetchTeamUpdates();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newUpdate = {
      projectName,
      teamMemberName,
      updateText,
      dueDate,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/team/teamUpdates",
        newUpdate
      );
      if (response.status === 201) {
        const updatedUpdates = [...projectUpdates, response.data];
        setProjectUpdates(updatedUpdates);
        setProjectName("");
        setTeamMemberName("");
        setUpdateText("");
        setDueDate("");
      } else {
        console.error("Unexpected status code", response.status);
      }
    } catch (error) {
      console.error("Error creating team update:", error);
    }
  };

  const handleDeleteUpdate = async (updateId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/team/teamUpdates/${updateId}`
        );

        if (response.status === 200) {
          console.log("Team update deleted successfully.");
          setProjectUpdates((prevUpdates) =>
            prevUpdates.filter((update) => update._id !== updateId)
          );
        } else {
          console.error("Unexpected status code", response.status);
        }
      } catch (error) {
        console.error("Error deleting team update:", error);
      }
    } else {
      console.log("Deletion canceled");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold">Team Information</h1>
        <p>Welcome to our team page.</p>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Add Team Update</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="projectName" className="block text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                className="border border-gray-300 rounded w-full p-2 text-base md:text-lg lg:text-xl"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="teamMemberName" className="block text-gray-700">
                Team Member Name
              </label>
              <input
                type="text"
                id="teamMemberName"
                className="border border-gray-300 rounded w-full p-2 text-base md:text-lg lg:text-xl"
                value={teamMemberName}
                onChange={(e) => setTeamMemberName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="updateText" className="block text-gray-700">
                What's Updated?
              </label>
              <textarea
                id="updateText"
                className="border border-gray-300 rounded w-full p-2 text-base md:text-lg lg:text-xl"
                rows="4"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dueDate" className="block text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                className="border border-gray-300 rounded w-full p-2 text-base md:text-lg lg:text-xl"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-base md:text-lg lg:text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Updates</h2>
        {projectUpdates.map((update, index) => (
          <div key={index} className="bg-white rounded shadow p-4 mb-4 flex">
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {update.projectName}
              </h3>
              <p>
                <span style={{ color: "blue" }}>Team Member:</span>{" "}
                {update.teamMemberName}
              </p>
              <p>
                <span style={{ color: "blue" }}>Update:</span>{" "}
                {update.updateText}
              </p>
            </div>
            <button
              onClick={() => handleDeleteUpdate(update._id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
