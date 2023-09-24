import React, { useState, useEffect } from "react";

const EditTaskForm = ({ task, onUpdateTask, onCancel }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(editedTask);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-5">Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg text-lg"
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
            value={editedTask.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg text-lg"
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
            value={editedTask.duedate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg text-lg"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg"
          >
            Update Task
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-red-500 hover:text-red-700 font-semibold py-3 px-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
