import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import WalletInfoCard from './walletInfoCard';
import WalletInfoCardApy from './walletInfoCardApy';

const BalanceOverview = () => {
  return (
    <div className="p-4 lg:p-12">
      <div className="flex items-center">
        <h1 className="font-montserrat text-[24px] lg:text-[48px] text-white font-bold">
          Ethereum
        </h1>
        <Image
          src={assets.arrowDownIcon}
          alt="arrow-down"
          width={15}
          className="w-[15px] cursor-pointer ml-2 mt-2"
        />
      </div>
      <div className="mt-6 md:mt-10 flex-col md:flex md:flex-row w-full justify-between items-center">
        <WalletInfoCard styles="h-[86px] mb-4" text="Supply ETH" value="3" />
        <WalletInfoCard styles="h-[86px]" text="Borrow ETH" value="2" />
      </div>
      <div className="mt-6 flex md:flex-row flex-col w-full justify-between md:items-center">
        <WalletInfoCardApy
          apy="-------"
          text="Your Suppply Balance"
          value="0.00"
          styles="mb-4"
        />
        <WalletInfoCardApy
          apy="-------"
          text="Your Borrow Balance"
          value="0.00"
        />
      </div>
    </div>
  );
};

export default BalanceOverview;
