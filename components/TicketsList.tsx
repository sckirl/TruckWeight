
import React from 'react';
import TicketItem from './TicketItem';

const TicketsList = () => {
  const tickets = [
    {
      id: 'TRK-001',
      driver: 'John Yes',
      transport: 'Terik Transport',
      weightIn: '54,000 kg',
      timeIn: '7:30:00 AM',
      weightOut: '12,000 kg',
      timeOut: '9:30:00 AM',
    },
    {
      id: 'TRK-002',
      driver: 'Alvin Candra',
      transport: 'Terik Transport',
      weightIn: '54,000 kg',
      timeIn: '8:30:00 AM',
      weightOut: '12,000 kg',
      timeOut: '10:30:00 AM',
    },
    {
      id: 'JNE-001',
      driver: 'Jevon Smith',
      transport: 'JNE Transport',
      weightIn: '12,000 kg',
      timeIn: '10:00:00 AM',
      weightOut: '54,000 kg',
      timeOut: '11:30:00 AM',
    },
    {
      id: 'JNT-001',
      driver: 'John Smith',
      transport: 'JNT Transport',
      weightIn: '22,000 kg',
      timeIn: '9:30:00 AM',
      weightOut: '34,000 kg',
      timeOut: '17:30:00 AM',
    },
    {
      id: 'YES-001',
      driver: 'John Smith',
      transport: 'YES Transport',
      weightIn: '10,000 kg',
      timeIn: '17:30:00 AM',
      weightOut: '40,000 kg',
      timeOut: '18:30:00 AM',
    },
    {
      id: 'AAPL-001',
      driver: 'Tim Cook',
      transport: 'Apple Transport',
      weightIn: '13,000 kg',
      timeIn: '8:30:00 AM',
      weightOut: '54,000 kg',
      timeOut: '9:30:00 AM',
    },
    {
      id: 'TRK-001',
      driver: 'John Smith',
      transport: 'ABC Transport',
      weightIn: '10,000 kg',
      timeIn: '9:30:00 AM',
      weightOut: '70,000 kg',
      timeOut: '10:30:00 AM',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Tickets</h2>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsList;
