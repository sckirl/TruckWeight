
import Header from '@/components/Header';
import TicketsList from '@/components/TicketsList';
import WeightDisplay from '@/components/WeightDisplay';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-4">
        <WeightDisplay />
        <TicketsList />
      </main>
    </div>
  );
}
