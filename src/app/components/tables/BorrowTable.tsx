import Image from 'next/image';
import { supplyTable } from '../../__mockdata__/tables';
import { assets } from '@/assets';
import Button from '@/app/ui/button';

const BorrowTable = () => {
  return (
    <div className=" py-6 lg:overflow-x-auto ">
      <div className="border border-[#3b3c3c] bg-[#030D0A] shadow-md min-h-[400px] rounded-[10px] ">
        <div className="hidden lg:block">
          <table className=" min-w-full divide-y font-sora  divide-[#FFFFFF1A] ">
            <thead className="bg-transparent">
              <tr className="h-[85px]">
                <th
                  scope="col"
                  className="lg:px-5 xl:px-6 py-5 ml-6 text-left lg:text-[6px]/[8px] xl:text-[8px]/[10px] font-sora text-white text-opacity-60  font-semibold"
                >
                  <span className="flex items-center">
                    <span>Assets</span>
                    <Image
                      src={assets.arrowDownIcon}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={40}
                      height={40}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 xl:px-6 py-5 text-left lg:text-[6px]/[8px] xl:text-[8px]/[10px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <span className="flex items-center">
                    <span>Balance</span>
                    <Image
                      src={assets.arrowDownIcon}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 xl:px-6 py-5 text-left lg:text-[6px]/[8px] xl:text-[8px]/[10px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <span className="flex items-center">
                    <span>APY</span>
                    <Image
                      src={assets.arrowDownIcon}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
                <th
                  scope="col"
                  className="lg:px-1 xl:px-6 py-5 text-left lg:text-[6px]/[8px] xl:text-[8px]/[10px] font-sora text-white text-opacity-60 font-semibold"
                >
                  <span className="flex items-center">
                    <span>Status</span>
                    <Image
                      src={assets.arrowDownIcon}
                      className="ml-2 w-[3px] xl:w-[5px]  text-white text-opacity-60"
                      alt="sort-icon"
                      width={100}
                      height={100}
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-[#FFFFFF1A]">
              {supplyTable.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-[#FFFFFF0D] cursor-pointer"
                  >
                    <td className="lg:px-4 xl:px-6 py-7 whitespace-nowrap">
                      <span className=" flex items-center">
                        <Image
                          src={data.icon}
                          alt="coin-icon"
                          className="lg:w-[10px] xl:w-[14px]"
                          width={100}
                          height={100}
                        />
                        <span className="lg:text-[9px]/[11px] xl:text-[11px]/[13px] ml-2 xl:ml-3 font-sora text-white">
                          {data.name}
                        </span>
                      </span>
                    </td>
                    <td className="lg:px-0 xl:px-6 py-7 whitespace-nowrap">
                      <span className="lg:text-[9px]/[11px] xl:text-[11px]/[13px]  font-sora text-white">
                        {data.balance}
                      </span>
                    </td>
                    <td className="lg:px-0 xl:px-6 py-7 whitespace-nowrap">
                      <span className="lg:text-[9px]/[11px] xl:text-[11px]/[13px]  font-sora text-white">
                        {data.apy}
                      </span>
                    </td>

                    <td className=" lg:text-[8px]/[11px] xl:text-[10px]/[13px] lg:px-1 xl:px-6 py-7 pl-12 font-sora text-white ">
                      <button className="bg-[#1F8885] bg-opacity-[49%] lg:w-[58px] h-[20px] xl:w-[68px] xl:h-[23px] rounded-[3px] ">
                        {data.status}
                      </button>
                    </td>
                    <td className="lg:text-[8px]/[11px] xl:text-[10px]/[13px]  lg:px-1 xl:px-6 py-7 font-sora  text-white text-opacity-60  ">
                      <button className="bg-[#0F5440] lg:w-[46px] h-[20px] xl:w-[56px] xl:h-[23px]  border border-white border-opacity-15 rounded-[3px] ">
                        {data.supply}
                      </button>
                    </td>
                    <td className="lg:text-[8px]/[11px] xl:text-[10px]/[13px] lg:px-1 xl:px-6 py-7 pl-12 font-sora text-white text-opacity-60   ">
                      {' '}
                      <button className="bg-[#FFFFFF0D] lg:w-[45px] h-[20px] xl:w-[55px] xl:h-[23px]  rounded-[3px] border border-white border-opacity-30 ">
                        {data.details}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="">
          <div className="lg:hidden flex flex-col px-0 md:px-3  mb-9">
            {supplyTable.map((data, index) => {
              return (
                <div key={index} className="  cursor-pointer">
                  <div className="flex flex-col">
                    <div className=" flex-col items-center px-6">
                      <div className="w-full text-white text-opacity-50 mb-7  mt-5">
                        <hr />
                      </div>
                      <div className="flex items-center px-2">
                        <Image
                          src={data.icon}
                          alt="coin-icon"
                          className="w-[20px] md:w-[24px]"
                          width={100}
                          height={100}
                        />
                        <div className=" text-[18px]/[18px] md:text-[20px]/[22px] ml-3 font-medium font-sora text-white">
                          {data.name}
                        </div>
                      </div>
                      <div className="flex-col mt-5">
                        <div className="flex items-center justify-between">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white text-opacity-60 font-normal">
                            Value
                          </h3>
                          <div className="text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white ">
                            {data.balance}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora  text-white text-opacity-60 font-normal">
                            Supply APY
                          </h3>
                          <div className="text-[14px]/[17px] md:text-[16px]/[21px] font-sora text-white ">
                            {data.apy}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h3 className=" py-2 text-left text-[14px]/[17px] md:text-[16px]/[21px] font-sora  text-white text-opacity-60 font-normal">
                            Status
                          </h3>
                          <div className="text-[8px]/[10px] md:text-[10px]/[15px] font-sora text-white ">
                            <button className="bg-[#0F5440] w-[58px] h-[22px] md:w-[70px] md:h-[22px] py-1 rounded-[4px] ">
                              {data.status}
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-8 mt-4 mb-1">
                          <Button styles="bg-[#106157]   h-[31px] text-[12px] md:text-[14px] text-white md:h-[34px] text-opacity-50 rounded-[4px] md:w-full">
                            {data.supply}
                          </Button>
                          <Button styles="  border border-white border-opacity-30 bg-[#FFFFFF0D]  h-[31px] text-[12px] md:h-[34px] md:text-[14px] md:w-full text-white text-opacity-50 rounded-[4px]">
                            {data.details}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowTable;
