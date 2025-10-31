import React from 'react';
import Link from 'next/link';

const imgIcon8 = "https://www.figma.com/api/mcp/asset/5007a35d-59e9-4d0c-ace2-bd182d97984c";
const img = "https://www.figma.com/api/mcp/asset/551ad699-b32c-4c91-98ea-eeb14bcd38ad";

const TicketItem = ({ ticketId, driver, transport, weightIn, weightOut, timeIn, timeOut }) => {
  return (
    <Link href={`/tickets/${ticketId}`} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center">
        <div className="bg-gray-100 rounded-full p-2 mr-4">
          <img alt="truck icon" className="w-6 h-6" src={img} />
        </div>
        <div>
          <p className="font-medium">{ticketId}</p>
          <p className="text-sm text-gray-500">{driver} • {transport}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center">
          <p className="text-sm font-medium text-green-600 mr-4">Weight IN: {weightIn} kg</p>
          <p className="text-xs text-gray-500">{timeIn}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-700 mr-4">Weight OUT: {weightOut} kg</p>
          <p className="text-xs text-gray-500">{timeOut}</p>
        </div>
      </div>
    </Link>
  );
}

const TicketsPage = () => {
  const tickets = [
    { ticketId: 'TRK-001', driver: 'John Yes', transport: 'Terik Transport', weightIn: '54,000', weightOut: '12,000', timeIn: '7:30:00 AM', timeOut: '9:30:00 AM' },
    { ticketId: 'TRK-002', driver: 'Jane Doe', transport: 'Doe Deliveries', weightIn: '62,000', weightOut: '15,000', timeIn: '8:00:00 AM', timeOut: '10:00:00 AM' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img alt="tickets icon" className="w-6 h-6 mr-3" src={imgIcon8} />
        <h1 className="text-2xl font-bold">Tickets</h1>
      </div>
      <div className="flex flex-col gap-4">
        {tickets.map(ticket => <TicketItem key={ticket.ticketId} {...ticket} />)}
      </div>
    </div>
  );
};

export default TicketsPage;
