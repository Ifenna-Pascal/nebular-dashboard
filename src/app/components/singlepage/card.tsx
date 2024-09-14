import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  details: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, details, buttonLabel }) => {
  return (
    <div className="w-full px-1 lg:px-9 font-montserrat">
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
            Wallet Balance
          </p>
          <div className=" flex items-center gap-2 mt-2">
            <Image
              src={assets.usdtIcon}
              width={14}
              height={14}
              alt="caution-icon"
              className=" w-5 lg:w-8 "
            />
            <p className="text-white  text-[12px]/[14px] lg:text-[20px]/[24px]">
              10<span className="text-white text-opacity-70">.000</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2 text-white ">
            <Image
              src={assets.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
            />
            <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
              {details} Limit
            </p>
          </div>
          <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
            0.0000USDT
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#5457DC4D] py-3 px-4 rounded-md border border-[#FFFFFF4D] mt-5">
        <div className="flex gap-5 items-center">
          <p className="text-white text-opacity-70  text-[12px]/[14px] lg:text-[20px]/[24px] font-semibold">
            20.10
          </p>
          <div className="border border-r-white border-opacity-40 h-6"></div>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
              USDT
            </p>
            <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
              -$0.00
            </p>
          </div>
          <div className="border border-r-white border-opacity-40 h-6"></div>
          <div className="bg-[#FFFFFF0D] p-2">
            <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[20px]/[24px] font-normal">
              Max
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <div className=" flex items-center gap-2 mt-2">
          <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
            Price
          </p>
          <Image
            src={assets.caution}
            width={14}
            height={14}
            alt="caution-icon"
            className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
          />
        </div>
        <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
          $1.00
        </p>
      </div>

      <div className="flex items-center justify-between mt-5">
        <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
          {details} APY
        </p>
        <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
          1.08%
        </p>
      </div>

      <div className="flex items-center justify-between mt-5">
        <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
          {details} Balance
        </p>
        <p className="text-white text-opacity-70 text-[10px]/[12px] lg:text-[16px]/[19px] font-light">
          $4.0USDT
        </p>
      </div>
      <button className="bg-[#32367C4D] text-white w-[100%] py-4 text-[12px]/[14px] lg:text-[20px]/[24px] mt-5 rounded hover:bg-[#32367C4D] hover:bg-opacity-30 transition border border-white border-opacity-10">
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
