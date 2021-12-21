import {ActionCreator, Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, {AxiosResponse} from 'axios';
import {ActionsType, TopMedAction, SearchGroupAction} from './topMedTypes';
import { adress } from '../../../../types/env';



const TopMed:ActionCreator<ThunkAction<Promise<any>,any,null,TopMedAction>> = (headers:any) => {
  return async (dispatch:Dispatch) => {
    try{
      const topMed:any = await axios({
        method: "POST",
        url: `${adress}/api/medication/top`,
        data:{
          headers:{
            Authorization: headers.authorization,
            'x-account-id': headers['x-account-id'],
          }
        }
      });
      dispatch({type:ActionsType.TOP, payload: topMed.data});
    }catch(err){
      console.error(err);
    }
  }
};

export const SearchGroup:ActionCreator<ThunkAction<Promise<any>, any, null, SearchGroupAction>> = (name:string) => {
  return async (dispatch:Dispatch) => {
    try{
      const group:AxiosResponse = await axios({
        url:`${adress}/api/medication/group`,
        data:{
          name:name
        }
      });
      dispatch({type:ActionsType.GROUP, payload:group.data});
    }catch(err){
      console.error(err);
    }
  }
}

export default TopMed;