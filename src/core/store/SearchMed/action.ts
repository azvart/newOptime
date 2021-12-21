import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios,{AxiosResponse} from 'axios';
import {ActionsType, SearchMedAction} from './searchTypes'
import { adress } from '../../../../types/env';

const SearchMed:ActionCreator<ThunkAction<Promise<any>, any, null,SearchMedAction>> = (name:string, headers:any) => {
  return async (dispatch:Dispatch) => {
    try{
      const medications = await axios({
        method:"POST",
        url:`${adress}/api/medication/top`,
        data:{
          name:name,
          headers:{
          Authorization: headers.authorization,
          'x-account-id': headers['x-account-id'],
        }}
      })
        dispatch({type:ActionsType.SEARCH,payload: medications.data})
    }catch(err){
      console.error(err);
    }
  }
};



export default SearchMed;


