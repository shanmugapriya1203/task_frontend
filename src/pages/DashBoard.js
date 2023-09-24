import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskOverview from "../components/TaskOverview";
import { config } from "../config";

const Dashboard = () => {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      axios
        .get(`${config.api}/api/tasks/tasksByUserEmail/${userEmail}`)
        .then((response) => {
          setTasksData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  }, []);

  return (
    <div>
      <TaskOverview tasks={tasksData} setTasks={setTasksData} />
    </div>
  );
};

export default Dashboard;
