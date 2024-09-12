import Button from '@/app/ui/button';
import { assets } from '@/assets';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

const EmptyState = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] bg-opacity-5 py-6 px-2 m-10 rounded-[10px]  justify-center items-center">
      <Image
        src={assets.singlelogo}
        width={14}
        height={14}
        alt="search-icon"
        className="w-[38px] md:w-[65px] lg:w-[100px] lg:h-[100px]"
      />
      <p className="text-[10px]/[12px] md:text-[18px] lg:text-[24px]/[34px] mt-3 text-white font-inter font-medium xl:text-[24px]/[42px]">
        Please, connect your wallet
      </p>
      <p className="w-[80%] md:w-full text-[10px]/[12px] md:text-[18px]/[20px] text-center lg:text-[18px]/[38px] mt-2 md:mt-4 lg:mt-0 text-white text-opacity-70 font-normal font-inter mb-6 xl:text-[24px]/[42px]">
        Please connect your wallet to see your supplies, borrowings, and assets
      </p>

      <Button
        styles="bg-primary-gradient  items-center justify-center mb-4 font-inter text-[10px]  md:text-[16px] font-semibold text-white w-[120px] md:w-[168px] h-[40px] md:h-[50px]  rounded-[40px] md:rounded-[80px]"
        onClick={() => setOpen(true)}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default EmptyState;
