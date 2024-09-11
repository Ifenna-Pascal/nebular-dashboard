import { tokenAsssets } from '@/__mockdata__/tokenAssets';
import AssetTableDisplay from '@/app/ui/table/assetTableDisplay';
import React from 'react';

const AssetsTable = () => {
  return (
    <div className="px-12 grid grid-cols-2 space-x-12 pb-16">
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
  );
};

export default AssetsTable;
