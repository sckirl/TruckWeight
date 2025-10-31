
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b">
      <h1 className="text-xl font-bold">Vehicle Reports</h1>
      <div className="flex items-center">
        <span className="px-2 py-1 text-sm text-white bg-green-500 rounded-full">Scale Ready</span>
        <span className="ml-4 text-sm text-gray-500">10/27/2025, 2:40:42 PM</span>
      </div>
    </header>
  );
};

export default Header;
