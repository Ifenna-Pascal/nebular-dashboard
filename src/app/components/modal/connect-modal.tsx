import Image from 'next/image';
import { wallets } from '../../__mockdata__/tables';
import { assets } from '@/assets';
import { MdOutlineCancel } from 'react-icons/md';

interface IProp {
  img: string;
  name: string;
  onClick: () => void;
}

const Wallet = ({ img, name, onClick }: IProp) => {
  return (
    <div
      className="mb-4 lg py-1 lg:py-2 cursor-pointer px-3 flex items-center gap-3 mt-6 bg-[#0000000D] bg-opacity-5 rounded-[15px] shadow-sm max-w-[85%] mx-auto"
      onClick={onClick}
    >
      <Image
        src={img}
        alt="wallet-icon"
        width={45}
        height={45}
        className="w-[30px] md:w-[40px] h-[40px]"
      />
      <span className="text-[#000000] text-opacity-90 text-[11px] md:text-[15px] lg:text-[`8px] xl:text-[18px]/[45px] py-3  text-center font-montserrat">
        {name}
      </span>
    </div>
  );
};

const WalletConnectModal = ({
  close,
  onWalletSelect,
}: {
  close: () => void;
  onWalletSelect: () => void;
}) => {
  return (
    <div className="border border-[#FFFFFF66] max-h-[800px]  rounded-[30px] lg:rounded-[50px]  mx-auto w-[88%]  lg:w-[550px]  px-0 md:px-0 bg-[#FFFFFF]">
      <div className="w-full py-1 lg:py-4 relative">
        <MdOutlineCancel
          onClick={close}
          className="absolute cursor-pointer top-5 lg:top-10 right-10 text-[20px] lg:text-[40px] font-light text-[#00000080] text-opacity-50"
        />
        <div className="flex items-center justify-center mt-10 lg:mt-10 gap-1">
          <Image
            src={assets.wallet}
            alt="wallet-icon"
            width={10}
            height={10}
            className="w-5 lg:w-5"
          />
          <h2 className="font-montserrat text-[13px] md:text-[20px] lg:text-[38px] leading-5 xl:text-[30px]/[54px]  text-[#5457DC] text-center font-medium">
            Connect Wallet
          </h2>
        </div>
        <div className="border-[#000000] border-opacity-30 border-t mt-3">
          <p className="font-montserrat text-[14px] md:text-[18px] lg:text-[24px]/[42px] text-[#000000] text-opacity-50 text-center mt-2">
            Choose a wallet you want to connect to
          </p>
        </div>
      </div>

      {wallets.map((wallet, index) => (
        <Wallet
          key={index}
          img={wallet.icon}
          name={wallet.name}
          onClick={onWalletSelect}
        />
      ))}
      <span className="text-black flex items-center justify-center font-inter  pb-6 lg:pb-10 pt-5 py-16 font-medium text-[7px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
        By connecting, I accept Nebula
        <p className="text-[#5457DC] ml-2">Terms of Service</p>
      </span>
    </div>
  );
};

export default WalletConnectModal;
