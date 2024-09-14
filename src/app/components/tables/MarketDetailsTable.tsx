'use client';

import Image from 'next/image';
import { assets } from '@/assets';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { ProgressWithDetails, SupplyInfo } from '../singlepage';
import ToggleCard from '../singlepage/togglecard';

const data = [
  { name: 'July 8', uv: 8 },
  { name: 'July 12', uv: 8 },
  { name: 'July 14', uv: 4 },
  { name: 'July 20', uv: 2 },
  { name: 'July 22', uv: 0 },
];

const MarketDetailsTable = () => {
  // Custom tick component to add margin above X-axis labels
  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <text x={x} y={y + 16} textAnchor="middle" fill="#666" fontSize={12}>
        {payload.value}
      </text>
    );
  };

  return (
    <div className=" py-6 mt-8 md:mt-20 flex flex-col ">
      {/** supply */}
      <div className="flex flex-col lg:flex-row items-center gap-14 mb-10">
        <div className="  w-full lg:w-1/2 xl:w-[50%]  ">
          <SupplyInfo cautionIcon={assets.caution} text="Supply Info" />
          <ProgressWithDetails
            progress={41.5}
            totalSupplied="30.39k of 1M USDT"
            suppliedText="Total supplied"
            warningIcon={assets.caution}
          />
          <div className="flex px-3 lg:px-6 justify-between items-center mt-10 w-full  ">
            <div className=" flex items-center gap-2">
              <Image
                src={assets.dot}
                width={14}
                height={14}
                alt="caution-icon"
                className="w-2 md:w-4 lg:w-2 text-white text-opacity-60"
              />
              <p className="text-white space-x-2 text-[12px] font-normal font-montserrat md:text-[10px] lg:text-[10px] xl:text-[20px]">
                Supply APR
              </p>
            </div>
          </div>

          <div
            style={{ height: 250 }}
            className="mt-7 w-full px-0 md:px-6 text-[14px] mb-8"
          >
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line
                  type="natural"
                  dataKey="uv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={true}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={true} axisLine={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full lg:w-[45%] -mt-10 md:mt-0">
          <ToggleCard />
        </div>
      </div>
      <div className="w-full">
        <hr />
      </div>
      {/** Borrow */}
      <div className="flex flex-col lg:flex-row items-center gap-14 mt-0 lg:mt-20 mb-10">
        <div className="  w-full lg:w-1/2 xl:w-[50%]   mt-10">
          <SupplyInfo cautionIcon={assets.caution} text="Borrow Info" />
          <ProgressWithDetails
            progress={41.5}
            totalSupplied="30.39k of 1M USDT"
            suppliedText="Total supplied"
            warningIcon={assets.caution}
          />
          <div className="flex px-3 lg:px-6 justify-between items-center mt-10 w-full  ">
            <div className=" flex items-center gap-2">
              <Image
                src={assets.dot}
                width={14}
                height={14}
                alt="caution-icon"
                className="w-2 md:w-4 lg:w-2 text-white text-opacity-60"
              />
              <p className="text-white space-x-2 text-[12px] font-normal font-montserrat md:text-[10px] lg:text-[10px] xl:text-[20px]">
                Borrow APR, variable
              </p>
            </div>
          </div>

          <div
            style={{ height: 250 }}
            className="mt-7 w-full px-0 md:px-6 text-[14px] mb-8"
          >
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 15, right: 0, bottom: 20, left: -30 }}
              >
                <Line
                  type="natural"
                  dataKey="uv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="3 3"
                  vertical={true}
                />
                <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
                <YAxis tickLine={true} axisLine={true} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full lg:w-[45%] -mt-10 md:mt-8">
          <ToggleCard />
        </div>
      </div>
    </div>
  );
};

export default MarketDetailsTable;
