import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTasks, FaCalendarAlt, FaUsers, FaCog } from 'react-icons/fa';
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
    { label: 'Create', path: '/tasks', icon: '📝' },
    { label: 'Calendar', path: '/calendar', icon: '📅' },
    { label: 'Team', path: '/team', icon: '👥' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div>
      <Desktop>
        <aside className="bg-gradient-to-r from-blue-100 to-blue-300 w-64 p-6 h-[100vh]">
          {/* Increased the height to 100vh (100% of the viewport height) */}
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
          Menu
        </button>
        {menuOpen && (
          <nav className="md:hidden">
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
        )}
      </Mobile>
    </div>
  );
};

export default Sidebar;
