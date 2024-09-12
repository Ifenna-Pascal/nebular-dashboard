'use client';
import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import WalletInfoCard from './walletInfoCard';
import WalletInfoCardApy from './walletInfoCardApy';

const BalanceOverview = () => {
  return (
       <div className="p-6 lg:p-12">
      <h1 className="hidden font-montserrat text-[14px]/[17px] text-white text-opacity-80 font-bold">
        Dashboard
      </h1>
      <div className="flex items-center  ">
        <h1 className="font-montserrat text-[22px]/[26px] lg:text-[48px] text-white font-bold mt-3 lg:mt-0">
          Ethereum
        </h1>

        <Image
          src={assets.arrowDownIcon}
          alt="arrow-down"
          width={15}
          className="w-[10px] lg:w-[15px] cursor-pointer ml-2 mt-4 lg:mt-2"
        />
      </div>
      <div className=" mt-4 lg:mt-10  flex md:flex-row flex-col w-full justify-between items-center">
        <WalletInfoCard
          styles="h-[50px] lg:h-[86px] w-full"
          text="Supply ETH"
          value="3"
        />
        <WalletInfoCard
          styles="h-[50px] w-full mt-4 lg:h-[86px]"
          text="Borrow ETH"
          value="2"
        />
      </div>
      <div className="mt-6 flex md:flex-row flex-col w-full justify-between md:items-center">
        <WalletInfoCardApy
          apy="-------"
          text="Your Suppply Balance"
          value="0.00"
          net="Net Apy"
          styles='w-full mb-3'
        />
        <WalletInfoCardApy
          apy="-------"
          text="Your Borrow Balance"
          value="0.00"
          net="Net Apy"
          styles='w-full'
        />
      </div>
    </div>
  );
};

export default BalanceOverview;
