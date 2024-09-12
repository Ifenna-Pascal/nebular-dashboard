import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import { IWalletCard } from '../type';

const WalletInfoCard = ({ text, value, styles }: IWalletCard) => {
  return (
    <div
      className={`lg:w-[530px] flex items-center justify-between bg-light-10 rounded-[15px] px-4 lg:px-8 ${styles}`}
    >
      <div className="flex items-center">
        <Image
          src={assets.ethIcon}
          alt="eth-icon"
          width={35}
          className="w-[25px] md:w-[35px] mr-3"
        />
        <span className="font-montserrat text-white text-[14px] md:text-[16px]">
          {text}
        </span>
      </div>
      <div className="md:w-[36px] w-[30px] text-white text-[14px] bg-light-15 flex items-center justify-center h-[30px] md:h-[36px] rounded-full">
        {value}
      </div>
    </div>
  );
};

export default WalletInfoCard;
