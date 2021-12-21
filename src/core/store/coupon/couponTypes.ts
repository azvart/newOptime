export enum ActionsType{
  COUPON = "COUPON"
};


export interface CouponAction{
  type: typeof ActionsType.COUPON,
  payload: any,
};


export type CouponActionType = CouponAction;