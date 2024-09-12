import React, { FC } from 'react';
import { IWalletAPY } from '../type';
import Image from 'next/image';
import { assets } from '@/assets';

const WalletInfoCardApy: FC<IWalletAPY> = ({ text, apy, value, styles }) => {
  return (
    <div
      className={`w-[150px] md:w-[300px] lg:w-[400px] xl:w-[530px] flex items-center justify-between h-[60px] lg:h-[118px] bg-light-10 rounded-[8px] lg:rounded-[15px] px-4 lg:px-8 ${styles}`}
    >
      <div className="flex  flex-col">
        <span className="font-montserrat text-white text-[8px] lg:text-[16px]">{text}</span>
        <div className="flex items-center mt-2">
          <Image
            src={assets.ethNav}
            alt="eth-icon"
            width={24}
            className=" w-[10px] lg:w-[24px]"
          />
          <span className="text-light-70 ml-1 lg:ml-2 text-[10px] lg:text-[20px] font-montserrat font-semibold">
            ${value}
          </span>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <span className="font-montserrat text-white text-[8px] lg:text-[16px]">Net APY</span>
        <span className="font-montserrat text-white mt-2 text-[8px] lg:text-[16px]">
          {apy}
        </span>
      </div>
    </div>
  );
};

export default WalletInfoCardApy;
