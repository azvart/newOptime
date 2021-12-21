import {ActionsType,CouponActionType} from "./couponTypes";

const couponReducer = (state:any = {}, action:CouponActionType) => {
  switch(action.type){
    case ActionsType.COUPON:
      return action.payload;
    default:
      return state;
  }
};



export default couponReducer;
