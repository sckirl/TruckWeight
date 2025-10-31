
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TicketsList from '@/components/TicketsList';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">
          <TicketsList />
        </main>
      </div>
    </div>
  );
}
