'use client';
import { assets } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import WalletInfoCard from './walletInfoCard';
import WalletInfoCardApy from './walletInfoCardApy';
import SupplyTable from '@/app/components/tables/SupplyTable';
import BorrowTable from '@/app/components/tables/BorrowTable';
import Button from '@/app/ui/button';
import WalletConnectModal from '@/app/components/modal/connect-modal';
import ModalContainer from '@/app/components/modal';
import AssetsTable from './assetsTable';

const BalanceOverview = () => {
  const [open, setOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [activeTab, setActiveTab] = useState('supply');

  const closeModal = () => setOpen(false);

  const handleWalletSelect = () => {
    setWalletConnected(true);
    closeModal();
  };

  const handleTabChange = (tab: 'supply' | 'borrow') => {
    setActiveTab(tab);
  };

  const Header = () => (
    <div className="p-6 lg:p-12 bg-cover bg-hero-bg bg-center bg-no-repeat bg-opacity-40">
       <h1 className='lg:hidden font-montserrat text-[14px]/[17px] text-white text-opacity-80 font-bold'>Dashboard</h1>
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
      <div className=" mt-4 lg:mt-10 flex w-full justify-between items-center">
        <WalletInfoCard styles="h-[40px] lg:h-[86px]" text="Supply ETH" value="3" />
        <WalletInfoCard styles="h-[40px] lg:h-[86px]" text="Borrow ETH" value="2" />
      </div>
      <div className="mt-6 flex w-full justify-between items-center">
        <WalletInfoCardApy
          apy="-------"
          text="Your Suppply Balance"
          value="0.00"
        />
        <WalletInfoCardApy
          apy="-------"
          text="Your Borrow Balance"
          value="0.00"
        />
      </div>
    </div>
  );

  if (walletConnected) {
    return (
      <>
        <Header />
        {/* <div className="lg:hidden flex flex-col bg-[#01291D] pt-5 px-4 md:px-10">
          <div className="flex justify-between bg-[#012016] w-full md:w-[680px] h-[39px] mx-auto shadow-lg">
            <button
              className={`${activeTab === 'supply' ? 'bg-[#01F8AF] text-[#012016] w-full md:w-[341px]' : 'bg-[#012016] w-full md:w-[339px] text-[#01F8AF]'} rounded-[3px]`}
              onClick={() => handleTabChange('supply')}
            >
              Supply
            </button>
            <button
              className={`${activeTab === 'borrow' ? 'bg-[#01F8AF] text-[#012016] w-full md:w-[341px]' : 'bg-[#012016] w-full md:w-[339px] text-[#01F8AF]'} rounded-[3px]`}
              onClick={() => handleTabChange('borrow')}
            >
              Borrow
            </button>
          </div>
          <div className="mt-4">
            {activeTab === 'supply' ? <SupplyTable /> : <BorrowTable />}
          </div>
        </div> */}
        <div 
        // className="hidden lg:flex justify-between gap-2 lg:gap-7 xl:gap-14  px-4 md:px-10 mx-auto"
        >
          

          <AssetsTable/>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-[2000px] mx-auto  h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col bg-[#FFFFFF] bg-opacity-5 py-6 px-2 m-10 rounded-[10px]  justify-center items-center">
        <Image
          src={assets.singlelogo}
          width={14}
          height={14}
          alt="search-icon"
          className="w-[48px] md:w-[75px] lg:w-[120px] lg:h-[130px]"
        />
        <p className="text-[10px]/[12px] md:text-[18px] lg:text-[24px]/[34px] mt-6 text-white font-inter font-medium xl:text-[28px]/[42px]">
          Please, connect your wallet
        </p>
        <p className="w-[80%] md:w-full text-[10px]/[12px] md:text-[18px]/[20px] text-center lg:text-[20px]/[38px] mt-2 md:mt-4 lg:mt-0 text-white text-opacity-70 font-normal font-inter mb-6 xl:text-[24px]/[42px]">
        Please connect your wallet to see your supplies, borrowings, and assets
        </p>
        
        <Button styles="bg-primary-gradient  items-center justify-center mb-4 font-inter text-[10px]  md:text-[16px] font-semibold text-white w-[120px] md:w-[168px] h-[40px] md:h-[50px]  rounded-[40px] md:rounded-[80px]"
         onClick={() => setOpen(true)}>
       
            Connect Wallet
          </Button>
      </div>

      <ModalContainer open={open} close={closeModal}>
        <WalletConnectModal
          close={() => setOpen(false)}
          onWalletSelect={handleWalletSelect}
        />
      </ModalContainer>
    </div>
  );
};

export default BalanceOverview;
