import React from 'react';
import Sidebar from './SideBar';
import TaskForm from '../pages/TaskForm';


const TaskComponent = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <TaskForm/>
    </div>
  );
};

export default TaskComponent;
