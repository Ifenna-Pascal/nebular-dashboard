export interface IWalletCard {
  styles?: string;
  text: string;
  value: string;
}

export interface IWalletAPY extends IWalletCard {
  apy: string;
}
