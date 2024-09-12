import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import { IWalletCard } from '../type';

const WalletInfoCard = ({ text, value, styles }: IWalletCard) => {
  return (
    <div
      className={`w-[150px] md:w-[300px] lg:w-[400px] xl:w-[530px] flex items-center justify-between bg-light-10 rounded-[8px] lg:rounded-[15px] px-2 lg:px-8 ${styles}`}
    >
      <div className="flex items-center">
        <Image
          src={assets.ethIcon}
          alt="eth-icon"
          width={35}
          className="w-[15px] lg:w-[35px] mr-1 lg:mr-3"
        />
        <span className="font-montserrat text-white text-[8px] lg:text-[16px]">
          {text}
        </span>
      </div>
      <div className=" w-[20px] lg:w-[36px] text-white text-[8px] lg:text-[14px] bg-light-15 flex items-center justify-center h-[20px] lg:h-[36px] rounded-full">
        {value}
      </div>
    </div>
  );
};

export default WalletInfoCard;
