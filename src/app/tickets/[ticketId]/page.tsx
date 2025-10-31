import React from 'react';

const TicketDetailsPage = ({ params }: { params: { ticketId: string } }) => {
  // Mock data for a ticket. In a real application, you would fetch this data based on the ticketId.
  const ticket = {
    ticketNo: params.ticketId,
    vehicleNo: 'DRTWRK',
    goods: 'SOAP THING',
    relation: '-',
    driverName: 'ALVIN CANDRA',
    weightIn: '54.000',
    weightOut: '12.000',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Ticket Details: {ticket.ticketNo}</h1>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Ticket No.</div>
          <div>{ticket.ticketNo}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Vehicle No.</div>
          <div>{ticket.vehicleNo}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Goods</div>
          <div>{ticket.goods}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Relation</div>
          <div>{ticket.relation}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold">Driver Name</div>
          <div>{ticket.driverName}</div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="font-bold">Weight IN</div>
          <div className="flex items-center">
            <span className="bg-gray-200 p-2 rounded-l-md">{ticket.weightIn}</span>
            <span className="bg-gray-300 p-2 rounded-r-md">KG</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="font-bold">Weight OUT</div>
          <div className="flex items-center">
            <span className="bg-gray-200 p-2 rounded-l-md">{ticket.weightOut}</span>
            <span className="bg-gray-300 p-2 rounded-r-md">KG</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <button className="bg-green-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600">
          SAVE
        </button>
        <button className="bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-400">
          CANCEL
        </button>
        <button className="bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-400">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TicketDetailsPage;