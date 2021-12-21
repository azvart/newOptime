export enum ActionsType{
  PRICE = "PRICE"
}


export interface CurrentPrice{
  type: typeof ActionsType.PRICE,
  payload: any
};


export type PriceMed = CurrentPrice;
