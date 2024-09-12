import Image from 'next/image';
import { marketData } from '../__mockdata__/market';
import { assets } from '@/assets';
import Table from '../../app/components/tables/MarketTable';
import Button from '@/app/ui/button';
import WalletInfoCardApy from '../sections/home/walletInfoCardApy';

const MarketHome = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <div className=" px-4 md:px-10    font-sora h-[270px] md:h-[255px] lg:h-[255px] xl:h-[300px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto py-3  lg:py-10">
          <h1 className="lg:hidden font-montserrat text-[14px]/[17px] text-white text-opacity-80 font-bold">
            Market
          </h1>
          <div className="flex items-center  ">
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
          <div className="hidden lg:flex justify-between  items-end mt-10">
            <div className="lg:w-3/5 xl:w-2/3 flex items-center lg:rounded-[7px] xl:rounded-[10px] bg-[#FFFFFF1A] bg-opacity-10 justify-between lg:h-[85px]  xl:h-[115px]">
              {marketData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" text-white  flex-col px-2 lg:px-6 cursor-pointer"
                  >
                    <h3 className="font-montserrat text-[6px] md:text-[10px] text-[#FFFFFF] lg:text-[12px] xl:text-[16px]/[24px]">
                      {data.title}
                    </h3>
                    <h6 className="font-montserrat text-[8px] text-[#FFFFFF] text-opacity-70 font-medium md:text-[10px] lg:text-[14px] xl:text-[24px]/[36px]">
                      {data.amount}
                    </h6>
                  </div>
                );
              })}
            </div>

            <div className="">
              <button className=" placeholder:text-light-200 bg-[#FFFFFF0D] p-3 text-white text-opacity-60 border border-white border-opacity-10 lg:h-[45px] rounded-[5px]  focus:outline-none font-montserrat text-light-200 lg:text-[10px] xl:text-[14px]">
                Veiw transaction
              </button>
            </div>
          </div>
        </div>
        {/** mobile version */}
        <div className="lg:hidden flex flex-col gap-2 mt-2 md:mt-0">
          <div className=" flex flex-col w-full space-y-4 ">
            <WalletInfoCardApy
              apy="$797.61M"
              text="Total Market Size (TVL)"
              value="42,063.05"
              net="Earning"
            />
            <WalletInfoCardApy
              apy="$1.37B"
              text="Borrowing"
              value="797.61M"
              net="Collateral"
            />
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default MarketHome;
