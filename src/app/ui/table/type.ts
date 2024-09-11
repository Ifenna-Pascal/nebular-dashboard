export interface IAssetTable {
    header: string;
    colmumHeads: string[];
    styles?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]
}