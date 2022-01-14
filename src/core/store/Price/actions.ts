import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import {ActionsType, CurrentPrice} from './priceTypes';
import { adress } from '../../../../types/env';


const getPrice:ActionCreator<ThunkAction<Promise<any>,any, null,CurrentPrice>> = (
quantity:string,
formulationId:string,
type:string,
name:string,
gpi14:string,
ubi:boolean,
searchLocation:string,
searchLocationZipCode: string,
) => {
  return async (dispatch:Dispatch) => {
    try{
      const price:any = await axios({
        method:"POST",
        url: `${adress}/api/price/getting`,
        withCredentials:true,
        data:{
          quantity: quantity,
          formulationId: formulationId,
          type: type,
          name: name,
          gpi14: gpi14,
          ubi: ubi,
          searchLocation: searchLocation,
          searchLocationZipCode: searchLocationZipCode,
         
        }
      });

      dispatch({type: ActionsType.PRICE, payload: price.data});
    }catch(err){
      console.error(err);
    }
    // return axios({
    //   method:"POST",
    //   url:`${adress}/api/price/getting`,
    //   withCredentials:true,
    //   data:{
    //       quantity: quantity,
    //       formulationId: formulationId,
    //       type: type,
    //       name: name,
    //       gpi14: gpi14,
    //       ubi: ubi,
    //       searchLocation: searchLocation,
    //       searchLocationZipCode: searchLocationZipCode,
    //   }
    // }).then(({data}) => {
    //   dispatch({type:ActionsType.PRICE,payload:data});
    // })
  }
}




export default getPrice;