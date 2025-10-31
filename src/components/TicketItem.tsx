
import React from 'react';

const TicketItem = ({ ticket }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="ml-4">
          <p className="font-bold">{ticket.id}</p>
          <p className="text-sm text-gray-500">{ticket.driver} • {ticket.transport}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center">
          <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-full">Weight IN</span>
          <p className="ml-2 font-bold">{ticket.weightIn}</p>
          <p className="ml-2 text-sm text-gray-500">{ticket.timeIn}</p>
        </div>
        <div className="flex items-center mt-2">
          <span className="px-2 py-1 text-xs text-white bg-gray-500 rounded-full">Weight OUT</span>
          <p className="ml-2 font-bold">{ticket.weightOut}</p>
          <p className="ml-2 text-sm text-gray-500">{ticket.timeOut}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
