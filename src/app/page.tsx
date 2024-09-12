'use client'
import { useState } from 'react';
import AssetsTable from './sections/home/assetsTable';
import BalanceOverview from './sections/home/balance-overview';
import EmptyState from './sections/home/emptyState';
import ModalContainer from './components/modal';
import WalletConnectModal from './components/modal/connect-modal';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const handleWalletSelect = () => {
    setWalletConnected(true);
    closeModal();
  };
  return (
    <div className="flex  pb-8 flex-col">
      <BalanceOverview />
      {
        walletConnected ? 
      <AssetsTable />
        : 
        <EmptyState  setOpen={setOpen} />
      }
       <ModalContainer open={open} close={closeModal}>
        <WalletConnectModal
          close={() => setOpen(false)}
          onWalletSelect={handleWalletSelect}
        />
      </ModalContainer>
    </div>
  );
}
