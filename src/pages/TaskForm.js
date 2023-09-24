import React, { useState } from "react";
import axios from "axios";
import { config } from "../config";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "", duedate: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");
    const data = {
      ...task,
      userEmail,
    };
    try {
      const response = await axios.post(
        `${config.api}/api/tasks/savetask`,
        data
      );
      if (response.status === 201) {
        console.log("Task submitted:", task);
        alert("Task submitted successfully!");
        setTask({ title: "", description: "", duedate: "" });
      } else {
        console.error("Unexpected status code", response.status);
      }
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ml-8">
      <div className="p-4 w-full max-w-xl">
        {" "}
        {/* Adjust max-w-xl to control the width */}
        <h2 className="text-xl font-semibold mb-5">Create a New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg text-lg" // Larger input boxes
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg text-lg" // Larger textarea
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="duedate" className="block text-gray-600">
              Due Date
            </label>
            <input
              type="date"
              id="duedate"
              name="duedate"
              value={task.duedate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
