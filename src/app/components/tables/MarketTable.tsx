'use client';

import Image from 'next/image';
import { marketTable } from '../../__mockdata__/tables';
import { assets } from '@/assets';
import { useRouter } from 'next/navigation';

const Table = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto px-4 md:px-10  ">
      <div className="border border-[#302E2E] bg-gradient-to-b from-[#0303033B] to-[#31324282] shadow-md min-h-[400px] rounded-lg px-5 md:px-8">
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
              className="w-full ml-8 md:ml-10 bg-transparent placeholder:text-light-200 text-white text-opacity-60 focus:outline-none font-montserrat text-light-200 text-[7px] lg:text-[10px] xl:text-[14px]"
              placeholder="Search for all assets"
            />
          </div>
        </div>

        <div className="overflow-auto ">
          <table className="min-w-[700px]  lg:min-w-full mt-0 lg:mt-4 border-separate border-spacing-y-6">
            <thead className="">
              <tr className="h-[45px] lg:h-[85px] mt-4 lg:mt-0 flex items-center justify-between px-4  ">
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
                    className="  text-left text-[10px] md:text-[12px] flex  items-center justify-between px-0 lg:px-0  lg:text-[16px] font-montserrat text-white text-opacity-60 font-semibold "
                  >
                    <span className="flex items-center text-[10px] md:text-[10px] font-montserrat lg:text-[16px] ">
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
                  className="bg-[#FFFFFF] bg-opacity-5 rounded-[10px]  hover:bg-[#FFFFFF] mb-5 md:mb-10 flex items-center justify-between px-0 lg:px-8 hover:bg-opacity-10 cursor-pointer text-white"
                  onClick={() => router.push(`/market/${index}`)}
                >
                  <td className="px-3 py-4 lg:py-7 lg:px-2  flex items-center  ">
                    <Image
                      src={assets.usdtIcon}
                      alt="coin-icon"
                      width={24}
                      height={24}
                      className="w-5"
                    />
                    <span className="ml-3 text-[10px] md:text-[14px]  font-montserrat xl:text-[16px]">
                      {data.name}
                    </span>
                  </td>
                  <td className="  py-2 lg:py-6 text-[10px] md:text-[14px] -ml-10   font-montserrat xl:text-[16px]">
                    {data.collateral}
                  </td>
                  <td className="  py-2 lg:py-6 text-[10px] md:text-[14px] lg:-ml-10   font-montserrat xl:text-[16px]">
                    {data.tvl}
                  </td>
                  <td className="  py-2 lg:py-6 text-[10px] md:text-[14px] font-montserrat xl:text-[16px]">
                    {data.mcr}
                  </td>
                  <td className="  py-2 lg:py-6 text-[10px] md:text-[14px] font-montserrat xl:text-[16px]">
                    {data.apr}
                  </td>
                  <td className="   px-6  py-2 lg:py-6 text-[10px] md:text-[14px] font-montserrat xl:text-[16px]">
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
