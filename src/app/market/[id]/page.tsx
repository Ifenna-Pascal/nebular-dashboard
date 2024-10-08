import Image from 'next/image';
import { singleMarketData } from '../../__mockdata__/market';
import { assets } from '@/assets';
import { IoArrowBack } from 'react-icons/io5';

import MarketDetailsTable from '@/app/components/tables/MarketDetailsTable';
import { MarketDetails } from '@/app/components/singlepage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarketDetailsPage = ({ params }: { params: any }) => {
  const marketId = params?.id;
  console.log(marketId);

  return (
    <div className="max-w-[2000px] mx-auto">
      <div className=" px-4 md:px-10    font-sora h-[270px] md:h-[255px] lg:h-[255px] xl:h-[300px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto py-3  lg:py-10">
          <div className="flex items-center gap-3  ">
            <IoArrowBack className="text-white text-opacity-70 text-[3rem] hidden lg:flex" />
            <h1 className=" font-montserrat text-[16px]/[17px] lg:text-[40px]/[48px] text-white text-opacity-80 font-normal">
              Market:
            </h1>
            <Image
              src={assets.usdtIcon}
              alt="arrow-down"
              width={15}
              className="w-[20px] lg:w-[45px] cursor-pointer ml-3  "
            />
            <h1 className="font-montserrat text-[16px]/[17px] lg:text-[40px]/[48px] text-white font-normal ml-[-5px] lg:ml-0 ">
              USDT
            </h1>
          </div>
          <div className="lg:hidden flex items-center  ">
            <h1 className="font-montserrat text-[22px]/[26px] lg:text-[48px] text-white font-bold mt-3 lg:mt-0">
              Ethereum
            </h1>

            <Image
              src={assets.arrowDownIcon}
              alt="arrow-down"
              width={15}
              className="w-[10px] lg:w-[15px] cursor-pointer ml-2 mt-4 lg:mt-2"
            />
          </div>

          <div className="w-[70%] lg:w-[50%] mt-6 lg:mt-10 flex items-center rounded-[5px] px-2 lg:rounded-[7px] xl:rounded-[10px] bg-[#FFFFFF1A] bg-opacity-10 justify-between h-[60px] lg:h-[85px]  xl:h-[115px]">
            {singleMarketData.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" text-white  flex-col px-2 lg:px-6 cursor-pointer"
                >
                  <h3 className="font-montserrat text-[6px] md:text-[10px] text-[#FFFFFF] lg:text-[12px] xl:text-[16px]/[24px]">
                    {data.title}
                  </h3>
                  <h6 className="font-montserrat text-[8px] text-[#FFFFFF] mt-1 ml-1 lg:ml-3 text-opacity-70 font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                    {data.amount}
                  </h6>
                </div>
              );
            })}
          </div>

          <MarketDetailsTable />
          <div className="w-full lg:w-1/2 xl:w-[50%] px-4 md:px-6 lg:px-10 border border-[#302E2E] bg-gradient-to-b from-[#030303] to-[#313242] py-10 rounded-[10px] -mt-10 md:mt-0">
            <p className="text-white text-opacity-70 text-[10px]/[12px]  font-montserrat lg:text-[18px]/[21px] font-normal">
              MARKET DETAILS
            </p>

            <div>
              <MarketDetails title="Price" amount="$0.99997" />
              <MarketDetails title="Market Liquidity" amount="9,885.38 USDT" />
              <MarketDetails title="USDT Supply Cap" amount="No Limit" />
              <MarketDetails title="USDT Borrow Cap" amount="1000000.00" />
              <MarketDetails title="Collateral Factor" amount="$0.99997" />
              <MarketDetails title="Collateral Cap" amount="0.00 USDT" />
              <MarketDetails
                title="Total Collateral Tokens"
                amount="17.72 USDT"
              />
              <MarketDetails title="CrUSDT Minted" amount="360,980.23 CrUSDT" />
              <MarketDetails
                title="Exchange Rate"
                amount="1 USDT = 90.64 crUSDT"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetailsPage;
