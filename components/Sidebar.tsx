
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Digital Weight</h1>
        <p className="text-sm text-gray-500">Industrial Weighing System</p>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="px-4 py-2 bg-gray-900 text-white rounded-r-full">
            <a href="/" className="flex items-center">
              <span className="mr-2"></span>
              Tickets
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="/" className="flex items-center">
              <span className="mr-2"></span>
              Vehicle
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="/" className="flex items-center">
              <span className="mr-2"></span>
              Reports
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="/" className="flex items-center">
              <span className="mr-2"></span>
              User Management
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="/" className="flex items-center">
              <span className="mr-2"></span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-2">
            <p className="font-bold">Admin User</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-gray-200 rounded-md">Sign Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
