import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTasks, FaCalendarAlt, FaUsers, FaCog } from 'react-icons/fa';
import { MdCreate } from "react-icons/md";
import { FiX } from "react-icons/fi"; // Import the close (X) icon
import logo from '../images/title.png';
import Responsive from 'react-responsive';

const Desktop = (props) => <Responsive {...props} minWidth={992} />;
const Mobile = (props) => <Responsive {...props} maxWidth={991} />;

const Sidebar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { label: 'Create', path: '/tasks', icon: <MdCreate color="#FF5733" /> },
    { label: 'My Tasks', path: '/dashboard', icon: <FaTasks color="#33FF57" /> }, 
    { label: 'Calendar', path: '/calendar', icon: <FaCalendarAlt color="#5733FF" /> },
    { label: 'Team', path: '/team', icon: <FaUsers color="#FF5733" /> },
    { label: 'Settings', path: '/settings', icon: <FaCog color="black" /> },
  ];

  return (
    <div>
      <Desktop>
        <aside className="bg-gradient-to-r from-blue-100 to-blue-300 w-64 p-6 h-[100vh]">
          <div className="flex items-center justify-between mb-6">
            <img
              src={logo}
              alt="Planner Logo"
              className="w-12 h-12"
            />
          </div>
          <nav>
            <ul className="space-y-10">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center ${
                    location.pathname === item.path ? 'text-blue-500' : 'text-black'
                  }`}
                >
                  {item.icon}
                  <Link to={item.path} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Desktop>
      
      <Mobile>
      <button className="font-bold text-2xl text-blue-500 md:hidden" onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'} {/* Toggle between 'Menu' and 'Close' */}
        </button>


         <aside
          className={`bg-white w-64 p-6 h-full fixed top-0 left-0 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}
        >
          <div className="flex items-center justify-end mb-6">
            <button
              className="text-2xl text-blue-500 focus:outline-none"
              onClick={toggleMenu}
            >
              &#10005;
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`text-black`}
                >
                  {item.icon}
                  <Link to={item.path} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Mobile>
    </div>
  );
};

export default Sidebar;
