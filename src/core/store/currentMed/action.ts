import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import {ActionsType, CurrentMedAction} from './currentTypes';
import { adress,adressServer } from '../../../../types/env';

const CurrentMed:ActionCreator<ThunkAction<Promise<any>, any, null, CurrentMedAction>> = (name:string, header:any) => {
  return async (dispatch:Dispatch) => {
    try{
      const current = await axios({
        method:"POST",
        url:`${adress}/api/medication/current`,
        data:{
          name: name,
          headers:{
            authorization: header.authorization,
            'x-account-id': header['x-account-id'],
          }
        }
      });
      dispatch({type:ActionsType.CURRENT, payload: current.data});
    }catch(err){
      console.error(err);
    }
  }
}

export default CurrentMed;