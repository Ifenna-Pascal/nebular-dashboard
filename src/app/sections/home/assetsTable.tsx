'use client'
import { tokenAsssets } from '@/__mockdata__/tokenAssets';
import AssetTableDisplay from '@/app/ui/table/assetTableDisplay';
import { assets } from '@/assets';
import Image from 'next/image';
import React, { useState } from 'react';

enum IState {
  SUPPLY = 'Supply',
  BORROW = 'Borrow'
}
const AssetsTable = () => {
  const [state, setState] = useState<IState>(IState.SUPPLY);

  const toggle = () => {
    if(state === IState.SUPPLY) {
      setState(IState.BORROW)
    }else {
      setState(IState.SUPPLY)
    }
  }
  return (
    <div>
      <div className="px-12 hidden md:grid grid-cols-2 space-x-12 pb-16">
        <AssetTableDisplay
          data={tokenAsssets}
          styles="col-span-1"
          colmumHeads={['Asset Name', 'Wallet', 'Supply APY', '']}
          header="Assets to Supply"
        />
        <AssetTableDisplay
          data={tokenAsssets}
          styles="col-span-1"
          colmumHeads={['Asset Name', 'Wallet', 'Borrow APY', '']}
          header="Assets to Borrow"
        />
      </div>
      <div className='flex px-2 flex-col md:hidden'>
            <div className='flex items-center'>
              <h1 className='text-[15px] font-montserrat pl-4  text-white'>{state}</h1>
              <Image 
                src={state === IState.SUPPLY ? assets.onSwitch : assets.offSwitch}
                alt='switch-icon'
                width={35}
                height={35}
                className='w-[50px] h-[50px] mt-2'
                onClick={toggle}
              />
            </div>
          {
            state === IState.SUPPLY ? <AssetTableDisplay
            data={tokenAsssets}
            styles="col-span-1"
            colmumHeads={['Asset Name', 'Wallet', 'Supply APY', '']}
            header="Assets to Supply"
          /> : 
          <AssetTableDisplay
          data={tokenAsssets}
          styles="col-span-1"
          colmumHeads={['Asset Name', 'Wallet', 'Borrow APY', '']}
          header="Assets to Borrow"
        />
          }
      </div>
    </div>
  );
};

export default AssetsTable;
