import {ActionCreator, Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {ActionsType, CouponActionType} from './couponTypes';
import { adress } from '../../../../types/env';


const Coupon:ActionCreator<ThunkAction<Promise<any>, any, null, CouponActionType>> = (data:any, headers:any) => {
    return async (dispatch:Dispatch) => {
      try{
          const request = await axios({
            method: "POST",
            url:`${adress}/api/coupon/get`,
            data:{
              data: data,
              headers: headers
            }
          });
          dispatch({type: ActionsType.COUPON, payload: request.data});
      }catch(err){
        console.error(err);
      }
    }
}


export default Coupon;