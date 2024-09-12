import AssetsTable from './sections/home/assetsTable';
import BalanceOverview from './sections/home/balance-overview';

export default function Home() {
  return (
    <div className='hidden lg:flex flex-coln'>
      <BalanceOverview />
      <AssetsTable />
    </div>
  );
}
