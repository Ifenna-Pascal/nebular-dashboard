'use client';

import Image from 'next/image';
import { marketTable } from '../../__mockdata__/tables';
import { assets } from '@/assets';
import { useRouter } from 'next/navigation';

const Table = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto px-4 md:px-10  ">
      <div className="border border-[#302E2E] bg-gradient-to-b from-[#0303033B] to-[#31324282] shadow-md min-h-[400px] rounded-lg px-8">
        <div className="flex flex-row items-center justify-between px-4 lg:px-6 border-b border-[#302E2E] pb-5">
          <h3 className="text-white mt-6 text-[14px] md:text-[25px] xl:text-[30px] font-montserrat font-semibold">
            Market
          </h3>
          <div className="relative bg-[#6767B033] bg-opacity-20 flex items-center border border-white border-opacity-10 w-[110px] md:w-[209px] h-[30px] md:h-[54px] mt-8 rounded-[5px] md:rounded-[10px]">
            <Image
              src={assets.searchIcon}
              width={10}
              height={10}
              alt="search-icon"
              className="absolute left-3 w-3 lg:w-5"
            />
            <input
              type="text"
              className="w-full ml-8 md:ml-10 bg-transparent placeholder:text-light-200 text-white text-opacity-60 focus:outline-none font-montserrat text-light-200 text-[6px] lg:text-[10px] xl:text-[14px]"
              placeholder="Search for all assets"
            />
          </div>
        </div>

        <div className="overflow-auto">
          <table className="min-w-[700px] lg:min-w-full border-separate border-spacing-y-6 mt-0 lg:mt-4 ">
            <thead>
              <tr className="h-[45px] lg:h-[85px] mt-4 lg:mt-0  ">
                {[
                  'Asset Name',
                  'Liquidity',
                  'Supply APY',
                  'Total Supply',
                  'Borrowed APY',
                  'Total Borrowed',
                ].map((header, index) => (
                  <th
                    key={index}
                    className="  text-left text-[10px] md:text-[12px] lg:text-[16px] font-montserrat text-white text-opacity-60 font-semibold"
                  >
                    <span className="flex items-center text-[8px] md:text-[10px] font-montserrat lg:text-[16px]">
                      {header}
                      <Image
                        src={assets.sortIcon}
                        className="ml-2 w-[5px] lg:w-2"
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
                  className="bg-[#FFFFFF] bg-opacity-5 rounded-[10px]  hover:bg-[#FFFFFF] hover:bg-opacity-10 cursor-pointer text-white"
                  onClick={() => router.push(`/market/${index}`)}
                >
                  <td className="px-3 py-4 lg:px-6 mt-2 flex items-center">
                    <Image
                      src={assets.usdtIcon}
                      alt="coin-icon"
                      width={24}
                      height={24}
                      className="w-5"
                    />
                    <span className="ml-3 text-[8px] md:text-[14px]  font-montserrat xl:text-[16px]">
                      {data.name}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-[8px] md:text-[14px]  font-montserrat xl:text-[16px]">
                    {data.collateral}
                  </td>
                  <td className="px-6 py-6 text-[8px] md:text-[14px]  font-montserrat xl:text-[16px]">
                    {data.tvl}
                  </td>
                  <td className="px-6 py-6 text-[8px] md:text-[14px] font-montserrat xl:text-[16px]">
                    {data.mcr}
                  </td>
                  <td className="  lg:ml-0 px-6 py-5 text-[8px] md:text-[14px] font-montserrat xl:text-[18px]">
                    {data.apr}
                  </td>
                  <td className="   px-6 py-6 text-[8px] md:text-[14px] font-montserrat xl:text-[16px]">
                    {data.tbr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
