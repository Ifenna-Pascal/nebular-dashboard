import Image from 'next/image';
import { marketData } from '../__mockdata__/market';
import { assets } from '@/assets';
import Table from '../../app/components/tables/MarketTable';
import Button from '@/app/ui/button';

const MarketHome = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <div className=" px-4 md:px-10    font-sora h-[186px] md:h-[255px] lg:h-[255px] xl:h-[300px]   py-[1rem] md:py-[0.5rem]   ">
        <div className="  flex flex-col  my-auto  ">
          <div className="flex items-center mt-8 ">
            <h1 className="font-montserrat text-[48px] text-white font-bold">
              Ethereum
            </h1>

            <Image
              src={assets.arrowDownIcon}
              alt="arrow-down"
              width={15}
              className="w-[15px] cursor-pointer ml-2 mt-2"
            />
          </div>
          <div className="hidden lg:flex justify-between  items-end mt-6">
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
              <button className=" placeholder:text-light-200 bg-[#FFFFFF0D] p-3 text-white text-opacity-60 border border-white border-opacity-30 lg:h-[45px] rounded-[5px]  focus:outline-none font-montserrat text-light-200 lg:text-[10px] xl:text-[14px]">
                Veiw transaction
              </button>
            </div>
          </div>
        </div>
        {/** mobile version */}
        <div className="lg:hidden flex flex-col gap-2 mt-2 md:mt-0">
          <div className="flex justify-between items-center ">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Total Market Size
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  10.54B
                </div>
              </div>
              <div className="flex-col">
                <div className=" text-[6px] md:text-[10px] text-white">
                  Total Available
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  5.64B
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <div className="w-[169px] md:w-[60%] h-[42px] md:h-[60px] flex  items-center rounded-md bg-[#013B2A] justify-between px-4 md:px-6">
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Total Borrows
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  <span className="text-white text-opacity-70  font-semibold">
                    $
                  </span>
                  3.19B
                </div>
              </div>
              <div className="flex-col">
                <div className="text-[6px] md:text-[10px] text-white">
                  Collateralization
                </div>
                <div className="text-[8px] md:text-[12px] text-white">
                  133.19%
                </div>
              </div>
            </div>
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
