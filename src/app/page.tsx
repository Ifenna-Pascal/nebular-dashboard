import AssetsTable from './sections/home/assetsTable';
import BalanceOverview from './sections/home/balance-overview';

export default function Home() {
  return (
    <div className="flex flex-col"> 
      <BalanceOverview />
      <AssetsTable />
    </div>
  );
}
