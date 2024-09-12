'use client';

import Image from 'next/image';
import { marketTable } from '../../__mockdata__/tables';
import { assets } from '@/assets';
import { useRouter } from 'next/navigation';

const Table = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto px-4 md:px-10 py-10 ">
      <div className="border border-[#302E2E] bg-gradient-to-b from-[#0303033B] to-[#31324282] shadow-md min-h-[400px] rounded-lg px-8">
        <div className="flex flex-row items-center justify-between px-4 lg:px-6 border-b border-[#302E2E] pb-5">
          <h3 className="text-white mt-6 text-[14px] md:text-[25px] xl:text-[30px] font-sora font-semibold">
          Market
          </h3>
          <div className="  relative bg-[#6767B033] bg-opacity-20 flex items-center border border-white border-opacity-30 p-3 mt-8   rounded-[10px] ">
              <Image
                src={assets.searchIcon}
                width={18}
                height={18}
                alt="search-icon"
                className="absolute left-3"
              />
              <input
                type="text"
                className="w-full ml-6 bg-transparent placeholder:text-light-200 text-white text-opacity-60 focus:outline-none font-montserrat text-light-200 lg:text-[10px] xl:text-[14px]"
                placeholder="Search assets name"
              />
            </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <table className="min-w-full  ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                {[
                  'Assets',
                  'Total Supplied',
                  'Supply APY',
                  'Total Borrowed',
                  'Borrow APY, Variable',
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-5 text-left text-[10px] md:text-[12px] xl:text-[16px] text-white text-opacity-60 font-semibold"
                  >
                    <span className="flex items-center">
                      {header}
                      <Image
                        src={assets.sortIcon}
                        className="ml-2  "
                        alt="sort-icon"
                        width={10}
                        height={10}
                      />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {marketTable.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#FFFFFF0D] cursor-pointer"
                  onClick={() => router.push(`/market/${index}`)}
                >
                  <td className="px-6 py-10 flex items-center">
                    <Image
                      src={assets.usdtIcon}
                      alt="coin-icon"
                      width={24}
                      height={24}
                    />
                    <span className="ml-3 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                      {data.name}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.collateral}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.tvl}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.mcr}
                  </td>
                  <td className="px-6 py-5 text-[12px] md:text-[14px] xl:text-[18px] text-white">
                    {data.apr}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="bg-[#FFFFFF1A] border border-white border-opacity-10 text-white text-opacity-60 px-4 py-2 rounded">
                      {data.details}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col px-3 mb-9">
          {marketTable.map((data, index) => (
            <div
              key={index}
              className="hover:bg-[#FFFFFF0D] cursor-pointer mb-4 p-4 bg-[#030D0A] rounded-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={data.icon}
                  className="w-7 h-7"
                  alt="coin-icon"
                  width={28}
                  height={28}
                />
                <span className="ml-3 text-[14px] md:text-[18px] text-white text-opacity-90">
                  {data.name}
                </span>
              </div>
              {[
                { label: 'Total Supplied', value: data.collateral },
                { label: 'Supply APY', value: data.tvl },
                { label: 'Total Borrowed', value: data.mcr },
                { label: 'Borrow APY, Variable', value: data.apr },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-2"
                >
                  <h3 className="text-[14px] md:text-[18px] text-white text-opacity-60 font-normal">
                    {item.label}
                  </h3>
                  <div className="text-[14px] md:text-[18px] text-white text-opacity-90">
                    {item.value}
                  </div>
                </div>
              ))}
              <button
                onClick={() => router.push(`/market/${index}`)}
                className="bg-[#FFFFFF0D] text-white text-opacity-60 border mt-4 border-white border-opacity-20 w-full h-[39px] rounded"
              >
                {data.details}
              </button>
              <div className="mt-9">
                <hr className="" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Table;
