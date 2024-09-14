import React, { useState } from 'react';
import Card from './card';


const ToggleCard: React.FC = () => {
  const [isSupply, setIsSupply] = useState(true);

  const handleToggle = (toggleState: boolean) => {
    setIsSupply(toggleState);
  };

  const handleButtonClick = () => {
    console.log("button clicked")
  };

  return (
    <div className="flex flex-col items-center p-4 border border-[#302E2E] bg-gradient-to-b from-[#0303033B] to-[#31324282] shadow-md mb-10 py-10 rounded-[10px] ">
      <div className="flex  mb-4 w-full md:w-[70%] lg:w-[90%] bg-[#32367C4D] bg-opacity-30">
        <button
          onClick={() => handleToggle(true)}
          className={`h-[40px] lg:h-[56px]  text-[12px]/[14px] lg:text-[20px]/[24px] font-montserrat font-semibold w-1/2 text-black ${isSupply ? 'bg-[#ffffff] rounded-lg' : 'bg-[#32367C4D] bg-opacity-30 bg-none shadow-lg text-white text-opacity-60'}  transition`}
        >
          Supply
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`h-[40px] lg:h-[56px]  text-[12px]/[14px] lg:text-[20px]/[24px] font-montserrat font-semibold  w-1/2 text-black ${!isSupply ? 'bg-[#ffffff] rounded-lg' : 'bg-[#32367C4D] text-white text-opacity-60 rounded-none'} transition`}
        >
          Borrow
        </button>
      </div>
      <Card
        title={isSupply ? 'Supply ' : 'Borrow '}
        details={isSupply ? 'Supply' : 'Borrow'}
        buttonLabel={isSupply ? 'Supply ' : 'Borrow '}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default ToggleCard;
