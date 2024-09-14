
import React from 'react';
import Image from 'next/image'; 
import ProgressBar from '@/app/components/progressbar/index';
 import { assets } from '@/assets';




 // SupplyInfo Component
interface SupplyInfoProps {
  cautionIcon: string;
  text: string;
}


export const SupplyInfo: React.FC<SupplyInfoProps> = ({ cautionIcon, text }) => (
  <div className="flex gap-2 text-white justify-start items-center md:justify-start px-2 md:px-6 mt-5">
    <p className="text-[12px] lg:text-[20px]/[24px] font-montserrat text-center md:text-left font-regular text-gray-400">
      {text}
    </p>
    <Image
      src={cautionIcon}
      width={14}
      height={14}
      alt="caution-icon"
      className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
    />
  </div>
);


// ProgressWithDetails Component
interface ProgressWithDetailsProps {
  progress: number;
  totalSupplied: string;
  suppliedText: string;
  warningIcon: string;
}


export const ProgressWithDetails: React.FC<ProgressWithDetailsProps> = ({
  progress,
  totalSupplied,
  suppliedText,
  warningIcon,
}) => (
  <div className="flex md:flex-row space-x-6 items-center px-2 md:px-6 text-white mt-6 md:mt-10">
    <ProgressBar progress={progress} />
    <div>
      <div className="flex text-white items-center gap-2">
        <p className="text-[11px] md:text-[14px] lg:text-[9px] xl:text-[17px] font-montserrat font-regular text-white text-opacity-60">
          {suppliedText}
        </p>
        <Image
          src={warningIcon}
          width={14}
          height={14}
          alt="caution-icon"
          className="w-3 md:w-4 lg:w-4 text-white text-opacity-60"
        />
      </div>
      <p className="text-[14px] md:text-[12px] mt-1 lg:text-[10px] xl:text-[20px] font-montserrat font-medium text-white">
        {totalSupplied}
      </p>
      <p className="text-[11px] md:text-[12px] lg:text-[9px] mt-1 xl:text-[17px] font-montserrat font-normal text-white text-opacity-60">
        {totalSupplied}
      </p>
    </div>
  </div>
);

// MarketDetails Component
interface MarketDetailsProps {
  title: string;
  amount: string;
}


export const MarketDetails: React.FC<MarketDetailsProps> = ({ title, amount }) => (
  <div className='flex justify-between  items-center mt-6  font-montserrat'>
    <p className='text-white text-opacity-70 text-[10px]/[12px] lg:text-[18px]/[21px] font-medium '>{title}</p>
   <p className='text-white text-opacity-70 text-[10px]/[12px] lg:text-[18px]/[21px] font-normal '>{amount}</p>
  </div>
);