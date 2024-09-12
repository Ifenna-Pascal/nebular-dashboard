'use client';

import Image from 'next/image';
import ProgressBar from "@/app/components/progressbar/index";
import { assets } from '@/assets';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
// import { useState } from 'react';
// import Matic from "../marketdetails-component/Matic";
// import MaticEth from "../marketdetails-component/MaticEth";

const data = [
  { name: 'July 8', uv: 8 },
  { name: 'July 12', uv: 8 },
  { name: 'July 14', uv: 4 },
  { name: 'July 20', uv: 2 },
  { name: 'July 22', uv: 0 },
];

const MarketDetailsTable = () => {
  // Custom tick component to add margin above X-axis labels
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <text x={x} y={y + 16} textAnchor="middle" fill="#666" fontSize={12}>
        {payload.value}
      </text>
    );
  };
  // const [activeTab, setActiveTab] = useState('matic');

  // const handleTabChange = (tab: 'matic' | 'maticEth') => {
  //   setActiveTab(tab);
  // };
  return (
    <div className=" py-6  mt-8 flex flex-col ">
      {/** supply */}
      <div className="  w-full lg:w-1/2 xl:w-1/2   md:px-6 lg:px-6 xl:px-8">
          <div className="flex gap-2 text-white  justify-start  items-center md:justify-start px-2 md:px-6 mt-5">
            <p className="text-[12px] lg:text-[20px]/[24px] font-montserrat text-center md:text-left font-regular text-gray-400">
              Supply Info
            </p>
            <Image
              src={assets.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
            />
          </div>
          <div className=" flex  md:flex-row space-x-6 items-center px-2 md:px-6  text-white mt-6 md:mt-10">
          <ProgressBar progress={41.5} />
              <div>
                <div className="flex text-white items-center gap-2">
                  <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[17px] font-montserrat  font-regular text-white text-opacity-60">
                    Total supplied
                  </p>
                  <Image
                    src={assets.caution}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-3 md:w-4 lg:w-4 text-white text-opacity-60"
                  />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[10px] xl:text-[20px] font-montserrat  font-medium text-white">
                30.39k of 1M USDT
                </p>
                <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[17px] font-montserrat  font-normal text-white text-opacity-60">
                $29.39k of $999.23K
                </p>
              </div>
              
           
          </div>
          <div className="flex px-6 justify-between items-center mt-10 w-full  ">
            <div className=" flex items-center gap-2">
            <Image
                    src={assets.dot}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-2 md:w-4 lg:w-2 text-white text-opacity-60"
                  />
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[10px] lg:text-[10px] xl:text-[16px]">
                Supply APR
              </p>
            </div>
           
          </div>

          <div
            style={{ height: 250 }}
            className="mt-7 w-full px-2 md:px-6  text-[14px] mb-8 "
          >
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line type="natural" dataKey="uv" stroke="8" />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={false} axisLine={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          </div>
        <div className='w-full'>
          <hr/>
        </div>
        {/** Borrow */}
        <div className="  w-full lg:w-1/2 xl:w-1/2   md:px-6 lg:px-6 xl:px-8 mt-10">
        <div className="flex gap-2 text-white  justify-start  items-center md:justify-start px-2 md:px-6 mt-5">
            <p className="text-[12px] lg:text-[20px]/[24px] font-montserrat text-center md:text-left font-regular text-gray-400">
            Borrow APR, variable
            </p>
            <Image
              src={assets.caution}
              width={14}
              height={14}
              alt="caution-icon"
              className="w-3 md:w-4 lg:w-4 xl:w-4 text-gray-400"
            />
          </div>
          <div className=" flex  md:flex-row space-x-6 items-center px-2 md:px-6  text-white mt-6 md:mt-10">
          <ProgressBar progress={81} />
              <div>
                <div className="flex text-white items-center gap-2">
                  <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[17px] font-montserrat  font-regular text-white text-opacity-60">
                  Total Borrowed
                  </p>
                  <Image
                    src={assets.caution}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-3 md:w-4 lg:w-4 text-white text-opacity-60"
                  />
                </div>
                <p className="text-[10px] md:text-[12px] lg:text-[10px] xl:text-[20px] font-montserrat  font-medium text-white">
                30.39k of 1M USDT
                </p>
                <p className="text-[8px] md:text-[12px] lg:text-[9px] xl:text-[17px] font-montserrat  font-normal text-white text-opacity-60">
                $29.39k of $999.23K
                </p>
              </div>
              
           
          </div>
          <div className="flex px-6 justify-between items-center mt-10 w-full ">
            <div className=" flex items-center gap-2">
            <Image
                    src={assets.dot}
                    width={14}
                    height={14}
                    alt="caution-icon"
                    className="w-2 md:w-4 lg:w-2 text-white text-opacity-60"
                  />
              <p className="text-white space-x-2 text-[10px] font-sora md:text-[10px] lg:text-[10px] xl:text-[16px]">
              Borrow APR, variable
              </p>
            </div>
           
          </div>

          <div
            style={{ height: 250 }}
            className="mt-7 w-full px-2 md:px-6  text-[14px] "
          >
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line type="natural" dataKey="uv" stroke="8" />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={false} axisLine={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          </div>
    </div>
  );
};

export default MarketDetailsTable;
