import React, { FC } from 'react';
import { IAssetTable } from './type';
import Image from 'next/image';
import { assets } from '@/assets';
import Button from '../button';
import Link from 'next/link';

const AssetTableDisplay: FC<IAssetTable> = ({
  styles,
  header,
  colmumHeads,
  data,
}) => {
  return (
    <div
      className={`border border-[#302E2E] bg-table-gradient p-3 md:p-6  md:rounded-[20px] min-h-[200px] ${styles}`}
    >
      <h1 className="text-white font-montserrat font-semibold text-[14px] smd:text-[18px] border-b border-[#302E2E] pb-3 md:pb-5">
        {header}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-transparent">
            <tr className="h-[65px]">
              {colmumHeads.map((title, index) => (
                <th
                  key={index}
                  scope="col"
                  className=" text-center text-[14px] md:text-[14px]/[21px]  text-light-200 font-semibold"
                >
                  <div
                    className={`flex ${index === 0 ? 'justify-start' : 'justify-center'} items-center`}
                  >
                    <span className="text-light-60 text-center font-montserrat text-[13px]  font-semibold">
                      {title}
                    </span>
                    {title !== '' && (
                      <Image
                        src={assets.sortIcon}
                        className="ml-2 hidden md:flex  w-[10px] h-[10px]"
                        alt="sort-icon"
                        width={10}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((info, index) => (
              <tr
                className="h-[65px] hover:bg-light-10 pl-2 md:pl-4 cursor-pointer mb-4 hover:rounded-[18px]"
                key={index}
              >
                <td
                  scope="col"
                  className="pr-6 pl-2 py-5  text-center text-[18px]/[21px]  text-light-200 font-semibold"
                >
                  <div className="flex items-center">
                    <Image
                      src={info.icon}
                      className="mr-3 w-[15px] h-[15px]"
                      alt="sort-icon"
                      width={15}
                    />
                    <span className="text-white text-[14px] font-[500] font-montserrat">
                      {info.name}
                    </span>
                  </div>
                </td>

                <td
                  scope="col"
                  className="pr-6 pl-1 py-5  text-center text-[18px]/[21px]  text-light-200 font-semibold"
                >
                  <span className="text-white text-[14px] font-[500] font-montserrat">
                    {info.balance}
                  </span>
                </td>
                <td
                  scope="col"
                  className="pr-6 pl-1 py-5  text-center text-[18px]/[21px]  text-light-200 font-semibold"
                >
                  <span className="text-white text-center text-[14px] font-[500] font-montserrat">
                    {info.apy}
                  </span>
                </td>
                <td
                  scope="col"
                  className="pr-6 pl-6 py-5  text-center text-[18px]/[21px]  text-light-200 font-semibold"
                >
                 <Link href={`/market/${index}`}>
                 <Button styles="bg-[#5356E033] border border-light-50 font-normal font-montserrat text-[13px] rounded-[5px] h-[35px] w-[83px] text-light-60">
                    Details
                  </Button>
                 </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTableDisplay;
