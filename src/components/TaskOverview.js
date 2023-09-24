import React, { useState } from "react";
import Sidebar from "./SideBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import axios from "axios";
import EditTaskForm from "../pages/EditTaskForm";
import { config } from "../config";

const TaskOverview = ({ tasks, setTasks }) => {
  const [editedTask, setEditedTask] = useState(null);

  const handleEditTask = (task) => {
    setEditedTask(task);
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/update/${updatedTask.id}`,
        updatedTask
      );

      if (response.status === 200) {
        console.log("Task updated successfully.");
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
        setEditedTask(null);
      } else {
        console.error("Unexpected status code", response.status);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${config.api}/api/tasks/${taskId}`);
        setTasks(tasks.filter((task) => task.id !== taskId));
        console.log("Task deleted successfully.");
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    } else {
      console.log("Deletion canceled");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>
      <div className="w-3/4 p-4 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Task Overview</h2>

        {editedTask && (
          <EditTaskForm
            task={editedTask}
            onUpdateTask={handleUpdateTask}
            onCancel={handleCancelEdit}
          />
        )}

        {/* Conditional rendering when there are no tasks */}
        {tasks.length <= 0 ? (
          <div className="text-center">
            <p>Create a task</p>
            <FaArrowLeft className="text-blue-500 text-2xl" />
          </div>
        ) : (
          // All Tasks
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 w-full"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold">{task.title}</h4>
                    <div className="space-x-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEditTask(task)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600">{task.description}</p>
                  <div className="mt-2">
                    <span className="font-semibold">Due Date:</span>{" "}
                    {task.duedate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskOverview;
